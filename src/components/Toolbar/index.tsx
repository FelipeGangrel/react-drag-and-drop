'use client'

import { HeadingIcon, ArticleIcon, SignatureIcon } from '@/icons'
import { Button } from './Button'

export const Toolbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 mx-auto flex w-fit -translate-x-1/2 flex-row gap-2 rounded-xl bg-white p-2 drop-shadow-lg dark:bg-slate-900">
      <Button tooltip="Add heading">
        <HeadingIcon />
      </Button>
      <Button tooltip="Add text box">
        <ArticleIcon />
      </Button>
      <Button tooltip="Add signature">
        <SignatureIcon />
      </Button>
    </div>
  )
}
