/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          { 
            loader: '@svgr/webpack' , 
            options: { 
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false
                      }
                    }
                  }
                ],
              }
            }
          },
        ],
      }
    );
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')]
  }
}

module.exports = nextConfig