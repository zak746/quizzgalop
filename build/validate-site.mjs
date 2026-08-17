import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ignored = new Set(['.git', 'dist', 'node_modules', 'output', 'tmp']);
const htmlFiles = [];
const failures = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignored.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.name === 'index.html') htmlFiles.push(fullPath);
  }
}

function targetFor(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]).replace(/^\/+/, '');
  if (!clean) return path.join(root, 'index.html');
  if (path.extname(clean)) return path.join(root, clean);
  return path.join(root, clean, 'index.html');
}

walk(root);

let checkedReferences = 0;
let checkedInlineScripts = 0;
const missing = new Set();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) failures.push(`${relative}: ${h1Count} balise(s) h1`);
  if (!/<title>[^<]{8,}<\/title>/i.test(html)) failures.push(`${relative}: titre HTML absent`);
  if (!/<meta\s+name="viewport"/i.test(html)) failures.push(`${relative}: viewport absent`);

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  if (new Set(ids).size !== ids.length) failures.push(`${relative}: identifiant HTML dupliqué`);

  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attributes = match[1];
    if (/\bsrc\s*=/i.test(attributes) || /\btype\s*=\s*["']application\/ld\+json["']/i.test(attributes)) continue;
    checkedInlineScripts += 1;
    try {
      // Compilation seule : détecte les scripts générés invalides sans les exécuter dans Node.
      new Function(match[2]);
    } catch (error) {
      failures.push(`${relative}: script inline invalide (${error.message})`);
    }
  }

  for (const match of html.matchAll(/\s(?:href|src)="(\/[^"#]*)"/g)) {
    const reference = match[1];
    if (reference.includes("'") || reference.includes('+')) continue;
    checkedReferences += 1;
    const target = targetFor(reference);
    if (!fs.existsSync(target)) missing.add(`${relative} -> ${reference}`);
  }
}

for (const item of missing) failures.push(`Référence interne absente: ${item}`);

const css = fs.readFileSync(path.join(root, 'assets', 'site.css'), 'utf8');
for (const match of css.matchAll(/url\(['"]?(\/[^)'"?#]+)['"]?\)/g)) {
  checkedReferences += 1;
  if (!fs.existsSync(targetFor(match[1]))) failures.push(`Asset CSS absent: ${match[1]}`);
}

console.log(JSON.stringify({
  htmlPages: htmlFiles.length,
  checkedReferences,
  checkedInlineScripts,
  missingReferences: missing.size,
  failures,
}, null, 2));

if (failures.length) process.exitCode = 1;
