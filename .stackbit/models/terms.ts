import { Model } from '@stackbit/types'

const Terms: Model = {
    type: 'page',
    name: 'Terms',
    filePath: 'content/terms/{slug}.md',
    fields: [
        {
            type: 'string',
            name: 'layout',
        },
        {
            type: 'string',
            name: 'title',
        },
    ],
}

export default Terms
