import { Model } from '@stackbit/types'
import pageFields from './page-fields'

const BlogPost: Model = {
    type: 'page',
    name: 'BlogPost',
    filePath: 'content/blogposts/{slug}.md',
    fields: [
        ...pageFields,
        {
            name: 'heroImage',
            type: 'url',
        },
        {
            name: 'socialImage',
            type: 'url',
        },
        {
            name: 'externalTitle',
            type: 'string',
        },
        {
            name: 'externalDescription',
            type: 'string'
        },
        {
            name: 'canonical',
            type: 'string'
        },
        {
            name: 'changelogItems',
            type: 'object',
            fields: [
                {
                    name: 'url',
                    type: 'string',
                },
                {
                    name: 'category',
                    type: 'string',
                },
                {
                    name: 'description',
                    type: 'string',
                },
            ],
        }
    ],
}

export default BlogPost
