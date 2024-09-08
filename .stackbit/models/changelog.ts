import { Model } from '@stackbit/types'
import pageFields from './page-fields'

const Changelog: Model = {
    type: 'page',
    name: 'Changelog',
    filePath: async ({ document, data }) => {
        if (!data.slug) {
            return 'content/changelog/{slug}.md'
        }
        const filePathParts = document.context.filePath.split('/')
        const containingDir = filePathParts[filePathParts.length - 2]
        if (containingDir.match(/\d+/)) {
            const publishDate = new Date(data.publishDate)
            return `content/changelog/${publishDate.getFullYear()}/${data.slug}.md`
        }
        return `content/changelog/${containingDir}/${data.slug}.md`
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
