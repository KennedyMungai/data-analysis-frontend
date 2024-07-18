'use client'

import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	params: {
		storeId: string
	}
}

const IndividualStorePage = ({ params: { storeId } }: Props) => {
	const pathname = usePathname()

	const regionId = pathname.split('/')[2]

	return (
		<div>
			<TopBar title='Some Store' />
			<div className='h-full p-4'>
				<div className='flex justify-around pb-2'>
					<div>
						{/* TODO: Add a calendar for specifying the time frame of the data being analyzed */}
					</div>
					<div>
						<Link
							href={`/regions/${regionId}/stores/${storeId}/storeSections`}
						>
							<Button
								size={'lg'}
								variant={'outline'}
								className='text-lg bg-transparent'
							>
								Stores Sections
							</Button>
						</Link>
					</div>
					<div />
				</div>
				<div className='flex justify-between'>
					<SummaryCard label='Total Amount' amount={0} />
					<SummaryCard label='Total Number of Incidents' amount={0} />
					<SummaryCard label='Total ' amount={0} />
				</div>
				{/* TODO: Add the charts and tables for analysis */}
			</div>
		</div>
	)
}

export default IndividualStorePage
