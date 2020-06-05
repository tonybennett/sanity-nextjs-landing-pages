export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eda8c939834a3f59d002fdc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sps33f85',
                  apiId: '776f31b4-0d5f-4236-be74-e54468499fb3'
                },
                {
                  buildHookId: '5eda8c93f5a8b00fe4ce814b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gt5gufu9',
                  apiId: '1dc0c077-85ec-438c-bf3e-188e39df09eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tonybennett/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gt5gufu9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
