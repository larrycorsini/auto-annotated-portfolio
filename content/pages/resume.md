---
type: PageLayout
title: Resume
sections:
  - type: HeroSection
    title: RESUME
    subtitle: ''
    text: >-
      <a
      href="https://docs.google.com/document/d/1r5iTEUh1yH7_5LLFVVpINVvuYnWxt2r1/preview?tab=t.0"
      target="_blank">
          <img src="/images/resumessnip.png" alt="Resume" />
      </a>

      <i>Click image above to view my full resume</i>

      <br /><br />

      <a
      href="https://docs.google.com/document/d/1r5iTEUh1yH7_5LLFVVpINVvuYnWxt2r1/export?format=pdf"
      target="_blank">
          <strong>Click here to download now</strong>
      </a>
    actions: []
    colors: colors-b
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
  - type: ContactSection
    title: Contact Me
    text: I'm look forward to hearing from you.
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
          placeholder: Tell me about your project
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
    colors: colors-b
    backgroundSize: full
    elementId: contact
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
addTitleSuffix: true
colors: colors-b
backgroundImage:
  type: BackgroundImage
  url: /images/bme-webbanners10_desktop.webp
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 100
---
