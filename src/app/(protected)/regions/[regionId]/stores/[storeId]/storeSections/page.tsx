'use client'

import InfoCard from '@/components/info-card'
import TopBar from '@/components/top-bar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
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

	if (isPending) {
		return (
			<div className='h-full'>
				<TopBar title={'Regions'} />
				<div className='flex flex-wrap items-center justify-center h-full p-4 gap-4'>
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
					<Skeleton className='shadow-md w-64 min-h-72 p-2' />
				</div>
			</div>
		)
	}

	if (isError) {
		return (
			<div className='h-full'>
				<TopBar title={'Fetch Error'} />
				Something went wrong
			</div>
		)
	}
		

	return (
		<div className='h-full'>
			<TopBar title='Store Sections' />
			<ScrollArea className='h-full w-full px-12 py-6'>
				<div className='gap-x-4 gap-y-8 flex flex-wrap items-center justify-center h-full p-4'>
					{storeSections?.map((storeSection) => (
						<InfoCard
							link={`/regions/${regionId}/stores/${storeId}/storeSections/${storeSection.store_section_id}`}
							title={storeSection.store_section_name}
							key={storeSection.store_section_id}
						/>
					))}
					<AddStoreSectionCard storeId={storeId} />
				</div>
			</ScrollArea>
		</div>
	)
}

export default StoreSectionsPage
