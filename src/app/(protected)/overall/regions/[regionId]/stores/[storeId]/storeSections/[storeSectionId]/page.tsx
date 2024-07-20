'use client'

import DateFilter from '@/components/date-filter'
import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import NewIncidentSheet from '@/features/incidents/components/new-incident-sheet'
import { useNewIncident } from '@/features/incidents/hooks/use-new-incident'
import { useFetchSingleStoreSection } from '@/features/store-sections/api/use-fetch-single-store-section'
import { useFetchSingleStore } from '@/features/stores/api/use-fetch-single-store'
import { addDays } from 'date-fns'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

type Props = {
	params: {
		storeSectionId: string
	}
}

const StoreSectionDetails = ({ params: { storeSectionId } }: Props) => {
	const pathname = usePathname()

	const storeId = pathname.split('/')[5]
	const regionId = pathname.split('/')[3]

	const initialRange: DateRange = {
		from: new Date(),
		to: addDays(new Date(), 4)
	}

	const [range, setRange] = useState<DateRange | undefined>(initialRange)

	const { onOpen } = useNewIncident()

	const {
		data: storeSection,
		isPending: isStoreSectionPending,
		isError: isStoreSectionError
	} = useFetchSingleStoreSection(storeSectionId)

	const {
		data: store,
		isPending: isStorePending,
		isError: isStoreError
	} = useFetchSingleStore(storeId)

	if (isStoreSectionPending || isStorePending) {
		return (
			<div className='h-full'>
				<TopBar title={''} />
				Loading...
			</div>
		)
	}

	if (isStoreSectionError || isStoreError) {
		return (
			<div className='h-full'>
				<TopBar title={''} />
				Error
			</div>
		)
	}

	return (
		<>
			<div className='h-full p-2'>
				<TopBar
					title={`${store.store_name} ${storeSection.store_section_name}`}
				/>
				<div className='flex justify-around py-2'>
					<div>
						<DateFilter range={range} setRange={setRange} />
					</div>
					<div>
						<Button
							size={'lg'}
							variant={'outline'}
							className='text-lg bg-transparent'
							onClick={onOpen}
						>
							Add Incident
						</Button>
					</div>
					<div />
				</div>
				<div className='flex justify-between gap-x-2'>
					<SummaryCard label='Total Amount' amount={0} />
					<SummaryCard label='Total Number of Incidents' amount={0} />
					<SummaryCard label='Total ' amount={0} />
				</div>
			</div>
			<NewIncidentSheet
				// TODO: Add the employee ID
				employeeId={''}
				storeSectionId={storeSectionId}
				storeId={storeId}
				regionId={regionId}
			/>
		</>
	)
}

export default StoreSectionDetails
