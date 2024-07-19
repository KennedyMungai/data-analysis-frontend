'use client'

import NewRegionSheet from '@/features/regions/components/new-region-sheet'
import NewStoreSheet from '@/features/stores/components/new-store-sheet'
import { useMountedState } from 'react-use'

const SheetProvider = () => {
	const isMounted = useMountedState()

	if (!isMounted) return null

	return (
		<>
			<NewRegionSheet />
			<NewStoreSheet />
		</>
	)
}

export default SheetProvider
