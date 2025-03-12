---
type: PageLayout
title: Home
colors: colors-b
backgroundImage:
  type: BackgroundImage
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
  url: /images/bme-webbanners10_desktop.webp
sections:
  - elementId: ''
    colors: colors-b
    backgroundSize: full
    title: >-
      Network Administrator | aspiring cybersecurity expert | and tech
      enthusiast
    subtitle: >-
      – with a degree in IT (Network Administration & Security), I’ve gained
      hands-on experience in virtualization, security, and system administration
      through my personal and professional projects. I thrive on
      problem-solving, optimizing networks, and building scalable systems. I’m
      constantly learning and improving my skills in network infrastructure,
      cybersecurity, and cloud technologies. Let's connect and explore
      opportunities to collaborate!
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
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        flexDirection: row-reverse
        textAlign: left
    type: HeroSection
    actions: []
    text: |+


  - type: CtaSection
    title: Explore My Expertise in Network Administration
    text: >+
      With hands-on experience in network design, security, and optimization,
      I'm ready to help businesses build and maintain reliable network
      infrastructures.

    actions:
      - type: Button
        label: View My Resume
        altText: View My Resume
        url: /resume
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
      - type: Button
        label: Scroll To Projects
        altText: ''
        url: '#projects'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    colors: colors-d
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        flexDirection: col
        textAlign: center
  - colors: colors-e
    type: FeaturedProjectsSection
    elementId: projects
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
    subtitle: Projects
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
          label: message
          hideLabel: true
          placeholder: Type your message here...
          width: full
          isRequired: true
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          width: full
          isRequired: 'false'
      submitLabel: Send Message
      elementId: contact-form
      styles:
        self:
          textAlign: center
    colors: colors-f
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
socialImage: /images/android-chrome-512x512.png
---
