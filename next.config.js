/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Enable jika diperlukan
        esmExternals: 'loose',
    },
    transpilePackages: [
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        'maath'
    ],
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader', 'glslify-loader'],
        });
        return config;
    },
};

module.exports = nextConfig;
