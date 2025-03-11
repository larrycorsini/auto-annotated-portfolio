---
type: PageLayout
title: About
colors: colors-a
sections:
  - elementId: ''
    colors: colors-e
    backgroundSize: full
    text: >+
      # Hey I’m a Network Administrator with a B.Sc. in IT (Network
      Administration & Security) and hands-on experience in virtualization,
      network design, and security via Proxmox VE and OPNsense homelabs. Skilled
      in customer service, training, and mentoring, with fluency in English and
      Spanish.

    media:
      type: ImageBlock
      url: /images/about.jpg
      altText: Hero image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-16
          - pb-12
          - pl-4
          - pr-4
        textAlign: left
    type: HeroSection
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: MediaGallerySection
    colors: colors-a
    subtitle: 'I worked with these folks:'
    images:
      - type: ImageBlock
        url: /images/NS-logo-primary-white.png
        altText: Natures Sunshine
        caption: Natures Sunshine
        elementId: ''
    spacing: 3
    columns: 5
    aspectRatio: auto
    showCaption: false
    enableHover: true
    styles:
      self:
        width: wide
        height: auto
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        textAlign: left
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: FeaturedItemsSection
    subtitle: 'You can find me here:'
    colors: colors-b
    items:
      - type: FeaturedItem
        actions:
          - type: Link
            label: LinkedIn
            url: 'https://www.linkedin.com/in/larrycorsini/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: Instagram
            url: 'https://www.instagram.com/larry_leaper/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: ''
        subtitle: ''
        text: ''
        elementId: ''
        styles:
          self:
            textAlign: left
        actions:
          - type: Link
            label: YouTube
            altText: ''
            url: 'https://www.youtube.com/@Brighton_Bums'
            showIcon: false
            icon: arrowRight
            iconPosition: right
            elementId: ''
    columns: 3
    spacingX: 120
    spacingY: 16
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: LabelsSection
    colors: colors-c
    subtitle: 'Skills:'
    items:
      - type: Label
        label: Networking Protocols & Infrastructure
      - type: Label
        label: Routing & Switching
      - type: Label
        label: Firewall & Security Management
      - type: Label
        label: Server Administration
      - type: Label
        label: Virtualization & Cloud Services
      - type: Label
        label: Network Monitoring & Troubleshooting
      - type: Label
        label: Automation & Scripting
      - type: Label
        label: Problem-Solving & Collaboration
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: TextSection
    variant: variant-a
    subtitle: 'Contact:'
    colors: colors-e
    text: |
      <email@larrycorsini.com>
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: FeaturedItemsSection
    colors: colors-d
    items:
      - type: FeaturedItem
        subtitle: 'Experience:'
        text: >+
          **Natures Sunshine Products**


          **Aug. 2020 - Present**


          *UX, Content Coordinator*


          *   Collaborated with the creative and marketing teams, and built and
          maintained our various company websites using CMS platforms


          *   Managed product copy and imagery with an in-house product
          management system.


          *   Collaborated with the IT team to identify and resolve occasional
          technical issues.


          *   Managed the Website Redesign Project


          **May 2019 - Aug. 2020**


          *Customer Service Representative*


          *   Resolved inbound customer issues across multiple channels (email,
          online chat, and phone) using Spice CRM.


          *   Developed and applied deep knowledge of company processes and
          resources.


          *   Nominated as a trainer for my understanding of processes and
          mentored new hires to strengthen the team.

        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        subtitle: 'Education:'
        text: >
          **Utah Valley University**


          *Bachelor of Science in Information Technology - Network
          Administration and Security Emphasis*


          **Aug. 2020 - May 2024**


          ****


          *Associate of Applied Science in Information Systems / Technology*


          **Aug. 2020 - May 2022**
        styles:
          self:
            textAlign: left
    columns: 2
    spacingX: 60
    spacingY: 60
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        textAlign: left
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: ContactSection
    title: Contact Me
    text: ''
    form:
      type: FormBlock
      title: Title of the form
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          width: 1/2
          isRequired: 'true'
        - type: EmailFormControl
          name: email
          label: Name
          hideLabel: true
          placeholder: Your email
          width: 1/2
          isRequired: 'true'
        - type: TextareaFormControl
          name: message
          label: Tell me about your project
          hideLabel: true
          placeholder: Type your message here...
          width: full
          isRequired: true
      submitLabel: Send Message
      elementId: contact-form
      styles:
        self:
          textAlign: center
    colors: colors-a
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        flexDirection: row
        textAlign: center
---
