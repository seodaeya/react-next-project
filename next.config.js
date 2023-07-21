/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:8090/:path*',
            },
        ]
    },
}

module.exports = nextConfig
