import actionBar from 'src/components/ActionBar/config'
import container from 'src/components/Container/config'

export default {
    name: 'cards',
    label: 'Card Section',
    widget: 'object',
    required: false,
    fields: [
        ...container.fields,
        {
            name: 'cards',
            label: 'Cards',
            widget: 'list',
            required: false,
            fields: [
                {
                    name: 'image',
                    label: 'image',
                    widget: 'image'
                },
                {
                    name: 'title',
                    label: 'title',
                    widget: 'string'
                },
                {
                    name: 'subtitle',
                    label: 'subtitle',
                    widget: 'string'
                },
                {
                    name: 'description',
                    label: 'description',
                    widget: 'markdown'
                },
                {
                    name: 'hidden',
                    label: 'content hidden',
                    widget: 'boolean'
                }
            ]
        },
        actionBar
    ]
}
