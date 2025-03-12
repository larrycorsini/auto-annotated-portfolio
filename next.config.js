/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    experimental: {
        appDir: true, // Already enabled
    },
    // Add output configuration for static site generation
    output: 'export', // Ensures static export, compatible with Netlify
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Content-Type",
                        value: "text/html",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
