'use client'

import DataChart from '@/components/data-chart'
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
	const { data: regions, isPending, isError } = useFetchAllRegions()

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
					<div className='gap-x-2 flex justify-between'>
						<Skeleton className='w-[25rem] h-[10rem]' />
						<Skeleton className='w-[25rem] h-[10rem]' />
						<Skeleton className='w-[25rem] h-[10rem]' />
					</div>
					{/* TODO: Add the charts and tables for analysis */}
				</div>
			</div>
		)
	}

	if (isError) {
		return (
			<div className='h-full p-2'>
				<TopBar title={'Overall Data'} />
				<div className='text-rose-500 flex items-center justify-center h-full p-4 text-4xl font-bold uppercase'>
					Something went wrong
				</div>
			</div>
		)
	}

	const chartData = regions.map((region) => {
		return {
			label: region.region_name,
			value: region.incidents.reduce((acc, incident) => {
				acc + incident.product_price * incident.product_quantity
			}, 0) as number
		}
	})

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
				<div className='gap-x-2 flex justify-between'>
					<SummaryCard label='Total Amount' amount={0} />
					<SummaryCard label='Total Number of Incidents' amount={0} />
					<SummaryCard label='Total ' amount={0} />
				</div>
				<DataChart label={'All'} data={chartData} sector={'region'} />
			</div>
		</div>
	)
}

export default OverallDataPage
