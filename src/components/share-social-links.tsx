import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share'

interface ShareSocialLinksProps {
  url: string
}

export function ShareSocialLinks({ url }: ShareSocialLinksProps) {
  return (
    <>
      <Dialog.Overlay className="bg-app-backgroundA6 fixed inset-0 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
        <section className="mb-8 flex justify-between">
          <Dialog.Title className="text-2xl">
            Compartilhe este link
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            Share this link
          </Dialog.Description>
          <Dialog.Close>
            <X />
          </Dialog.Close>
        </section>
        <section className="space-y-4">
          <div className="hover:bg-app-hover-dialog flex h-12 w-full items-center rounded-2xl p-6 duration-300">
            <FacebookShareButton url={url} className="flex items-center gap-4">
              <FacebookIcon size={28} round={true} />
              <span className="">Compartilhe com o Facebook</span>
            </FacebookShareButton>
          </div>
          <div className="hover:bg-app-hover-dialog flex h-12 items-center rounded-2xl p-6 duration-300">
            <FacebookMessengerShareButton
              url={url}
              appId="100094151947242"
              to="100094151947242"
              className="flex items-center gap-4"
            >
              <FacebookMessengerIcon size={28} round={true} />
              <span className="">Compartilhe com o Messenger</span>
            </FacebookMessengerShareButton>
          </div>
          <div className="hover:bg-app-hover-dialog flex h-12 items-center rounded-2xl p-6 duration-300">
            <LinkedinShareButton url={url} className="flex items-center gap-4">
              <LinkedinIcon size={28} round={true} />
              <span className="">Compartilhe com o LinkedIn</span>
            </LinkedinShareButton>
          </div>
          <div className="hover:bg-app-hover-dialog flex h-12 items-center rounded-2xl p-6 duration-300">
            <TwitterShareButton url={url} className="flex items-center gap-4">
              <XIcon size={28} round={true} />
              <span className="">Compartilhe com o X</span>
            </TwitterShareButton>
          </div>
          <div className="hover:bg-app-hover-dialog flex h-12 items-center rounded-2xl p-6 duration-300">
            <WhatsappShareButton url={url} className="flex items-center gap-4">
              <WhatsappIcon size={28} round={true} />
              <span className="">Compartilhe com o Whatsapp</span>
            </WhatsappShareButton>
          </div>
        </section>
      </Dialog.Content>
    </>
  )
}
