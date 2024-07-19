'use client'

import InfoCard from '@/components/info-card'
import TopBar from '@/components/top-bar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useFetchRegions } from '@/features/regions/api/use-fetch-regions'
import AddRegionCard from '@/features/regions/components/add-region-card'

const RegionsPage = () => {
	const { data, isPending, isError } = useFetchRegions()

	if (isError) {
		return (
			<div className='h-full'>
				<TopBar title={'Regions'} />
				<div className='flex flex-wrap items-center justify-center h-full p-4'>
					<p className='text-rose-500 text-4xl font-bold uppercase'>
						Something Went Wrong!
					</p>
				</div>
			</div>
		)
	}

	// TODO: Add the Skeletons for the isPending state
	if (isPending) {
		return (
			<div className='h-full'>
				<TopBar title={'Regions'} />
				<div className='flex flex-wrap items-center justify-center h-full p-4'>
					Loading...
				</div>
			</div>
		)
	}

	const regions: IRegion[] = data

	return (
		<div className='h-full'>
			<TopBar title={'Regions'} />
			<ScrollArea className='h-full w-full px-12 py-6'>
				<div className='w-full h-full flex flex-wrap items-center justify-center gap-4'>
					{regions.map((region) => (
						<InfoCard
							link={`/regions/${region.region_id}`}
							title={`${region.region_name}`}
							key={region.region_id}
						>
							<ul>
								{region.stores.map((store) => (
									<li key={store.store_id}>
										{store.store_name}
									</li>
								))}
							</ul>

							{/* TODO: Add data specific to a region */}
						</InfoCard>
					))}
					<AddRegionCard />
				</div>
			</ScrollArea>
		</div>
	)
}

export default RegionsPage
