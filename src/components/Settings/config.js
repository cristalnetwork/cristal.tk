import header from 'src/components/Header/config'
import actionBar from 'src/components/ActionBar/config'
import footer from 'src/components/Footer/config'
import metaTags from 'src/components/MetaTags/config'

export default {
  label: 'Site Settings',
  name: 'settings',
  create: false,
  delete: false,
  files: [
    {
      label: 'Site Settings',
      name: 'settings',
      file: 'netlify/settings.yaml',
      fields: [
        {
          label: 'Banners',
          name: 'banners',
          widget: 'list',
          required: false,
          fields: [
            {
              hint: 'When should the banner start showing?',
              name: 'starts',
              widget: 'datetime',
              format: 'x'
            },
            {
              hint: 'When should the banner stop showing?',
              name: 'ends',
              widget: 'datetime',
              format: 'x'
            },
            {
              name: 'markdown',
              widget: 'markdown'
            }
          ]
        },
        {
          label: 'Company Info',
          name: 'info',
          widget: 'object',
          fields: [
            {
              name: 'email',
              label: 'email',
              widget: 'string'
            },
            {
              name: 'hirelog',
              label: 'hire log',
              widget: 'string'
            },
            {
              name: 'address',
              label: 'address',
              widget: 'object',
              fields: [
                {
                  name: 'addressLocality',
                  label: 'city',
                  widget: 'string'
                },
                {
                  name: 'addressRegion',
                  label: 'state',
                  widget: 'string'
                },
                {
                  name: 'postalCode',
                  label: 'zip',
                  widget: 'string'
                },
                {
                  name: 'streetAddress',
                  label: 'street address',
                  widget: 'string'
                },
                {
                  name: 'email',
                  label: 'email',
                  widget: 'string'
                },
                {
                  name: 'alternateName',
                  label: 'Alternate Name',
                  widget: 'string'
                },
                {
                  name: 'name',
                  label: 'name',
                  widget: 'string'
                },
                {
                  name: 'description',
                  label: 'description',
                  widget: 'string'
                }
              ]
            }
          ]
        },
        header,
        actionBar,
        footer,
        metaTags,
        {
          label: 'Integrations',
          name: 'integrations',
          widget: 'object',
          fields: [
            {
              name: 'googleTagManager',
              label: 'Google Tag Manager',
              widget: 'string',
              required: false
            },
            {
              name: 'hubspot',
              label: 'HubSpot ID',
              widget: 'string',
              required: false
            },
            {
              name: 'intercom',
              label: 'Intercom App ID',
              widget: 'string',
              required: false
            }
          ]
        }
      ]
    }
  ]
}
