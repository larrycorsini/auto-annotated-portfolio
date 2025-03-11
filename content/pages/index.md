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
sections:
  - elementId: ''
    colors: colors-c
    backgroundSize: full
    title: 'Network Administrator, aspiring cybersecurity expert, and tech enthusiast'
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


  - colors: colors-e
    type: FeaturedProjectsSection
    elementId: ''
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
  - type: CtaSection
    title: Explore My Expertise in Network Administration
    text: >+
      With hands-on experience in network design, security, and optimization,
      I'm ready to help businesses build and maintain reliable network
      infrastructures.

    actions:
      - type: Button
        label: View My Resume
        altText: ''
        url: /
        showIcon: true
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
socialImage: /images/android-chrome-512x512.png
---
