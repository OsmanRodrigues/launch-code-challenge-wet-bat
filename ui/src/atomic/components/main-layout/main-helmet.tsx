import Head from 'next/head'
import { FC } from 'react'

interface IHelmet {
    title: string,
    description: string
}

export const Helmet: FC<IHelmet> = ({title, description}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
)
