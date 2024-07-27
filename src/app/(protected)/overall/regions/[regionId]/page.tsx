'use client'

import DataChart from '@/components/data-chart'
import DateFilter from '@/components/date-filter'
import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import { useFetchRegion } from '@/features/regions/api/use-fetch-region'
import { useFetchRegionStores } from '@/features/stores/api/use-fetch-region-stores'
import { subDays } from 'date-fns'
import Link from 'next/link'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

type Props = {
	params: {
		regionId: string
	}
}

const IndividualRegionPage = ({ params: { regionId } }: Props) => {
	const {
		data: region,
		isPending: isRegionPending,
		isError: isRegionError
	} = useFetchRegion(regionId)
	const {
		data: stores,
		isPending: isStoresPending,
		isError: isStoresError
	} = useFetchRegionStores(regionId)

	const initialRange: DateRange = {
		from: subDays(new Date(), 7),
		to: new Date()
	}

	const [range, setRange] = useState<DateRange | undefined>(initialRange)

	if (isRegionPending || isStoresPending) {
		return (
			<div className='h-full'>
				<TopBar title={''} />
				Loading...
			</div>
		)
	}

	if (isRegionError || isStoresError) {
		return (
			<div className='h-full'>
				<TopBar title={regionId} />
				<p className='text-rose-500 text-4xl font-bold'>
					Something Went Wrong!!!
				</p>
			</div>
		)
	}

	const chartData = stores.map((store) => {
		return {
			sector: store.store_name,
			value: store.incidents.reduce((acc, incident) => {
				return acc + incident.product_price * incident.product_quantity
			}, 0)
		}
	})

	return (
		<div className='h-full p-2'>
			<TopBar title={region.region_name} />
			<div className='h-full p-4'>
				<div className='flex justify-around pb-2'>
					<div>
						<DateFilter range={range} setRange={setRange} />
					</div>
					<div>
						<Link
							href={`/overall/regions/${region.region_id}/stores`}
						>
							<Button
								size={'lg'}
								variant={'outline'}
								className='text-lg bg-transparent'
							>
								Stores
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
				<DataChart data={chartData} label={region.region_name} sector={'store'} />
			</div>
		</div>
	)
}

export default IndividualRegionPage
