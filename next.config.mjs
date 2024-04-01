/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `http://localhost:8083/:path*`,
            },
        ]
    },
};

export default nextConfig;
