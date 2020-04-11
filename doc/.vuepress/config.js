const { description } = require('../../package');

module.exports = {
  title: 'DofusPackets',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  serviceWorker: true,
  base: '/DofusPackets/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    '@vuepress/plugin-back-to-top',
  ],
  themeConfig: {
    repo: 'manghao/dofuspackets',
    docsDir: '.',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    sidebarDepth: 0,
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'Release Notes',
        link: 'https://github.com/manghao/dofuspackets/releases'
      }
    ],
    sidebar: [
      '/',
      {
        title: 'Servers',
        collapsable: false,
        children: [
          '/servers/login.md',
          '/servers/game.md',
        ],
      },
      {
        title: 'Account',
        collapsable: false,
        children: [],
      },
      {
        title: 'Aks',
        collapsable: false,
        children: [
          '/packets/aks/onHelloConnectionServer.md',
          '/packets/aks/onHelloGameServer.md',
          '/packets/aks/disconnect.md',
          '/packets/aks/onPong.md',
          '/packets/aks/onQuickPong.md',
          '/packets/aks/rpong.md',
          '/packets/aks/onServerMessage.md',
          '/packets/aks/onServerWillDisconnect.md',
        ],
      },
      {
        title: 'Basics',
        collapsable: false,
        children: [],
      },
      {
        title: 'Chat',
        collapsable: false,
        children: [],
      },
      {
        title: 'Conquest',
        collapsable: false,
        children: [],
      },
      {
        title: 'Dialog',
        collapsable: false,
        children: [],
      },
      {
        title: 'Documents',
        collapsable: false,
        children: [],
      },
      {
        title: 'Emotes',
        collapsable: false,
        children: [],
      },
      {
        title: 'Enemies',
        collapsable: false,
        children: [],
      },
      {
        title: 'Exchange',
        collapsable: false,
        children: [],
      },
      {
        title: 'Fights',
        collapsable: false,
        children: [],
      },
      {
        title: 'Friends',
        collapsable: false,
        children: [],
      },
      {
        title: 'Game',
        collapsable: false,
        children: [],
      },
      {
        title: 'Guild',
        collapsable: false,
        children: [],
      },
      {
        title: 'Houses',
        collapsable: false,
        children: [],
      },
      {
        title: 'Infos',
        collapsable: false,
        children: [],
      },
      {
        title: 'Items',
        collapsable: false,
        children: [],
      },
      {
        title: 'Job',
        collapsable: false,
        children: [],
      },
      {
        title: 'Key',
        collapsable: false,
        children: [],
      },
      {
        title: 'Mount',
        collapsable: false,
        children: [],
      },
      {
        title: 'Party',
        collapsable: false,
        children: [],
      },
      {
        title: 'Quests',
        collapsable: false,
        children: [],
      },
      {
        title: 'Specialization',
        collapsable: false,
        children: [],
      },
      {
        title: 'Spells',
        collapsable: false,
        children: [],
      },
      {
        title: 'Storages',
        collapsable: false,
        children: [],
      },
      {
        title: 'Subareas',
        collapsable: false,
        children: [],
      },
      {
        title: 'Tutorial',
        collapsable: false,
        children: [],
      },
      {
        title: 'Waypoints',
        collapsable: false,
        children: [],
      },
    ],
  },
};
