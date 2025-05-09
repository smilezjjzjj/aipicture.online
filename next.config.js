/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false
  },
  output: 'standalone',
  // 添加 transpilePackages 配置
  transpilePackages: ['debug', 'supports-color'],
  // 添加图片域名配置
  images: {
    domains: [
      'localhost',
      'jgmqqbzpksytcnkfwlmh.supabase.co'
    ],
  }
}
module.exports = nextConfig
