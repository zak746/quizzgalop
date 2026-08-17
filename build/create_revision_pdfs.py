from __future__ import annotations

import json
import shutil
import subprocess
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image as PILImage
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Flowable,
    HRFlowable,
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "output" / "pdf"
WEB_OUTPUT = ROOT / "assets" / "pdf"
FFE_URL = "https://www.ffe.com/system/files/cavalier/documents/pdf/PROGRAMME_OFFICIEL_GALOPS_CAVALIER_1a7_PAR_MODULE.pdf"

IVORY = HexColor("#FBF6EE")
PAPER = HexColor("#FFFAF3")
INK = HexColor("#282119")
MUTED = HexColor("#655D54")
GREEN = HexColor("#174D3B")
GOLD = HexColor("#B98746")
GOLD_LIGHT = HexColor("#E7D2B2")
LINE = HexColor("#D7BD94")
RED = HexColor("#7B2230")
LEVEL_COLORS = {
    1: HexColor("#315D82"),
    2: HexColor("#A96D29"),
    3: HexColor("#39705A"),
    4: HexColor("#7B2230"),
    5: HexColor("#76623D"),
    6: HexColor("#565B83"),
    7: HexColor("#8D6931"),
}


def register_fonts() -> None:
    fonts = Path("C:/Windows/Fonts")
    pdfmetrics.registerFont(TTFont("Georgia", str(fonts / "georgia.ttf")))
    pdfmetrics.registerFont(TTFont("Georgia-Bold", str(fonts / "georgiab.ttf")))
    pdfmetrics.registerFont(TTFont("Georgia-Italic", str(fonts / "georgiai.ttf")))
    pdfmetrics.registerFont(TTFont("Arial", str(fonts / "arial.ttf")))
    pdfmetrics.registerFont(TTFont("Arial-Bold", str(fonts / "arialbd.ttf")))


def sanitize(value: str) -> str:
    replacements = {
        "\u2011": "-",
        "\u2012": "-",
        "\u2013": "-",
        "\u2014": "-",
        "\u2212": "-",
        "\u2192": "->",
        "\u2194": "<->",
        "\u21d2": "=>",
        "\u00a0": " ",
    }
    text = str(value)
    for source, target in replacements.items():
        text = text.replace(source, target)
    return text


def html(value: str) -> str:
    return escape(sanitize(value))


class HorseshoeMark(Flowable):
    def __init__(self, size: float = 16 * mm, color=GOLD):
        super().__init__()
        self.width = size
        self.height = size * 0.9
        self.color = color

    def draw(self):
        canvas = self.canv
        canvas.saveState()
        canvas.setStrokeColor(self.color)
        canvas.setFillColor(self.color)
        canvas.setLineWidth(self.width * 0.15)
        canvas.setLineCap(1)
        canvas.arc(
            self.width * 0.14,
            self.height * 0.08,
            self.width * 0.86,
            self.height * 0.94,
            180,
            180,
        )
        for x in (0.18, 0.82):
            canvas.circle(self.width * x, self.height * 0.72, self.width * 0.052, fill=1, stroke=0)
            canvas.circle(self.width * x, self.height * 0.46, self.width * 0.042, fill=1, stroke=0)
        canvas.restoreState()


def image_for(path: Path, max_width: float, max_height: float) -> Image:
    with PILImage.open(path) as pil:
        width, height = pil.size
    scale = min(max_width / width, max_height / height)
    return Image(str(path), width=width * scale, height=height * scale)


def load_data() -> dict:
    raw = subprocess.check_output(
        ["node", str(ROOT / "build" / "export-pdf-data.mjs")],
        cwd=ROOT,
        text=True,
        encoding="utf-8",
    )
    return json.loads(raw)


def build_styles(level_color):
    sample = getSampleStyleSheet()
    return {
        "eyebrow": ParagraphStyle(
            "Eyebrow",
            parent=sample["Normal"],
            fontName="Arial-Bold",
            fontSize=7.5,
            leading=10,
            textColor=GOLD,
            spaceAfter=4 * mm,
            tracking=2.3,
            alignment=TA_CENTER,
        ),
        "cover_title": ParagraphStyle(
            "CoverTitle",
            parent=sample["Title"],
            fontName="Georgia-Bold",
            fontSize=30,
            leading=33,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=4 * mm,
        ),
        "cover_intro": ParagraphStyle(
            "CoverIntro",
            parent=sample["BodyText"],
            fontName="Arial",
            fontSize=10.5,
            leading=15.5,
            textColor=MUTED,
            alignment=TA_CENTER,
            leftIndent=12 * mm,
            rightIndent=12 * mm,
            spaceAfter=4 * mm,
        ),
        "h1": ParagraphStyle(
            "H1",
            parent=sample["Heading1"],
            fontName="Georgia-Bold",
            fontSize=23,
            leading=27,
            textColor=INK,
            spaceAfter=5 * mm,
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=sample["Heading2"],
            fontName="Georgia-Bold",
            fontSize=16.5,
            leading=20,
            textColor=INK,
            spaceBefore=2 * mm,
            spaceAfter=2.5 * mm,
        ),
        "h3": ParagraphStyle(
            "H3",
            parent=sample["Heading3"],
            fontName="Georgia-Bold",
            fontSize=13.5,
            leading=17,
            textColor=level_color,
            spaceAfter=2 * mm,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=sample["BodyText"],
            fontName="Arial",
            fontSize=9.2,
            leading=13.8,
            textColor=MUTED,
            spaceAfter=2.5 * mm,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=sample["BodyText"],
            fontName="Arial",
            fontSize=7.7,
            leading=11,
            textColor=MUTED,
        ),
        "caption": ParagraphStyle(
            "Caption",
            parent=sample["BodyText"],
            fontName="Georgia-Italic",
            fontSize=8.3,
            leading=11.5,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceBefore=2.5 * mm,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=sample["BodyText"],
            fontName="Arial",
            fontSize=8.6,
            leading=12.3,
            textColor=MUTED,
            leftIndent=4.5 * mm,
            firstLineIndent=-3 * mm,
            bulletIndent=0,
            spaceAfter=1.4 * mm,
        ),
        "card_title": ParagraphStyle(
            "CardTitle",
            parent=sample["BodyText"],
            fontName="Georgia-Bold",
            fontSize=11.3,
            leading=13.5,
            textColor=level_color,
            spaceAfter=2 * mm,
        ),
        "card_body": ParagraphStyle(
            "CardBody",
            parent=sample["BodyText"],
            fontName="Arial",
            fontSize=7.6,
            leading=10.6,
            textColor=MUTED,
        ),
        "white_h2": ParagraphStyle(
            "WhiteH2",
            parent=sample["Heading2"],
            fontName="Georgia-Bold",
            fontSize=16,
            leading=20,
            textColor=colors.white,
            alignment=TA_LEFT,
            spaceAfter=2 * mm,
        ),
        "white_body": ParagraphStyle(
            "WhiteBody",
            parent=sample["BodyText"],
            fontName="Arial",
            fontSize=8.6,
            leading=12.2,
            textColor=colors.white,
        ),
        "term": ParagraphStyle(
            "Term",
            parent=sample["BodyText"],
            fontName="Georgia-Bold",
            fontSize=10,
            leading=12,
            textColor=GREEN,
        ),
    }


def draw_cover(canvas, doc, level: int):
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(IVORY)
    canvas.rect(0, 0, width, height, fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.7)
    canvas.roundRect(8 * mm, 8 * mm, width - 16 * mm, height - 16 * mm, 5 * mm, fill=0, stroke=1)
    canvas.setFillColor(LEVEL_COLORS[level])
    canvas.setFillAlpha(0.045)
    canvas.circle(width - 18 * mm, height - 18 * mm, 42 * mm, fill=1, stroke=0)
    canvas.setFillAlpha(1)
    canvas.restoreState()


def draw_body(canvas, doc, level: int):
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, width, height, fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.55)
    canvas.line(doc.leftMargin, height - 17 * mm, width - doc.rightMargin, height - 17 * mm)
    canvas.line(doc.leftMargin, 14 * mm, width - doc.rightMargin, 14 * mm)
    canvas.setFont("Arial-Bold", 7.2)
    canvas.setFillColor(LEVEL_COLORS[level])
    canvas.drawString(doc.leftMargin, height - 13 * mm, f"QUIZZ GALOP  /  FICHE GALOP {level}")
    canvas.setFont("Arial", 7.2)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(width - doc.rightMargin, height - 13 * mm, "REVISION EQUESTRE")
    canvas.drawString(doc.leftMargin, 9.5 * mm, "Programme, soins, pratique a pied et a cheval")
    canvas.drawRightString(width - doc.rightMargin, 9.5 * mm, f"{doc.page}")
    canvas.restoreState()


def section_heading(story, styles, eyebrow: str, title: str):
    story.append(Paragraph(html(eyebrow.upper()), styles["eyebrow"]))
    story.append(Paragraph(html(title), styles["h1"]))


def program_cards(programme: dict, styles: dict, usable_width: float):
    cells = []
    for axis in programme["axes"]:
        parts = [Paragraph(html(axis["titre"]), styles["card_title"])]
        parts.extend(
            Paragraph(f"<font color='#B98746'>•</font> {html(item)}", styles["card_body"])
            for item in axis["items"]
        )
        cells.append(parts)
    table = Table([cells], colWidths=[(usable_width - 8 * mm) / 3] * 3, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), IVORY),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.45, GOLD_LIGHT),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 4 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
            ]
        )
    )
    return table


def chapter_block(section: dict, index: int, styles: dict, usable_width: float):
    number = Paragraph(f"<font color='#B98746'><b>{index:02d}</b></font>", styles["h3"])
    content = [
        Paragraph(html(section["titre"]), styles["h2"]),
        Paragraph(html(section["texte"]), styles["body"]),
    ]
    content.extend(
        Paragraph(f"<font color='#B98746'>✦</font> {html(point)}", styles["bullet"])
        for point in section["points"]
    )
    table = Table([[number, content]], colWidths=[13 * mm, usable_width - 13 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEABOVE", (0, 0), (-1, 0), 0.55, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 4 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
            ]
        )
    )
    return KeepTogether([table])


def green_panel(title: str, items: list[str], styles: dict, usable_width: float):
    content = [Paragraph(html(title), styles["white_h2"])]
    content.extend(
        Paragraph(f"<font color='#E6BD79'>✓</font> {html(item)}", styles["white_body"])
        for item in items
    )
    table = Table([[content]], colWidths=[usable_width], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), GREEN),
                ("BOX", (0, 0), (-1, -1), 0.7, HexColor("#2F6753")),
                ("LEFTPADDING", (0, 0), (-1, -1), 7 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 6 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6 * mm),
            ]
        )
    )
    return table


def build_pdf(programme: dict, fiche: dict, totals: dict) -> tuple[Path, int]:
    level = int(programme["n"])
    level_color = LEVEL_COLORS[level]
    styles = build_styles(level_color)
    output_path = OUTPUT / f"fiche-revision-galop-{level}.pdf"
    web_path = WEB_OUTPUT / output_path.name

    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=22 * mm,
        bottomMargin=20 * mm,
        title=f"Fiche de revision Galop {level}",
        author="Quizz Galop",
        subject="Revision equestre - Galops 1 a 7",
        creator="Quizz Galop",
    )
    usable_width = A4[0] - doc.leftMargin - doc.rightMargin
    story = []

    story.append(Spacer(1, 3 * mm))
    mark = HorseshoeMark(14 * mm)
    mark.hAlign = "CENTER"
    story.append(mark)
    story.append(Spacer(1, 2 * mm))
    story.append(Paragraph(f"FICHE DE REVISION  /  GALOP {level}", styles["eyebrow"]))
    story.append(Paragraph(html(fiche["titre"]), styles["cover_title"]))
    story.append(Paragraph(html(fiche["intro"]), styles["cover_intro"]))

    meta = Table(
        [[
            Paragraph(f"<b>{len(fiche['sections'])}</b><br/><font size='7'>chapitres</font>", styles["small"]),
            Paragraph("<b>2</b><br/><font size='7'>planches illustrees</font>", styles["small"]),
            Paragraph(f"<b>{totals['quizzes']}</b><br/><font size='7'>quiz associes</font>", styles["small"]),
            Paragraph(f"<b>{totals['questions']}</b><br/><font size='7'>questions</font>", styles["small"]),
        ]],
        colWidths=[usable_width / 4] * 4,
    )
    meta.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), HexColor("#F2E8D9")),
                ("BOX", (0, 0), (-1, -1), 0.55, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.45, GOLD_LIGHT),
                ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 3.2 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3.2 * mm),
            ]
        )
    )
    story.append(meta)
    story.append(Spacer(1, 5 * mm))

    principal = fiche["illustrations"]["principal"]
    principal_path = ROOT / principal["src"].lstrip("/")
    cover_image = image_for(principal_path, usable_width, 92 * mm)
    cover_image.hAlign = "CENTER"
    story.append(cover_image)
    story.append(Paragraph(html(principal["legende"]), styles["caption"]))
    story.append(Spacer(1, 4 * mm))
    story.append(
        Paragraph(
            f"Synthese pedagogique originale structuree a partir des grands axes du "
            f"<link href='{FFE_URL}' color='#8D5B29'><u>programme officiel FFE</u></link>. "
            "A utiliser avec la pratique encadree et les consignes de ton enseignant.",
            styles["small"],
        )
    )

    story.append(PageBreak())
    section_heading(story, styles, "Le parcours", f"Le programme du Galop {level} en un coup d'œil")
    story.append(Paragraph(html(programme["objectif"]), styles["body"]))
    story.append(Spacer(1, 2 * mm))
    story.append(program_cards(programme, styles, usable_width))
    story.append(Spacer(1, 7 * mm))
    pratique = fiche["illustrations"]["pratique"]
    pratique_path = ROOT / pratique["src"].lstrip("/")
    practice_image = image_for(pratique_path, usable_width, 96 * mm)
    practice_image.hAlign = "CENTER"
    story.append(practice_image)
    story.append(Paragraph(html(pratique["legende"]), styles["caption"]))

    story.append(PageBreak())
    section_heading(story, styles, "Comprendre", fiche["titre"])
    for index, section in enumerate(fiche["sections"], start=1):
        story.append(chapter_block(section, index, styles, usable_width))

    story.append(PageBreak())
    section_heading(story, styles, "Memoriser", "Ce que tu dois pouvoir expliquer")
    story.append(green_panel("Les 3 essentiels", programme["essentiels"], styles, usable_width))
    story.append(Spacer(1, 7 * mm))
    story.append(green_panel(f"Ma checklist Galop {level}", fiche["checklist"], styles, usable_width))

    story.append(PageBreak())
    section_heading(story, styles, "S'auto-corriger", "Les erreurs frequentes")
    error_rows = []
    for item in fiche["erreurs"]:
        error_rows.append([
            Paragraph(html(item["erreur"]), styles["h3"]),
            Paragraph(f"<b>Le bon reflexe :</b> {html(item['correction'])}", styles["body"]),
        ])
    errors_table = Table(error_rows, colWidths=[usable_width * 0.37, usable_width * 0.63])
    errors_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), HexColor("#FFF7F2")),
                ("BOX", (0, 0), (-1, -1), 0.6, HexColor("#DFC5B9")),
                ("INNERGRID", (0, 0), (-1, -1), 0.45, HexColor("#E8D6CC")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 4 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
            ]
        )
    )
    story.append(errors_table)
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph("Mini-lexique", styles["h1"]))
    lexicon_rows = []
    for item in fiche["lexique"]:
        lexicon_rows.append([
            Paragraph(html(item["terme"]), styles["term"]),
            Paragraph(html(item["definition"]), styles["body"]),
        ])
    lexicon = Table(lexicon_rows, colWidths=[usable_width * 0.25, usable_width * 0.75])
    lexicon.setStyle(
        TableStyle(
            [
                ("LINEABOVE", (0, 0), (-1, -1), 0.45, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 2 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2 * mm),
            ]
        )
    )
    story.append(lexicon)
    story.append(Spacer(1, 3 * mm))
    story.append(HRFlowable(width="100%", thickness=0.7, color=GOLD, spaceBefore=1 * mm, spaceAfter=2 * mm))
    story.append(Paragraph("Passe maintenant de la fiche au quiz", styles["h3"]))
    story.append(
        Paragraph(
            f"Retrouve {totals['quizzes']} quiz et {totals['questions']} questions corrigées pour le Galop {level} sur "
            f"<link href='https://quizzgalop.fr/galop-{level}/' color='#174D3B'><u>quizzgalop.fr/galop-{level}/</u></link>.",
            styles["small"],
        )
    )

    doc.build(
        story,
        onFirstPage=lambda canvas, current_doc: draw_cover(canvas, current_doc, level),
        onLaterPages=lambda canvas, current_doc: draw_body(canvas, current_doc, level),
    )
    shutil.copy2(output_path, web_path)
    reader = PdfReader(str(output_path))
    if len(reader.pages) < 5:
        raise RuntimeError(f"La fiche Galop {level} est trop courte ({len(reader.pages)} pages).")
    return output_path, len(reader.pages)


def main() -> None:
    register_fonts()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    WEB_OUTPUT.mkdir(parents=True, exist_ok=True)
    data = load_data()
    fiches = {int(item["n"]): item for item in data["fiches"]}
    totals = {int(key): value for key, value in data["totals"].items()}
    built = []
    for programme in data["programmes"]:
        level = int(programme["n"])
        built.append(build_pdf(programme, fiches[level], totals[level]))
    for path, pages in built:
        print(f"{path.name}: {pages} pages, {path.stat().st_size} octets")


if __name__ == "__main__":
    main()
