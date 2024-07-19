'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useNewStore } from '@/features/stores/hooks/use-new-store'
import { Plus } from 'lucide-react'
import { z } from 'zod'

type Props = {
	regionId: string
}

const AddStoreCard = ({ regionId }: Props) => {
	const { isOpen, onClose, onOpen } = useNewStore()

	return (
		<Card className='h-72 w-64 shadow-md' onClick={onOpen}>
			<CardContent className='flex items-center justify-center w-full h-full'>
				<Plus className='size-24' />
			</CardContent>
		</Card>
	)
}

export default AddStoreCard
