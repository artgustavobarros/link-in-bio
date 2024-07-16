'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ShareSocialLinks } from '../share-social-links'
import { Ellipsis } from 'lucide-react'

interface DialogTagProps {
  url?: string
}

export function DialogTag({ url }: DialogTagProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Ellipsis className="h-5 w-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <ShareSocialLinks url={url as string} />
      </Dialog.Portal>
    </Dialog.Root>
  )
}
