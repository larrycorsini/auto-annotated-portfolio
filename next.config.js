/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    experimental: {
            appDir: true, // Helps with Netlify Forms compatibility
        },
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
