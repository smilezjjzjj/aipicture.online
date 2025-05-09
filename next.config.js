/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false
  },
  output: 'standalone',
  // 添加图片域名配置
  images: {
    domains: [
      'localhost',
      'your-supabase-project.supabase.co'
    ],
  }
}

module.exports = nextConfig
