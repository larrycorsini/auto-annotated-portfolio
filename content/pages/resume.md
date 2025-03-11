---
type: PageLayout
title: Resume
sections:
  - type: HeroSection
    title: >-
      I'm a developer, digital artist, consultant and a bunch of other
      impressive titles and buzz words.
    subtitle: >-
      This is my info — I'm sharing it all this with ya'll to impress you with
      all the hard work I've done in the past few years. Once you're impressed,
      you can continue to scroll down to see more details and credentials about
      me.
    text: >-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
    colors: colors-a
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        flexDirection: row
        textAlign: left
  - type: MediaGallerySection
    title: Gallery
    subtitle: This is the subtitle
    images:
      - type: ImageBlock
        url: /images/gallery-1.jpg
        altText: Image one
        caption: Image one caption
        elementId: ''
      - type: ImageBlock
        url: /images/gallery-2.jpg
        altText: Image two
        caption: Image two caption
        elementId: ''
    colors: colors-c
    spacing: 16
    columns: 2
    aspectRatio: '3:2'
    showCaption: false
    enableHover: true
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        textAlign: center
  - type: FeaturedProjectsSection
    subtitle: 'Projects:'
    actions:
      - type: Link
        label: See all projects
        altText: See all projects
        url: /projects
        showIcon: false
        icon: arrowRight
        iconPosition: right
        elementId: ''
    projects:
      - content/pages/projects/project-one.md
      - content/pages/projects/project-two.md
    colors: colors-f
    variant: variant-a
    elementId: ''
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
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
addTitleSuffix: true
colors: colors-b
---
