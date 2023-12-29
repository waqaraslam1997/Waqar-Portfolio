'use client'

import Link from 'next/link'

import {
    RiYoutubeFill,
    RiGithubFill,
    RiLinkedinFill,
    RiInstagramFill,
    RiFacebookFill,
} from 'react-icons/ri'

const icons = [
    {
        path: 'https://www.youtube.com/channel/UCcpipSVsEIaAZ-KOPd4CX3g',
        name: <RiYoutubeFill />
    },
    {
        path: 'https://github.com/waqaraslam1997',
        name: <RiGithubFill />
    },
    {
        path: 'https://linkedin.com/in/waqar-aslam-62ab341a5',
        name: <RiLinkedinFill />
    },
    {
        path: 'https://www.facebook.com/waqar.king.96/',
        name: <RiFacebookFill />
    },
    {
        path: 'https://www.instagram.com/waqaraslam927/',
        name:  <RiInstagramFill />
    },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconStyles}`}>
                            {icon.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Social