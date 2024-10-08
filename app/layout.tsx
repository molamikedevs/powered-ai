import type { Metadata } from "next";
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'

const IBMPlex = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--ibm-plex-sans',
})

export const metadata: Metadata = {
	title: 'Powered Ai',
	description: 'Image generator by powered Ai',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			appearance={{
				variables: { colorPrimary: '#624cf5' },
			}}>
			<html lang="en">
				<body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
