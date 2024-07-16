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
    // eslint-disable-next-line prettier/prettier
    <div className="flex w-80 justify-center items-center rounded-3xl bg-white p-5 shadow-md duration-300 hover:scale-110 hover:shadow-lg hover:ease-in-out lg:w-[578px] lg:h-[78px] lg:font-semibold lg:text-base">
      <Link href={url} target="_blank" className="flex-1">
        {title}
      </Link>
      {childrenWithProps}
    </div>
  )
}
