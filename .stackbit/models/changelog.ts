import { Model } from '@stackbit/types'
import pageFields from './page-fields'

const Changelog: Model = {
    type: 'page',
    name: 'Changelog',
    filePath: async ({ data }) => {
        const publishDate = data.publishDate ? new Date(data.publishDate) : new Date()
        return `content/changelog/${publishDate.getFullYear()}/${data.slug}.md`
    },
    fields: [
        ...pageFields,
        {
            type: 'list',
            name: 'version',
            items: {
                type: 'string',
            },
        },
    ],
}

export default Changelog
