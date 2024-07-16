import Image from 'next/image'
import * as Tag from '../components/tag'

export default function Home() {
  return (
    <div className="space-y-5">
      <section className="relative flex flex-col items-center justify-center gap-4 pt-16">
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
        <div className="fixed right-10 top-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md duration-300 hover:scale-110 hover:shadow-lg hover:ease-in-out">
          <Tag.DialogTag url="http://localhost:3000" />
        </div>
      </section>
      <section className="space-y-4 text-center text-sm font-light">
        <Tag.Root>
          <Tag.Prefix
            url="https://www.youtube.com/@OxenteSoltaosCachos?si=eNxR__qL5jQ8EUgz"
            title="youtube.com"
          >
            <Tag.DialogTag />
          </Tag.Prefix>
        </Tag.Root>
        <Tag.Root>
          <Tag.Prefix
            url="https://www.legboxbrasil.com.br/pages/LEGOXENTESOLTAOSCACHOS?utm_source=leglover&utm_medium=link&utm_campaign=LEGOXENTESOLTAOSCACHOS"
            title="LEGOXENTESOLTAOSCACHOS – Legbox"
          >
            <Tag.DialogTag />
          </Tag.Prefix>
        </Tag.Root>
        <Tag.Root>
          <Tag.Prefix
            url="https://www.amazon.com.br/shop/oxentesoltaoscachos?ref=ac_inf_tb_vh"
            title="Loja Amazon"
          >
            <Tag.DialogTag />
          </Tag.Prefix>
        </Tag.Root>
        <Tag.Root>
          <Tag.Prefix
            url="https://www.embelleze.com/?gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh0FEJxTqqZ1Ri2zfLM7uKI4TSMmd9hX9F62gBNov4FdTXr1LYPKWMxoC270QAvD_BwE"
            title="Cupom: oxentesoltaoscachos / Embelleze"
          >
            <Tag.DialogTag />
          </Tag.Prefix>
        </Tag.Root>
      </section>
    </div>
  )
}
