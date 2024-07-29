'use client'

import DataChart from '@/components/data-chart'
import DateFilter from '@/components/date-filter'
import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useFetchStoresStoreSections } from '@/features/store-sections/api/use-fetch-store-store-sections'
import { useFetchSingleStore } from '@/features/stores/api/use-fetch-single-store'
import { useFetchStoreIncidents } from '@/features/stores/api/use-fetch-store-incidents'
import { subDays } from 'date-fns'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

type Props = {
	params: {
		storeId: string
	}
}

const IndividualStorePage = ({ params: { storeId } }: Props) => {
	const pathname = usePathname()

	const regionId = pathname.split('/')[3]

	const initialRange: DateRange = {
		from: subDays(new Date(), 7),
		to: new Date()
	}

	const [range, setRange] = useState<DateRange | undefined>(initialRange)

	const {
		data: incidents,
		isPending: isStoreIncidentsPending,
		isError: isStoreIncidentsError
	} = useFetchStoreIncidents(storeId)

	const {
		data: storeSections,
		isPending: isStoreSectionsPending,
		isError: isStoreSectionsError
	} = useFetchStoresStoreSections(storeId)

	const {
		data: store,
		isPending: isStorePending,
		isError: isStoreError
	} = useFetchSingleStore(storeId)

	if (isStoreIncidentsPending || isStoreSectionsPending || isStorePending) {
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
					<Skeleton className='w-full h-[60vh] mt-4' />
				</div>
			</div>
		)
	}

	if (isStoreIncidentsError || isStoreSectionsError || isStoreError) {
		return <div>Error</div>
	}

	const totalValue = incidents.reduce((acc, incident) => {
		return acc + incident.product_price * incident.product_quantity
	}, 0)

	const chartData = storeSections.map((storeSection) => {
		return {
			storeSection: storeSection.store_section_name,
			value: storeSection.incidents.reduce((acc, incident) => {
				return acc + incident.product_price * incident.product_quantity
			}, 0)
		}
	})

	return (
		<div className='h-full p-2'>
			<TopBar title={store.store_name} />
			<div className='h-full p-4'>
				<div className='flex justify-around pb-2'>
					<div>
						<DateFilter range={range} setRange={setRange} />
					</div>
					<div>
						<Link
							href={`/overall/regions/${regionId}/stores/${storeId}/storeSections`}
						>
							<Button
								size={'lg'}
								variant={'outline'}
								className='text-lg bg-transparent'
							>
								Stores Sections
							</Button>
						</Link>
					</div>
					<div />
				</div>
				<div className='gap-x-2 flex justify-between'>
					<SummaryCard label='Total Amount' amount={totalValue} />
					<SummaryCard
						label='Total Number of Incidents'
						amount={incidents.length}
					/>
					<SummaryCard
						label='Average '
						amount={Math.floor(totalValue / incidents.length)}
					/>
				</div>
				<DataChart
					label={store.store_name}
					data={chartData}
					sector={'storeSection'}
				/>
			</div>
		</div>
	)
}

export default IndividualStorePage
