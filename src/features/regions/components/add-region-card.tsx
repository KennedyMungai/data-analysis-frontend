'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import { useNewRegion } from '../hooks/use-new-region'

const AddRegionCard = () => {
	const { isOpen, onClose, onOpen } = useNewRegion()

	return (
		<Card className='h-72 w-64 shadow-md' onClick={onOpen}>
			<CardContent className='flex items-center justify-center w-full h-full'>
				<Plus className='size-24' />
			</CardContent>
		</Card>
	)
}

export default AddRegionCard
