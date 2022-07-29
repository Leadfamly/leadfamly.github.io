import { defineConfig } from "vitepress"

export default defineConfig({
    title: 'SDK',
    titleTemplate: 'Leadfamly',
    description: 'For developers working with the Leadfamly SDK.',
  
    // Theme related configurations.
    themeConfig: {
      nav: nav(),

      sidebar: {
        '/guide/': sidebarGuide(),
        '/sdk/': sidebarSDK()
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/leadfamly/sdk-docs' }
      ],
      logo: '/logo.svg',
    }
  })

  function nav() {
    return [
      { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: 'SDK', link: '/sdk/getting-started', activeMatch: '/sdk/' }
    ]
  }

  function sidebarGuide() { 
    return [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Quick start', link: '/guide/quick-start' }
        ]
      },
    ]
  }

  function sidebarSDK() {
    return [
      {
        text: 'SDK',
        items: [
          { text: 'Getting started', link: '/sdk/getting-started' },
        ]
      },
      {
        text: 'Events',
        items: [
          { text: 'Event Listening', link: '/sdk/register-events' },
          { text: 'FormSubmit', link: '/sdk/formsubmit-event' },
          { text: 'FlowPage Changed', link: '/sdk/flowpage-changed-event' },
          { text: 'Action', link: '/sdk/action-event' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Campaign', link: '/sdk/campaign-api' },
          { text: 'FlowPages', link: '/sdk/flowpages-api' },
          { text: 'Replacement Tags', link: '/sdk/replacement-tags-api' }
        ]
      },
    ]
  }