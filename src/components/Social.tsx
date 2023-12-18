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
        path: '/',
        name: <RiYoutubeFill />
    },
    {
        path: '/',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiLinkedinFill />
    },
    {
        path: '/',
        name: <RiFacebookFill />
    },
    {
        path: '/',
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