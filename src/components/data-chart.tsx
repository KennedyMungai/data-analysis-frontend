'use client'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart'
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts'

type Props = {
	label: string
	data: { sector: 'storeSection' | 'store' | 'region'; value: number }[]
}

const chartConfig = {
	storeSections: {
		label: 'Store Section',
		color: 'blue'
	}
} satisfies ChartConfig

const StoreChart = ({ label, data }: Props) => {
	return (
		<Card className='my-4'>
			<CardHeader>
				<CardTitle>{label} Store Sections</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className='min-h-[60vh]'>
					<LineChart
						accessibilityLayer
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<CartesianGrid strokeDasharray={'3 3'} />
						<XAxis dataKey='storeSection' fill='blue' />
						<YAxis dataKey={'value'} />
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='line' />}
						/>
						<Line
							dataKey='value'
							type='natural'
							fill='blue'
							fillOpacity={0.2}
							stroke='blue'
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<p className='text-xl font-semibold'>
					The incident values in each store section
				</p>
			</CardFooter>
		</Card>
	)
}

export default StoreChart
