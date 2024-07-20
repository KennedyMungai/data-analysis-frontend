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
import { useFetchRegion } from '@/features/regions/api/use-fetch-region'
import { useFetchRegionStores } from '@/features/stores/api/use-fetch-region-stores'
import AddStoreCard from '@/features/stores/components/add-store-card'
import { usePathname } from 'next/navigation'

const StoresPage = () => {
	const pathname = usePathname()

	const regionId = pathname.split('/')[2]

	const regionQuery = useFetchRegion(regionId)

	const regionStoresQuery = useFetchRegionStores(regionId)

	if (regionQuery.isPending || regionStoresQuery.isPending) {
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

	if (regionQuery.isError || regionStoresQuery.isError)
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
							link={`/overall/regions/${regionId}/stores/${store.store_id}`}
							title={store.store_name}
							key={store.store_id}
						>
							<Accordion type='single' collapsible>
								<AccordionItem value='storeSections'>
									<AccordionTrigger>
										Store Sections
									</AccordionTrigger>
									<AccordionContent>
										<ul className='text-start text-md'>
											{store.store_sections?.map(
												(storeSection) => (
													<li
														key={
															storeSection.store_section_id
														}
													>
														{
															storeSection.store_section_name
														}
													</li>
												)
											)}
										</ul>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='employees'>
									<AccordionTrigger>
										Employees
									</AccordionTrigger>
									<AccordionContent>
										<ul className='text-start text-md'>
											{store.employees?.map(
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
					<AddStoreCard regionId={regionId} />
				</div>
			</ScrollArea>
		</div>
	)
}

export default StoresPage
