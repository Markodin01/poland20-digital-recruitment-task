/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		output: 'export',
		basePath: '/poland20-digital-recruitment-task',
		formats: ['image/avif', 'image/webp'],
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;
