import { Paragraph } from '@atomic'
import { NextPage } from 'next'

const Error: NextPage<{statusCode: number, err: any}, any> = ({ statusCode, err}) => {
    return (
        <>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
            {err ?
                <>
                    <Paragraph>{err.toString()}</Paragraph>
                    <br/>
                    <Paragraph>{err.fileName}</Paragraph>
                    <br/>
                    <Paragraph>{err.stack}</Paragraph>
                </>
                : null
            }
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return { statusCode, err }
}

export default Error
