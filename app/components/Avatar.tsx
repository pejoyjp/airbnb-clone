import React from 'react'
import Image from 'next/image'
type Props = {}

const Avatar = (props: Props) => {
  return (
    <Image className='rounded-full' height='30' width='30' alt='avatar' src={"/images/placeholder.jpg"}/>
  )
}

export default Avatar