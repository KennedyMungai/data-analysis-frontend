'use client'

import InfoCard from '@/components/info-card'
import TopBar from '@/components/top-bar'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
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

	const regions: IRegion[] = data

	return (
		<div className='h-full'>
			<TopBar title={'Regions'} />
			<ScrollArea className='h-full w-full px-12 py-6'>
				<div className='w-full h-full flex flex-wrap items-center justify-center gap-4'>
					{regions.map((region) => (
						<InfoCard
							link={`/overall/regions/${region.region_id}`}
							title={`${region.region_name}`}
							key={region.region_id}
						>
							<Accordion type='single' collapsible>
								<AccordionItem value='stores'>
									<AccordionTrigger>Stores</AccordionTrigger>
									<AccordionContent>
										<ul className='text-start text-md'>
											{region.stores?.map((store) => (
												<li key={store.store_id}>
													{store.store_name}
												</li>
											))}
										</ul>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='employees'>
									<AccordionTrigger>
										Employees
									</AccordionTrigger>
									<AccordionContent>
										<ul className='text-start text-md'>
											{region.employees.map(
												(employee) => (
													<li
														key={
															employee.employee_id
														}
													>
														{employee.employee_name}
													</li>
												)
											)}
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</InfoCard>
					))}
					<AddRegionCard />
				</div>
			</ScrollArea>
		</div>
	)
}

export default RegionsPage
