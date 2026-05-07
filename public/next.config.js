const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Sangat penting untuk GitHub Pages
  basePath: '/IDCARD-MANIA', // Ganti dengan nama repositori Anda jika bukan username.github.io
  images: {
    unoptimized: true,   // Agar gambar muncul di GitHub Pages
  },
  // Jika nama repositori GitHub Anda bukan username.github.io (misal: my-store)
  // Anda mungkin perlu menambahkan basepath:
  // basePath: '/nama-repo-anda', 
};

module.exports = withPWA(nextConfig);