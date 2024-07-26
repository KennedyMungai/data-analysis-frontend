'use client'

import DateFilter from '@/components/date-filter'
import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import { useFetchStoreSectionIncidents } from '@/features/incidents/api/use-fetch-store-section-incidents'
import NewIncidentSheet from '@/features/incidents/components/new-incident-sheet'
import { useNewIncident } from '@/features/incidents/hooks/use-new-incident'
import { useFetchSingleStoreSection } from '@/features/store-sections/api/use-fetch-single-store-section'
import { useFetchSingleStore } from '@/features/stores/api/use-fetch-single-store'
import { useUser } from '@auth0/nextjs-auth0/client'
import { subDays } from 'date-fns'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { columns } from './columns'
import DataTable from './data-table'

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
		from: subDays(new Date(), 7),
		to: new Date()
	}

	const [range, setRange] = useState<DateRange | undefined>(initialRange)

	const { onOpen } = useNewIncident()

	const { user } = useUser()

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

	const {
		data: incidents,
		isPending: isIncidentsPending,
		isError: isIncidentsError
	} = useFetchStoreSectionIncidents(storeSectionId)

	if (isStoreSectionPending || isStorePending || isIncidentsPending) {
		return (
			<div className='h-full'>
				<TopBar title={''} />
				Loading...
			</div>
		)
	}

	if (isStoreSectionError || isStoreError || isIncidentsError) {
		return (
			<div className='h-full'>
				<TopBar title={''} />
				Error
			</div>
		)
	}

	const totalAmount = incidents.reduce((acc, incident) => {
		return acc + incident.product_price * incident.product_quantity
	}, 0)

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
					<SummaryCard
						label='Total Amount'
						amount={`Ksh ${totalAmount}`}
					/>
					<SummaryCard
						label='Total Number of Incidents'
						amount={incidents.length.toString()}
					/>
					<SummaryCard
						label='Average '
						amount={`Ksh ${totalAmount / incidents.length}`}
					/>
				</div>
				<div className='h-[60vh] my-3'>
					{/* @ts-ignore */}
					<DataTable columns={columns} data={[...incidents]} />
				</div>
			</div>
			<NewIncidentSheet
				employeeId={user!.sub!}
				employeeName={user!.name!}
				employeeEmail={user!.email!}
				storeSectionId={storeSectionId}
				storeId={storeId}
				regionId={regionId}
			/>
		</>
	)
}

export default StoreSectionDetails
