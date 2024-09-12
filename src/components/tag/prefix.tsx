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
    <div className="relative flex items-center justify-center">
      <Link
        href={url}
        target="_blank"
        className="flex h-[78px] w-[578px] items-center justify-center rounded-full border-2 bg-white text-base font-semibold shadow-md duration-300 hover:scale-110 hover:shadow-lg hover:ease-in-out"
      >
        <span className="w-full font-semibold">{title}</span>
      </Link>
      <span className="absolute right-7 top-8">{childrenWithProps}</span>
    </div>
  )
}
