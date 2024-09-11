const path = require('path')

import { execSync } from 'child_process'

import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types'
import { DocumentContext, GitContentSource } from '@stackbit/cms-git'
import { Actions } from '@stackbit/utils'

import BlogPost from './.stackbit/models/blog-post'
import Changelog from './.stackbit/models/changelog'
import Podcast from './.stackbit/models/podcast'
import Terms from './.stackbit/models/terms'

const config = defineStackbitConfig({
    stackbitVersion: '0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    preInstallCommand: 'npm install -g pnpm@^8.1.1',
    installCommand: 'pnpm install',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [BlogPost, Changelog, Podcast, Terms],
        }),
    ],
    actions: [
        Actions.GenerateContentFromPreset({
            label: 'Generate content with AI',
            modelsConfig: [
                {
                    name: 'changelog',
                    customPrompt: 'You are writing a changelog post. Include all relevant information about the changes. Do not include internal or placeholder text. All html tags should be removed.',
                },
            ],
        }),
    ],
    onDocumentCreate: async options => {
        const document = await options.createDocument(options.createDocumentOptions)
        execSync('npm run build:cache')
        return document
    },
    sitemap: options => {
        const result: SiteMapEntry[] = []
        const fileRegex = /\d+\/|\.(md|markdown|mdx)$/gi
        for (const document of options.documents) {
            const filePath = (document.context as DocumentContext).filePath
            const slug = document.fields.slug
            if (slug?.type === 'slug' && slug?.localized !== true) {
                const slugValue = slug.value
                const relPath = '/' + path.relative('content', filePath)

                const newSlug = relPath.replace(fileRegex, '').split('/').splice(1)
                if (newSlug[0] === 'blogposts') {
                    newSlug[0] = 'blog'
                }
                if (slugValue && newSlug[newSlug.length - 1] !== slugValue) {
                    newSlug[newSlug.length - 1] = slugValue
                }
                result.push({
                    document,
                    urlPath: `/${newSlug.join('/')}`,
                })
            } else if (filePath) {
                result.push({
                    document,
                    urlPath: '/' + path.relative('content', filePath.replace(/\.md$/, '')),
                })
            }
        }
        return result
    },
})

export default config
