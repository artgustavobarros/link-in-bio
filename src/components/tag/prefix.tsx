import Link from 'next/link'
import { cloneElement, ReactElement } from 'react'

interface PrefixProps {
  children: ReactElement
  url: string
  title: string
}

export function Prefix({ children, url, title }: PrefixProps) {
  const childrenWithProps = cloneElement(children, { url })
  return (
    <div className="flex">
      <Link
        href={url}
        target="_blank"
        className="flex w-80 items-center justify-center rounded-full border-2 bg-zinc-800 p-5 shadow-md duration-300 hover:scale-110 hover:shadow-lg hover:ease-in-out lg:h-[78px] lg:w-[578px] lg:text-base lg:font-semibold"
      >
        <span className="w-52 font-thin lg:w-full">{title}</span>
      </Link>
      <div className="flex -translate-x-12">{childrenWithProps}</div>
    </div>
  )
}
