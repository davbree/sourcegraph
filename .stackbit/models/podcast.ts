import { Model } from '@stackbit/types'
import pageFields from './page-fields'

const Podcast: Model = {
    type: 'page',
    name: 'Podcast',
    filePath: 'content/podcast/{slug}.md',
    fields: [
        ...pageFields,
        {
            type: 'string',
            name: 'videoId',
        },
        {
            type: 'string',
            name: 'audioSrc',
        },
    ],
}

export default Podcast
