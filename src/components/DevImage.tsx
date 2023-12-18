import Image from 'next/image'
import React from 'react'

const DevImage = ({containerStyles, imgsrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgsrc} alt='' fill priority/>
    </div>
  )
}

export default DevImage