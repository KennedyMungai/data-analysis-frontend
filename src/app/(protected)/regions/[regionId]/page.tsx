'use client'

import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { useFetchRegion } from '@/features/regions/api/use-fetch-region'

type Props = {
	params: {
		regionId: string
	}
}

const IndividualRegionPage = ({ params: { regionId } }: Props) => {
	const { data: region, isPending, isError } = useFetchRegion(regionId)

	if (isPending) {
		return (
			<div className='h-full'>
				<TopBar title={regionId} />
				{regionId}
			</div>
		)
	}

	if (isError) {
		return (
			<div className='h-full'>
				<TopBar title={regionId} />
				<p className='text-rose-500 text-4xl font-bold'>
					Something Went Wrong!!!
				</p>
			</div>
		)
	}

	return (
		<div className='h-full'>
			<TopBar title={region.region_name} />
			<div className='h-full p-4'>
				<div className='flex justify-between'>
					<SummaryCard label='Total Amount' amount={0} />
					<SummaryCard label='Total Number of Incidents' amount={0} />
					<SummaryCard label='Total ' amount={0} />
				</div>
			</div>
		</div>
	)
}

export default IndividualRegionPage
