import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.graphics.shapes import Drawing, Rect, Circle, Line, String, Path

def make_phone_icon():
    d = Drawing(12, 12)
    # Handset icon
    d.add(Circle(3.5, 8.5, 1.6, strokeColor=colors.black, strokeWidth=0.8, fillColor=colors.black))
    d.add(Circle(8.5, 3.5, 1.6, strokeColor=colors.black, strokeWidth=0.8, fillColor=colors.black))
    d.add(Line(3.5, 8.5, 8.5, 3.5, strokeColor=colors.black, strokeWidth=1.6))
    return d

def make_email_icon():
    d = Drawing(12, 12)
    d.add(Rect(0.5, 2.5, 10, 7, strokeColor=colors.black, strokeWidth=0.8, fillColor=colors.white))
    d.add(Line(0.5, 9.5, 5.5, 5.5, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Line(10.5, 9.5, 5.5, 5.5, strokeColor=colors.black, strokeWidth=0.8))
    return d

def make_location_icon():
    d = Drawing(12, 12)
    p = Path(strokeColor=colors.black, strokeWidth=0.8, fillColor=colors.white)
    p.moveTo(5.5, 1.5)
    p.lineTo(2.5, 6.5)
    p.curveTo(2.5, 9.5, 8.5, 9.5, 8.5, 6.5)
    p.closePath()
    d.add(p)
    d.add(Circle(5.5, 6.5, 1.2, strokeColor=colors.black, strokeWidth=0.8, fillColor=colors.black))
    return d

def make_linkedin_icon():
    d = Drawing(12, 12)
    d.add(Rect(0.5, 1.5, 10, 10, rx=2, ry=2, strokeColor=colors.black, strokeWidth=0.8, fillColor=colors.black))
    d.add(String(2.2, 3.5, "in", fontName="Helvetica-Bold", fontSize=7, fillColor=colors.white))
    return d

def make_portfolio_icon():
    d = Drawing(12, 12)
    d.add(Circle(5.5, 6.5, 4.5, strokeColor=colors.black, strokeWidth=0.8, fillColor=colors.white))
    d.add(Line(1, 6.5, 10, 6.5, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Line(5.5, 2, 5.5, 11, strokeColor=colors.black, strokeWidth=0.8))
    return d

def make_white_bullet():
    d = Drawing(10, 10)
    d.add(Circle(4, 4.5, 2.2, strokeColor=colors.black, strokeWidth=0.8, fillColor=colors.white))
    return d

def generate_cv():
    pdf_path = r"c:\Users\LUCIA\Desktop\Portfolio\public\resume.pdf"
    
    # Page setup: letter size (612 x 792), 32pt margins (~0.44 inch)
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=30,
        bottomMargin=30
    )
    
    usable_width = 612 - 64 # 548 pt
    
    styles = getSampleStyleSheet()
    
    name_style = ParagraphStyle(
        'NameStyle',
        fontName='Times-Bold',
        fontSize=22,
        leading=24,
        textColor=colors.black,
        spaceAfter=1
    )
    
    sub_title_style = ParagraphStyle(
        'SubTitleStyle',
        fontName='Times-Roman',
        fontSize=11,
        leading=13,
        textColor=colors.black,
        spaceAfter=4
    )
    
    section_heading_style = ParagraphStyle(
        'SectionHeadingStyle',
        fontName='Times-Bold',
        fontSize=11,
        leading=13,
        textColor=colors.black,
        spaceBefore=2,
        spaceAfter=1
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        fontName='Times-Roman',
        fontSize=8.8,
        leading=11.2,
        textColor=colors.black
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        fontName='Times-Roman',
        fontSize=8.5,
        leading=10.8,
        textColor=colors.black,
        leftIndent=10,
        firstLineIndent=-10,
        spaceAfter=1.5
    )
    
    proj_title_style = ParagraphStyle(
        'ProjTitleStyle',
        fontName='Times-Bold',
        fontSize=9.2,
        leading=11.5,
        textColor=colors.black,
        spaceBefore=0,
        spaceAfter=1
    )

    proj_subtitle_style = ParagraphStyle(
        'ProjSubtitleStyle',
        fontName='Times-Italic',
        fontSize=8.5,
        leading=10.5,
        textColor=colors.black,
        leftIndent=12,
        spaceAfter=1
    )

    proj_bullet_style = ParagraphStyle(
        'ProjBulletStyle',
        fontName='Times-Roman',
        fontSize=8.2,
        leading=10.2,
        textColor=colors.black,
        leftIndent=22,
        firstLineIndent=-10,
        spaceAfter=1
    )

    story = []
    
    # 1. HEADER (Page 1)
    story.append(Paragraph("EDMUND AUGUSTINE", name_style))
    story.append(Paragraph("Undergraduate", sub_title_style))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.black, spaceBefore=1, spaceAfter=6))
    
    # 2. ABOUT ME
    story.append(Paragraph("ABOUT ME", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=4))
    about_text = (
        "I am a motivated undergraduate student at SLIIT, currently pursuing a BSc (Hons) in Information Technology, "
        "specializing in Interactive Media. My strengths include creativity, digital sketching, and interactive design, "
        "supported by technical skills in Figma, Adobe XD, and prototyping."
    )
    story.append(Paragraph(about_text, body_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=0, spaceAfter=6))

    # TWO COLUMN LAYOUT FOR PAGE 1
    col1_width = 175
    col2_width = 373
    
    left_flowables = []
    right_flowables = []
    
    # --- LEFT COLUMN CONTENT ---
    # CONTACT
    left_flowables.append(Paragraph("CONTACT", section_heading_style))
    left_flowables.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=4))
    
    contact_data = [
        [make_phone_icon(), Paragraph("+94-75 994 8727", body_style)],
        [make_email_icon(), Paragraph("edmundaugustine12@gmail.com", body_style)],
        [make_location_icon(), Paragraph("Bandarawela, Sri Lanka", body_style)],
        [make_linkedin_icon(), Paragraph("linkedin.com/in/edmund-augustine...", body_style)],
        [make_portfolio_icon(), Paragraph("PORTFOLIO", body_style)]
    ]
    contact_table = Table(contact_data, colWidths=[14, col1_width - 14])
    contact_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
    ]))
    left_flowables.append(contact_table)
    left_flowables.append(Spacer(1, 6))
    
    # EDUCATION
    left_flowables.append(Paragraph("EDUCATION", section_heading_style))
    left_flowables.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=4))
    
    left_flowables.append(Paragraph("<b>BSc (Hons) in Information Technology</b>", body_style))
    left_flowables.append(Paragraph("<i>Specialising in Interactive Media</i>", body_style))
    left_flowables.append(Paragraph("<b>SLIIT</b>", body_style))
    left_flowables.append(Paragraph("Feb 2023 – Dec 2027", body_style))
    left_flowables.append(Spacer(1, 4))

    left_flowables.append(Paragraph("<b>Advanced Level Examination</b>", body_style))
    left_flowables.append(Paragraph("<i>Commerce Stream</i>", body_style))
    left_flowables.append(Paragraph("S. Thomas' College", body_style))
    left_flowables.append(Paragraph("2022", body_style))
    left_flowables.append(Spacer(1, 4))

    left_flowables.append(Paragraph("<b>Ordinary Level Examination</b>", body_style))
    left_flowables.append(Paragraph("S. Thomas' College", body_style))
    left_flowables.append(Paragraph("2019", body_style))
    left_flowables.append(Spacer(1, 6))

    # TECHNICAL SKILLS
    left_flowables.append(Paragraph("TECHNICAL SKILLS", section_heading_style))
    left_flowables.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=4))
    
    skills = [
        ("UI/UX Design & Tools:", "Figma, Adobe XD, Photoshop, Web Prototyping"),
        ("AI Design & Web Development:", "ChatGPT, Adobe Firefly, Midjourney, Figma AI, GitHub Copilot, HTML/CSS, JavaScript, WordPress, Responsive Web Design"),
        ("Technical Stack:", "HTML, CSS, Java, MERN Stack Basics, Android Studio, Kotlin"),
        ("Multimedia & 3D:", "Unity Engine, Blender, Moho Vector Animation, Video Editing"),
        ("Interests:", "UX Research, Usability Testing, Motion Graphics, 3D Prototyping")
    ]
    for label, val in skills:
        left_flowables.append(Paragraph(f"• <b>{label}</b> {val}", bullet_style))
        left_flowables.append(Spacer(1, 2))
    left_flowables.append(Spacer(1, 6))

    # LANGUAGES
    left_flowables.append(Paragraph("LANGUAGES", section_heading_style))
    left_flowables.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=4))
    left_flowables.append(Paragraph("✓ &nbsp;Sinhala", body_style))
    left_flowables.append(Spacer(1, 2))
    left_flowables.append(Paragraph("✓ &nbsp;Tamil", body_style))
    left_flowables.append(Spacer(1, 2))
    left_flowables.append(Paragraph("✓ &nbsp;English", body_style))


    # --- RIGHT COLUMN CONTENT ---
    right_flowables.append(Paragraph("PROJECTS", section_heading_style))
    right_flowables.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=4))
    
    projects_data = [
        {
            "title": "InnoSpark (CaffiScaler)",
            "subtitle": "3D Design, Branding & Hardware Integration",
            "tag": "Y3S1 UED Project",
            "bullets": [
                "Designed and developed an integrated smart coffee scale prototype focusing on increasing accessibility.",
                "Produced custom structural packaging design and high-end marketing commercial video productions."
            ]
        },
        {
            "title": "VR Cricket Game",
            "subtitle": "Immersive Scene Design & Interaction – Unity Engine",
            "tag": "",
            "bullets": [
                "Developed an immersive, first-person sports gameplay environment using custom physics tracking and realistic 3D asset integration.",
                "Formulated reactive haptic controls and spatial audio cues to simulate dynamic stadium conditions."
            ]
        },
        {
            "title": "Social Media Campaign",
            "subtitle": "Flower Boutique – Social Media Marketing",
            "tag": "",
            "bullets": [
                "Developed a social media campaign featuring three Instagram/Facebook posts, two short promotional videos, and one commercial video to strengthen brand awareness and audience engagement."
            ]
        },
        {
            "title": "Futuristic Package Design",
            "subtitle": "LoolCondera Matcha Tea Brand",
            "tag": "",
            "bullets": [
                "Designed a futuristic packaging concept for the LoolCondera Matcha Tea brand using Adobe Illustrator and Photoshop, including product mockups for professional brand presentation."
            ]
        },
        {
            "title": "Hydration Tracker Mobile App",
            "subtitle": "Native Mobile Development – Android Studio, Kotlin",
            "tag": "",
            "bullets": [
                "Engineered a responsive, clean wellness utility layout featuring personalized water target calculators and push alerts."
            ]
        },
        {
            "title": "Travel Application UI",
            "subtitle": "Interface Prototyping – Android Studio, XML",
            "tag": "",
            "bullets": [
                "Structured an intuitive layout and custom aesthetic components for multi-destination trip exploration dashboards."
            ]
        },
        {
            "title": "Fit Flex",
            "subtitle": "Mobile App UI Design – Figma",
            "tag": "",
            "bullets": [
                "Designed a full fitness mobile UI application utilizing structural user layouts and modern visual wireframes."
            ]
        },
        {
            "title": "Sehera Collection",
            "subtitle": "Desktop Web Application – MERN Stack",
            "tag": "",
            "bullets": [
                "Built a full e-commerce clothing desktop application optimizing interface usability and system responsiveness."
            ]
        },
        {
            "title": "Online School Management System",
            "subtitle": "Java, JavaScript, CSS, SQL",
            "tag": "",
            "bullets": [
                "Programmed a web-based management portal integrated with dynamic backend databases."
            ]
        },
        {
            "title": "Creative Multimedia Animations",
            "subtitle": "Vector Art & Visual Sketches",
            "tag": "",
            "bullets": [
                "Developed custom vector project animations, structural character body movements, and illustrations using Moho."
            ]
        }
    ]

    for proj in projects_data:
        # Title with white circle bullet
        p_head_table = Table(
            [[make_white_bullet(), Paragraph(f"<b>{proj['title']}</b>", proj_title_style)]],
            colWidths=[12, col2_width - 12]
        )
        p_head_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ]))
        right_flowables.append(p_head_table)

        if proj["tag"]:
            sub_text = f"{proj['subtitle']} <font color='#333333'>&nbsp;&nbsp;&nbsp;&nbsp;<i>{proj['tag']}</i></font>"
        else:
            sub_text = proj['subtitle']
        right_flowables.append(Paragraph(sub_text, proj_subtitle_style))
        
        for b in proj["bullets"]:
            right_flowables.append(Paragraph(f"• {b}", proj_bullet_style))
        right_flowables.append(Spacer(1, 2))

    # Add page 1 table
    page1_table = Table([[left_flowables, right_flowables]], colWidths=[col1_width, col2_width])
    page1_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    
    story.append(page1_table)
    
    # PAGE BREAK FOR PAGE 2
    story.append(PageBreak())
    
    # --- PAGE 2 CONTENT ---
    # 1. ACHIEVEMENTS
    story.append(Paragraph("ACHIEVEMENTS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=6))
    
    achievements = [
        "Awarded a development contract to design and build the future website and mobile application for Flower Boutique, recognizing the quality and impact of the brand's digital marketing and design concepts.",
        "Selected to develop an innovative packaging concept for the LoolCondera Matcha Tea brand, demonstrating creativity in brand identity, product visualization, and professional presentation.",
        "Developed high-fidelity 3D prototyping and 3D printing with embedded circuitry for CaffiScaler unified engineering design.",
        "Produced mobile UI frameworks and responsive designs showcased across academic modules.",
        "Recognized for creative direction and structural collaboration in team project operations."
    ]
    for ach in achievements:
        story.append(Paragraph(f"• {ach}", bullet_style))
        story.append(Spacer(1, 3))
        
    story.append(Spacer(1, 8))
    
    # 2. CERTIFICATIONS
    story.append(Paragraph("CERTIFICATIONS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=6))
    
    story.append(Paragraph("<b>Google Skillshop / Digital Academy:</b>", body_style))
    story.append(Spacer(1, 2))
    cert_google = [
        ("Analytics & Measurement:", "Google Analytics, Google Ads Measurement, Conversion Optimization"),
        ("Google Ads:", "Search, Display, Video, Apps, Creative, AI-Powered Shopping Ads, AI-Powered Performance Ads"),
        ("Campaign Management:", "Display & Video 360, Campaign Manager 360"),
        ("Foundations:", "Fundamentals of Digital Marketing (Grow with Google)")
    ]
    for label, val in cert_google:
        story.append(Paragraph(f"• <b>{label}</b> {val}", bullet_style))
        story.append(Spacer(1, 2))
        
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>HubSpot Academy:</b>", body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• SEO, Content Marketing, Social Media Marketing", bullet_style))
    story.append(Spacer(1, 8))
    
    # 3. EXTRACURRICULAR ACTIVITIES
    story.append(Paragraph("EXTRACURRICULAR ACTIVITIES", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceBefore=1, spaceAfter=6))
    
    story.append(Paragraph("<b>S. Thomas' College</b>", body_style))
    story.append(Spacer(1, 2))
    stc_items = [
        "Vice President – Student Christian Movement (SCM)",
        "Member – Gaval Club",
        "Member – IT Club",
        "Member – Rugby Team"
    ]
    for item in stc_items:
        story.append(Paragraph(f"• {item}", bullet_style))
        story.append(Spacer(1, 2))
        
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>SLIIT (Sri Lanka Institute of Information Technology)</b>", body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Active Member – Microsoft Club", body_style))

    doc.build(story)
    print("Successfully generated resume.pdf")

if __name__ == "__main__":
    generate_cv()
