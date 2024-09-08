import { Field } from '@stackbit/types'

const pageFields: Field[] = [
    {
        name: 'title',
        type: 'string',
    },
    {
        name: 'slug',
        type: 'slug',
    },
    {
        name: 'published',
        type: 'boolean',
    },
    {
        name: 'description',
        type: 'string',
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
