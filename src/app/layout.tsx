import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import QueryProvider from '@/providers/query-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
	title: 'Data Analysis',
	description: 'A simple data analysis application for retail stores'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.className
				)}
			>
				<ThemeProvider>
					<QueryProvider>
						<Toaster />
						{children}
					</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
