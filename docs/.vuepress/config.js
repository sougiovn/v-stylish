module.exports = {
  title: 'v-stylish',
  base: '/v-stylish/',
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
        label: 'English'
      },
      '/pt-br/': {
        selectText: 'Languages',
        label: 'Português brasileiro'
      }
    }
  }
};
