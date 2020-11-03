export default {
  widgets: [
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
                  buildHookId: '5fa1c5bb84729925d66d9309',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ewzrpepb',
                  apiId: '054dba5f-4ab7-4355-9934-ca163d1d1256'
                },
                {
                  buildHookId: '5fa1c5bcd21aa4276e834ed1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5yewazxv',
                  apiId: '59b01b05-758b-4a98-8167-9893dc1102de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/menakhovsky/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5yewazxv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
