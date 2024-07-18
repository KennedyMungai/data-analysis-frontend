'use client'

import InfoCard from '@/components/info-card'
import TopBar from '@/components/top-bar'
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
			<div className='gap-x-4 gap-y-8 flex flex-wrap items-center justify-center h-full p-4'>
				{regions.map((region) => (
					<InfoCard
						link={`/regions/${region.region_id}`}
						title={`${region.region_name}`}
						key={region.region_id}
					>
						Some Info
						{/* TODO: Add data specific to a region */}
					</InfoCard>
				))}
				<AddRegionCard />
			</div>
		</div>
	)
}

export default RegionsPage
