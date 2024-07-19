'use client'

import TopBar from '@/components/top-bar'
import { useFetchSingleStoreSection } from '@/features/store-sections/api/use-fetch-single-store-section'
import { useFetchSingleStore } from '@/features/stores/api/use-fetch-single-store'
import { usePathname } from 'next/navigation'

type Props = {
	params: {
		storeSectionId: string
	}
}

const StoreSectionDetails = ({ params: { storeSectionId } }: Props) => {
	const pathname = usePathname()

	const storeId = pathname.split('/')[4]

	const {
		data: storeSection,
		isPending: isStoreSectionPending,
		isError: isStoreSectionError
	} = useFetchSingleStoreSection(storeSectionId)

	const {
		data: store,
		isPending: isStorePending,
		isError: isStoreError
	} = useFetchSingleStore(storeId)

	if (isStoreSectionPending || isStorePending) {
		return (
			<div className='h-full'>
				<TopBar title={''} />
				Loading...
			</div>
		)
	}

	if (isStoreSectionError || isStoreError) {
		return (
			<div className='h-full'>
				<TopBar title={''} />
				Error
			</div>
		)
	}

	return (
		<div className='h-full'>
			<TopBar
				title={`${store.store_name} ${storeSection.store_section_name}`}
			/>
		</div>
	)
}

export default StoreSectionDetails
