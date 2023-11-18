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

        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );

        config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
              ...fileLoaderRule,
              test: /\.svg$/i,
              resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
              test: /\.svg$/i,
              issuer: /\.[jt]sx?$/,
              resourceQuery: { not: /url/ }, // exclude if *.svg?url
              use: ['@svgr/webpack'],
            },
        );

        fileLoaderRule.exclude = /\.svg$/i

        return config;
    },
    reactStrictMode: true,
}

module.exports = nextConfig
