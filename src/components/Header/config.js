import { colors } from 'src/utils';

export default {
  name: 'header',
  label: 'Header',
  widget: 'object',
  fields: [
    {
      name: 'items',
      label: 'Items',
      widget: 'list',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'width',
          label: 'Width',
          widget: 'number',
          default: 400,
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
          required: false,
        },
        {
          name: 'isButton',
          label: 'Is it a button?',
          widget: 'boolean',
          required: false,
        },
        {
          name: 'hideMobile',
          label: 'Hide this link in the mobile menu?',
          widget: 'boolean',
          required: false,
        },
        {
          name: 'icon',
          label: 'Icon (button only)',
          widget: 'fontawesome-solid',
          type: 'array',
          required: false,
        },
        {
          name: 'onClick',
          label: 'Action',
          widget: 'select',
          required: false,
          options: [{ label: 'Open Intercom', value: 'intercom' }],
        },
        {
          name: 'links',
          label: 'Links',
          widget: 'list',
          required: false,
          fields: [
            {
              name: 'title',
              label: 'Title',
              widget: 'string',
            },
            {
              name: 'subtitle',
              label: 'Subtitle',
              widget: 'string',
              required: false,
            },
            {
              name: 'href',
              label: 'Link',
              widget: 'string',
              required: false,
            },
            {
              name: 'onClick',
              label: 'Action',
              widget: 'select',
              required: false,
              options: [{ label: 'Open Intercom', value: 'intercom' }],
            },
            {
              name: 'titleColor',
              label: 'Color',
              widget: 'string',
              required: false,
            },
            {
              name: 'icon',
              label: 'Icon',
              widget: 'fontawesome-solid',
              type: 'array',
              required: false,
            },
          ],
        },
        {
          name: 'altTitle',
          label: 'Alternate Title',
          widget: 'string',
          hint: 'Title shown after scrolling the page. (Example: Sign In -> Sign Up FREE)',
          required: false,
        },
        {
          name: 'altBg',
          label: 'Alternate Background Color',
          hint: 'Background color shown after scrolling the page. (Only valid for buttons)',
          widget: 'select',
          options: colors,
          default: 'green',
          required: false,
        },
      ],
    },
  ],
};
