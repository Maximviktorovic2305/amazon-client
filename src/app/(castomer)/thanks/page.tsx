

import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import ThanksPage from './ThanksPage'

export const metadata: Metadata = {
    title: 'Thanks',
    ...NO_INDEX_PAGE
}

export default function Page() {
    return <ThanksPage />
}
