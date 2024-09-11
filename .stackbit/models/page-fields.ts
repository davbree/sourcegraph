import { Field } from '@stackbit/types'

const pageFields: Field[] = [
    {
        name: 'slug',
        type: 'slug',
        required: true,
    },
    {
        name: 'title',
        type: 'string',
    },
    {
        name: 'description',
        type: 'string',
    },
    {
        name: 'published',
        type: 'boolean',
    },
    {
        name: 'publishDate',
        type: 'datetime',
    },
    {
        name: 'authors',
        type: 'list',
        items: {
            type: 'object',
            fields: [
                {
                    name: 'name',
                    type: 'string',
                },
                {
                    name: 'url',
                    type: 'url',
                },
                {
                    name: 'avatar',
                    type: 'url',
                },
            ],
        },
    },
    {
        name: 'tags',
        type: 'list',
        items: {
            type: 'string',
        },
    },
]

export default pageFields
