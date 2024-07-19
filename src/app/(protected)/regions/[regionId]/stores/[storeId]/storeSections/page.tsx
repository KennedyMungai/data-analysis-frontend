'use client'

import InfoCard from '@/components/info-card'
import TopBar from '@/components/top-bar'
import { useFetchStoresStoreSections } from '@/features/store-sections/api/use-fetch-store-store-sections'
import AddStoreSectionCard from '@/features/store-sections/components/add-store-section-card'
import { usePathname } from 'next/navigation'

const StoreSectionsPage = () => {
	const pathname = usePathname()

	const regionId = pathname.split('/')[2]
	const storeId = pathname.split('/')[4]

	const {
		data: storeSections,
		isPending,
		isError
	} = useFetchStoresStoreSections(storeId)

	if (isPending)
		<div className='h-full'>
			<TopBar title='Store Sections' />
			Loading...
		</div>

	if (isError)
		<div className='h-full'>
			<TopBar title='Store Sections' />
			Something went wrong
		</div>

	return (
		<div className='h-full'>
			<TopBar title='Store Sections' />
			<div className='gap-x-4 gap-y-8 flex flex-wrap items-center justify-center h-full p-4'>
				{storeSections?.map((storeSection) => (
					<InfoCard
						link={`/regions/${regionId}/stores/${storeId}/storeSections/${storeSection.store_section_id}`}
						title={storeSection.store_section_name}
						key={storeSection.store_section_id}
					>
						Some Info
						{/* TODO: Add data specific to a region */}
					</InfoCard>
				))}
				<AddStoreSectionCard storeId={storeId} />
			</div>
		</div>
	)
}

export default StoreSectionsPage
