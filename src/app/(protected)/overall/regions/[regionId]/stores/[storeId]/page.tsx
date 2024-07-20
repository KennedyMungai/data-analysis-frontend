'use client'

import DateFilter from '@/components/date-filter'
import SummaryCard from '@/components/summary-card'
import TopBar from '@/components/top-bar'
import { Button } from '@/components/ui/button'
import { subDays } from 'date-fns'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

type Props = {
	params: {
		storeId: string
	}
}

const IndividualStorePage = ({ params: { storeId } }: Props) => {
	const pathname = usePathname()

	const regionId = pathname.split('/')[3]

	const initialRange: DateRange = {
		from: subDays(new Date(), 7),
		to: new Date()
	}

	const [range, setRange] = useState<DateRange | undefined>(initialRange)

	return (
		<div className='h-full p-2'>
			<TopBar title='Some Store' />
			<div className='h-full p-4'>
				<div className='flex justify-around pb-2'>
					<div>
						<DateFilter range={range} setRange={setRange} />
					</div>
					<div>
						<Link
							href={`/overall/regions/${regionId}/stores/${storeId}/storeSections`}
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

export default IndividualStorePage
