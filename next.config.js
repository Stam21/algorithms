const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, './public/scss')],
  },
};

const nextConfig = {
  reactStrictMode: true,
  // This is the property you need to add
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
