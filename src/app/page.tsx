import Image from 'next/image'
import * as Tag from '../components/tag'
import data from '@/links-to-share.json'

export default function Home() {
  return (
    <div className="relative space-y-5">
      <section className="flex flex-col items-center justify-center gap-4 pt-16">
        <Image
          src="/brand.jpg"
          alt=""
          width={100}
          height={100}
          quality={100}
          priority
          className="rounded-full object-cover shadow-sm"
        />
        <h1 className="text-xl font-bold">@oxentesoltaoscachos</h1>
        <span className="text-md font-normal">
          Links e cupons disponísveis ♥
        </span>
        <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md duration-300 hover:scale-110 hover:shadow-lg hover:ease-in-out">
          <Tag.DialogTag url="http://localhost:3000" />
        </div>
      </section>
      <section className="space-y-4 text-center text-sm font-light">
        {data.map((link) => {
          return (
            <Tag.Root key={link.title}>
              <Tag.Prefix url={link.url} title={link.title}>
                <Tag.DialogTag />
              </Tag.Prefix>
            </Tag.Root>
          )
        })}
      </section>
    </div>
  )
}
