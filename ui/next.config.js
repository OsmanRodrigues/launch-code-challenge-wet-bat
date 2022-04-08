/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['http.cat']
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    }
}

module.exports = nextConfig
