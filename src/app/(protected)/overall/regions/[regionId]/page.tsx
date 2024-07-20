'use client'

import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import { useFetchRegion } from '@/features/regions/api/use-fetch-region'
import Link from 'next/link'

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
				<TopBar title={''} />
				Loading...
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
				<div className='flex justify-around pb-2'>
					<div>
						{/* TODO: Add a calendar for specifying the time frame of the data being analyzed */}
					</div>
					<div>
						<Link
							href={`/overall/regions/${region.region_id}/stores`}
						>
							<Button
								size={'lg'}
								variant={'outline'}
								className='text-lg bg-transparent'
							>
								Stores
							</Button>
						</Link>
					</div>
					<div />
				</div>
				<div className='flex justify-between gap-x-2'>
					<SummaryCard label='Total Amount' amount={0} />
					<SummaryCard label='Total Number of Incidents' amount={0} />
					<SummaryCard label='Total ' amount={0} />
				</div>
				{/* TODO: Add the charts and tables for analysis */}
			</div>
		</div>
	)
}

export default IndividualRegionPage
