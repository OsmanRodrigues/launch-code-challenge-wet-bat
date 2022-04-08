import { NextPage } from 'next'
import Image from 'next/image'

const Custom404: NextPage = () => (
    <Image
        src='https://http.cat/404'
        layout='fill'
        objectFit='contain'
        objectPosition='center'
        alt='cat not found'
    />
)

export default Custom404
