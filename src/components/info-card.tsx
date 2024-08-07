import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
	children?: ReactNode
	link: string
	title: string
}

const InfoCard = ({ children, link, title }: Props) => {
	return (
		<Card className='shadow-md w-64 min-h-72 p-2'>
			<Link href={link}>
				<CardHeader className='capitalize font-semibold text-4xl text-center'>
					{title}
				</CardHeader>
			</Link>
			<CardContent className='text-muted-foreground text-sm text-center'>
				{children}
			</CardContent>
		</Card>
	)
}

export default InfoCard
