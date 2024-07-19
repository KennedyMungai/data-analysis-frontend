'use client'

import InfoCard from '@/components/info-card'
import TopBar from '@/components/top-bar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useFetchRegion } from '@/features/regions/api/use-fetch-region'
import { useFetchRegionStores } from '@/features/stores/api/use-fetch-region-stores'
import AddStoreCard from '@/features/stores/components/add-store-card'
import { usePathname } from 'next/navigation'

const StoresPage = () => {
	const pathname = usePathname()

	const regionId = pathname.split('/')[2]

	const regionQuery = useFetchRegion(regionId)

	const regionStoresQuery = useFetchRegionStores(regionId)

	if (regionQuery.isPending)
		<div className='h-full'>
			<TopBar title={''} />
			Loading...
		</div>
		

	if (regionQuery.isError)
		<div className='h-full'>
			<TopBar title={'Fetch Error'} />
			Something went wrong
		</div>

	return (
		<div className='h-full'>
			<TopBar title={regionQuery.data?.region_name || ''} />
			<ScrollArea className='h-full w-full px-12 py-6'>
				<div className='gap-x-4 gap-y-8 flex flex-wrap items-center justify-center h-full p-4'>
					{regionStoresQuery.data?.map((store) => (
						<InfoCard
							link={`/regions/${regionId}/stores/${store.store_id}`}
							title={store.store_name}
							key={store.store_id}
						>
							Some Info
							{/* TODO: Add data specific to a region */}
						</InfoCard>
					))}
					<AddStoreCard regionId={regionId} />
				</div>
			</ScrollArea>
		</div>
	)
}

export default StoresPage
