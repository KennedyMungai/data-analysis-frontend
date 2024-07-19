'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useNewStoreSection } from '@/features/store-sections/hooks/use-new-store-section'
import { Plus } from 'lucide-react'
import { useEffectOnce } from 'react-use'

type Props = {
	storeId: string
}

const AddStoreSectionCard = ({ storeId }: Props) => {
	const { onOpen, setStoreId } = useNewStoreSection()

	useEffectOnce(() => setStoreId(storeId))

	return (
		<Card className='h-72 w-64 shadow-md' onClick={onOpen}>
			<CardContent className='flex items-center justify-center w-full h-full'>
				<Plus className='size-24' />
			</CardContent>
		</Card>
	)
}

export default AddStoreSectionCard
