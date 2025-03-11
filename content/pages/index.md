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
    colors: colors-f
    backgroundSize: full
    title: 'Hi, I''m Larry Corsini'
    subtitle: >-
      – a Network Administrator, aspiring cybersecurity expert, and tech
      enthusiast based in Orem, Utah. With a degree in IT (Network
      Administration & Security), I’ve gained hands-on experience in
      virtualization, security, and system administration through my personal
      and professional projects. I thrive on problem-solving, optimizing
      networks, and building scalable systems. I’m constantly learning and
      improving my skills in network infrastructure, cybersecurity, and cloud
      technologies. Let's connect and explore opportunities to collaborate!
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
---
