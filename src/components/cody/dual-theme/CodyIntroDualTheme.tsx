import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'
import { CaptureResult} from 'posthog-js'

import { ContentSection } from '../../ContentSection'

interface CodyIntroDualThemeProps {
    isLight?: boolean
    handleOpenModal: (pagePosition: string) => void | CaptureResult
    title?: string
    description?: string
    wrapperClassName?: string
    subTitle?: string
    titleSize?: string
    descriptionSize?: string
}

export const CodyIntroDualTheme: FunctionComponent<CodyIntroDualThemeProps> = ({
    isLight = false,
    handleOpenModal,
    wrapperClassName,
    title,
    subTitle = 'Cody is an AI coding assistant that uses advanced search and codebase context to help you understand,write, and fix code faster.',
    description,
    titleSize,
    descriptionSize,
}) => (
    <ContentSection
        parentClassName="!py-0 !px-0"
        className={classNames('-mt-8 pt-0 text-center md:mt-0', wrapperClassName, {
            'md:pt-[10px]': isLight,
            'md:pt-[22px]': !isLight,
        })}
    >
        <div className="mx-auto w-full px-6 md:w-[849px] lg:w-[895px]">
            <h1
                className={classNames(
                    'mx-auto w-full font-semibold sm:text-8xl md:!leading-[62px]',
                    titleSize || 'text-[52px] text-4xl sm:text-8xl',
                    {
                        'text-white': !isLight,
                        'text-[#0F111A]': isLight,
                    }
                )}
            >
                {title ?? <span>Code more, type&nbsp;less</span>}
            </h1>

            <p
                className={classNames(
                    'mx-auto mt-6 mb-8 max-w-[700px] font-normal leading-tight text-gray-400',
                    descriptionSize || 'md:text-xl',
                    {
                        'text-gray-100': !isLight,
                        'text-gray-400': isLight,
                    }
                )}
            >
                {description ?? 'Cody is an AI coding assistant that uses advanced search and codebase context to help you understand, write, and fix code faster.'}
            </p>
            <div className="mx-auto flex flex-row flex-wrap justify-center gap-[8px] rounded-[6px]">
                <button
                    type="button"
                    className={classNames('btn mr-4 px-5 py-3', isLight ? 'btn-primary' : 'btn-primary-dark')}
                    title="Get Cody for free"
                    onClick={() => handleOpenModal('top')}
                >
                    <div className="flex items-center justify-center">
                        <img src="/cody/cody-logo.svg" className="mr-2 h-[15px] w-[15px]" alt="Cody Logo" /> Download Cody
                        for your IDE
                    </div>
                </button>
                <Link
                    href="https://sourcegraph.com/sign-in?returnTo=/cody/chat"
                    title="Chat on the web"
                    className="btn btn-secondary mr-4 px-5 py-3"
                    type="button"
                >
                    <div className="flex items-center justify-center">Chat on the web</div>
                </Link>
            </div>
        </div>
    </ContentSection>
)
