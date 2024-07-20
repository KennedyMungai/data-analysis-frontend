'use client'

import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { addDays } from 'date-fns'
import Link from 'next/link'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

const OverallDataPage = () => {
	const initialRange: DateRange = {
		from: new Date(),
		to: addDays(new Date(), 4)
	}

	const [range, setRange] = useState<DateRange | undefined>(initialRange)

	return (
		<div className='h-full p-2'>
			<TopBar title={'Overall Data'} />
			<div className='h-full p-4'>
				<div className='flex justify-around pb-2'>
					<div>
						<Calendar
							mode='range'
							selected={range}
							onSelect={setRange}
							className='rounded-md border'
						/>
					</div>
					<div>
						<Link href={'/overall/regions'}>
							<Button
								size={'lg'}
								variant={'outline'}
								className='text-lg bg-transparent'
							>
								Regions
							</Button>
						</Link>
					</div>
					<div />
				</div>
				<div className='flex justify-between gap-x-2'>
					<SummaryCard label='Total Amount' amount={0} />
					<SummaryCard label='Total Number of Incidents' amount={0} />
					<SummaryCard label='Total ' amount={0} />
				</div>
				{/* TODO: Add the charts and tables for analysis */}
			</div>
		</div>
	)
}

export default OverallDataPage
