import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.svg' alt="Portfolio" width={50} height={50} priority/>
    </Link>
  )
}

export default Logo