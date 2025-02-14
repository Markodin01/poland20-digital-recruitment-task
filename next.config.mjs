/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/poland20-digital-recruitment-task',
	images: {
	  formats: ['image/avif', 'image/webp'],
	  dangerouslyAllowSVG: true,
	  contentDispositionType: 'attachment',
	  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	  unoptimized: true,
	},
  };
  
  export default nextConfig;