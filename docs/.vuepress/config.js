module.exports = {
  title: 'v-stylish',
  locale: {
    '/': {
      lang: 'en-US',
      description: 'Easy dynamic styling'
    },
    '/pt-br/': {
      lang: 'pt-BR',
      description: 'Estilo dinâmico simples'
    }
  },
  themeConfig: {
    repo: 'gigioSouza/v-stylish',
    displayAllHeaders: true,
    nav: [
      {
        text: 'Languages',
        items: [
          {
            text: 'English',
            link: '/'
          },
          {
            text: 'Português brasileiro',
            link: '/pt-br/'
          }
        ]
      }
    ],
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        sidebar: {
          '/': [
            {
              collapsable: false,
              children: ['']
            }
          ]
        }
      },
      '/pt-br/': {
        selectText: 'Languages',
        label: 'Português brasileiro',
        sidebar: {
          '/pt-br/': [
            {
              collapsable: false,
              children: ['']
            }
          ]
        }
      }
    }
  }
};
