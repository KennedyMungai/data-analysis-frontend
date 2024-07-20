'use client'

import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import NewIncidentSheet from '@/features/incidents/components/new-incident-sheet'
import { useNewIncident } from '@/features/incidents/hooks/use-new-incident'
import { useFetchSingleStoreSection } from '@/features/store-sections/api/use-fetch-single-store-section'
import { useFetchSingleStore } from '@/features/stores/api/use-fetch-single-store'
import { usePathname } from 'next/navigation'

type Props = {
	params: {
		storeSectionId: string
	}
}

const StoreSectionDetails = ({ params: { storeSectionId } }: Props) => {
	const pathname = usePathname()

	const storeId = pathname.split('/')[5]
	const regionId = pathname.split('/')[3]

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
			<div className='h-full'>
				<TopBar
					title={`${store.store_name} ${storeSection.store_section_name}`}
				/>
				<div className='flex justify-around py-2'>
					<div>
						{/* TODO: Add a calendar for specifying the time frame of the data being analyzed */}
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
				<div className='flex justify-between'>
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
