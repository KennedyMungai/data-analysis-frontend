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
			<Card className='w-32 h-48'>
				<CardHeader>{title}</CardHeader>
				<CardContent>{children}</CardContent>
			</Card>
		</Link>
	)
}

export default InfoCard
