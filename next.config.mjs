/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['lipsum.app',
            'cdn.emegen.com.tr'
        ],
    },
};

export default nextConfig;
