export default {
    title: 'Leadfamly SDK',
    description: 'For developers working with the Leadfamly SDK',
  
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
      // logo: '/logo.svg',
    }
  }

  function nav() {
    return [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'SDK', link: '/sdk/getting-started', activeMatch: '/sdk/' },

    ]
  }

  function sidebarGuide() { 
    return [
      {
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/guide/getting-started', activeMatch: '/guide/' },
        ]
      },
    ]
  }

  function sidebarSDK() {
    return [
      {
        text: 'SDK',
        items: [
          { text: 'Getting started', link: '/sdk/getting-started', activeMatch: '/sdk/' },
        ]
      },
      {
        text: 'Events',
        collapsible: true,
        items: [
          { text: 'Event Listening', link: 'sdk/events/register.md' },
          { text: 'FormSubmit', link: 'sdk/events/formSubmit.md' },
          { text: 'FlowPage Changed', link: 'sdk/events/flowPageChanged.md' },
        ]
      },
      {
        text: 'API',
        collapsible: true,
        items: [
          { text: 'Campaign', link: 'sdk/api/campaign.md' },
          { text: 'FlowPages', link: 'sdk/api/flowPages.md' }
        ]
      },
    ]
  }