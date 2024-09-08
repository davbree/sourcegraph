import { Model } from '@stackbit/types'
import pageFields from './page-fields'

const Changelog: Model = {
    type: 'page',
    name: 'Changelog',
    filePath: 'content/changelog/{slug}.md',
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
