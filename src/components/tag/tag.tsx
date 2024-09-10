'use client'
import Link from 'next/link'
import { Ellipsis } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { ShareSocialLinks } from '../share-social-links'

interface TagProps {
  url: string
  title: string
}

export function Tag({ url, title }: TagProps) {
  return (
    <div className="flex w-80 justify-center rounded-3xl bg-white p-5 shadow-md duration-300 hover:scale-110 hover:shadow-lg hover:ease-in-out dark:bg-white">
      <Link href={url} target="_blank" className="flex-1">
        {title}
      </Link>
      <Dialog.Root>
        <Dialog.Trigger>
          <Ellipsis className="h-5 w-5" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <ShareSocialLinks url={url} />
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
