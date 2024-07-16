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
    <div className="lg:w-128 flex w-80 justify-center rounded-3xl bg-white p-5 shadow-md duration-300 hover:scale-110 hover:shadow-lg hover:ease-in-out">
      <Link href={url} target="_blank" className="flex-1">
        {title}
      </Link>
      {childrenWithProps}
    </div>
  )
}
