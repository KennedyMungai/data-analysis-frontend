import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	link: string
	title: string
}

const InfoCard = ({ children, link, title }: Props) => {
	return (
		<Link href={link}>
			<Card className='shadow-md w-64 h-72 p-4'>
				<CardHeader className='capitalize font-bold text-5xl text-center'>
					{title}
				</CardHeader>
				<CardContent className='text-muted-foreground text-sm text-center'>
					{children}
				</CardContent>
			</Card>
		</Link>
	)
}

export default InfoCard
