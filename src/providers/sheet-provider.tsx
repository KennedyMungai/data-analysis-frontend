'use client'

import NewRegionSheet from '@/features/regions/components/new-region-sheet'
import { useMountedState } from 'react-use'

const SheetProvider = () => {
	const isMounted = useMountedState()

	if (!isMounted) return null

	return (
		<>
			<NewRegionSheet />
		</>
	)
}

export default SheetProvider
