import { Model } from '@stackbit/types'
import pageFields from './page-fields'

const BlogPost: Model = {
    type: 'page',
    name: 'BlogPost',
    filePath: async ({ document, data }) => {
        if (!data.slug) {
            return 'content/blogposts/{slug}.md'
        }
        const filePathParts = document.context.filePath.split('/')
        const containingDir = filePathParts[filePathParts.length - 2]
        if (containingDir.match(/\d+/)) {
            const publishDate = new Date(data.publishDate)
            return `content/blogposts/${publishDate.getFullYear()}/${data.slug}.md`
        }
        return `content/blogposts/${containingDir}/${data.slug}.md`
    },
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
