import Image from 'next/image'
import * as Tag from '../components/tag'
import data from '../data/links-to-share.json'

export default function Home() {
  return (
    <div className="relative space-y-5">
      <section className="flex flex-col items-center justify-center gap-4 pt-16">
        <Image
          src={
            'https://instagram.fmcz1-1.fna.fbcdn.net/v/t51.2885-19/367638985_4819817068142342_2762844206310264767_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmcz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1-RnSsqTicQ7kNvgG88Vmq&edm=AJYBtmQBAAAA&ccb=7-5&oh=00_AYBsz8B7R4I9PeDcKeUF5aVDJaJ9o79vnW2Zk5JGJkftqg&oe=66E6A877&_nc_sid=691684'
          }
          alt=""
          width={100}
          height={100}
          quality={100}
          priority
          className="rounded-full object-cover shadow-sm"
        />
        <h1 className="text-xl font-bold">@oxentesoltaoscachos</h1>
        <span className="text-md">Links e cupons disponíveis 😍</span>
        <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-app-top-ellipses shadow-md duration-300 hover:scale-110 hover:shadow-lg hover:ease-in-out">
          <Tag.DialogTag url="https://oxentesoltaoscachos.vercel.app/" />
        </div>
      </section>
      <section className="flex flex-col gap-4 text-center text-sm font-light">
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
