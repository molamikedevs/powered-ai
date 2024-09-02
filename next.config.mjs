/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
			},
		],
	},
	env: {
		MONGODB_URL: process.env.MONGODB_URL,
	},
}

export default nextConfig