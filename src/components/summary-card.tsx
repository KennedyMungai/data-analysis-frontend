import { Card, CardContent, CardHeader } from '@/components/ui/card'

type Props = {
	label: string
	amount: number
}

const SummaryCard = ({ amount, label }: Props) => {
	return (
		<Card className='w-[25rem]'>
			<CardHeader className='text-3xl font-semibold text-center'>
				{label}
			</CardHeader>
			<CardContent className='text-muted-foreground text-lg text-center'>
				Ksh {amount}
			</CardContent>
		</Card>
	)
}

export default SummaryCard