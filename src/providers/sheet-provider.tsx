'use client'

import NewRegionSheet from '@/features/regions/components/new-region-sheet'
import NewStoreSectionSheet from '@/features/store-sections/components/new-store-section-sheet'
import NewStoreSheet from '@/features/stores/components/new-store-sheet'
import { useMountedState } from 'react-use'

const SheetProvider = () => {
	const isMounted = useMountedState()

	if (!isMounted) return null

	return (
		<>
			<NewRegionSheet />
			<NewStoreSheet />
			<NewStoreSectionSheet />
		</>
	)
}

export default SheetProvider
