/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function (config, { buildId, dev, isServer, defaultLoaders, webpack }) {
        if (!isServer) {
            config.resolve = {
                ...config.resolve,
                fallback: {
                    ...config.resolve.fallback,
                    child_process: false,
                    fs: false,
                    'builtin-modules': false,
                    worker_threads: false,
                },
            }
        }

        config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' })

        return config;
    },
    reactStrictMode: true,
}

module.exports = nextConfig
