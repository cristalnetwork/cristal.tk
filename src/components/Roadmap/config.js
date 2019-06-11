import actionBar from 'src/components/ActionBar/config'
import container from 'src/components/Container/config'

export default {
    name: 'roadmap',
    label: 'Roadmap Section',
    widget: 'object',
    required: false,
    fields: [
        ...container.fields,
        {
            name: 'component',
            label: 'Component to Use',
            widget: 'string'
        },
        {
            name: 'currentMilestone',
            label: 'what milestone are we at',
            widget: 'number'
        },
        {
            name: 'milestone',
            label: 'Roadmap',
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
