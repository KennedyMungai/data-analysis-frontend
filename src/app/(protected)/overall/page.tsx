'use client'

import DateFilter from '@/components/date-filter'
import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useFetchAllRegions } from '@/features/overall/api/use-fetch-all-regions'
import { subDays } from 'date-fns'
import Link from 'next/link'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

const OverallDataPage = () => {
	const { data, isPending, isError } = useFetchAllRegions()

	const initialRange: DateRange = {
		from: subDays(new Date(), 7),
		to: new Date()
	}

	const [range, setRange] = useState<DateRange | undefined>(initialRange)

	if (isPending) {
		return (
			<div className='h-full p-2'>
				<TopBar title={'Overall Data'} />
				<div className='h-full p-4'>
					<div className='flex justify-around pb-2'>
						<div>
							<Skeleton className='w-24 h-8' />
						</div>
						<div>
							<Skeleton className='w-24 h-8' />
						</div>
						<div />
					</div>
					<div className='flex justify-between gap-x-2'>
						<Skeleton className='w-[25rem] h-[10rem]' />
						<Skeleton className='w-[25rem] h-[10rem]' />
						<Skeleton className='w-[25rem] h-[10rem]' />
					</div>
					{/* TODO: Add the charts and tables for analysis */}
				</div>
			</div>
		)
	}

    if(isError) {
        return (
		<div className='h-full p-2'>
			<TopBar title={'Overall Data'} />
			<div className='h-full p-4 flex items-center justify-center font-bold text-rose-500 text-4xl uppercase'>
				Something went wrong
			</div>
		</div>
	)
    }

	return (
		<div className='h-full p-2'>
			<TopBar title={'Overall Data'} />
			<div className='h-full p-4'>
				<div className='flex justify-around pb-2'>
					<div>
						<DateFilter range={range} setRange={setRange} />
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
