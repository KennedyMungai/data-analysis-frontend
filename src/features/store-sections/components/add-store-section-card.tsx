'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { useCreateStoreSection } from '@/features/store-sections/api/use-create-store-section'
import { useNewStoreSection } from '@/features/store-sections/hooks/use-new-store-section'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { Form, useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
	storeId: string
}

const formSchema = z.object({
	store_section_name: z.string().min(1, 'Store Section Name is required'),
	store_id: z.string().min(1, 'Store is required')
})

const AddStoreSectionCard = ({ storeId }: Props) => {
	const { isOpen, onClose } = useNewStoreSection()

	const { isPending, mutate } = useCreateStoreSection()

	const form = useForm<ICreateStoreSection>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			store_section_name: '',
			store_id: ''
		}
	})

	const handleSubmit = async (values: ICreateStoreSection) =>
		mutate(values, { onSuccess: () => onClose() })

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetTrigger asChild>
				<Card className='h-72 w-64 shadow-md'>
					<CardContent className='flex items-center justify-center w-full h-full'>
						<Plus className='size-24' />
					</CardContent>
				</Card>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className='text-2xl text-center capitalize'>
						Create a New Region
					</SheetTitle>
				</SheetHeader>
				<div className='h-auto'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleSubmit)}>
							<FormField
								control={form.control}
								name='store_section_name'
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel>Store Name</FormLabel>
											<FormControl>
												<Input
													placeholder='E.g. Kanyenya-ini, Kwa Njenga'
													{...field}
												/>
											</FormControl>
											<FormDescription>
												The name of a new store
											</FormDescription>
											<FormMessage />
										</FormItem>
									)
								}}
							/>
							<FormField
								control={form.control}
								name='store_id'
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel>Region ID</FormLabel>
											<FormControl>
												<Input
													placeholder='E.g. Kanyenya-ini, Kwa Njenga'
													disabled
													{...field}
												/>
											</FormControl>
											<FormDescription>
												The ID of the region
											</FormDescription>
											<FormMessage />
										</FormItem>
									)
								}}
							/>
							<Button type='submit' disabled={isPending}>
								Save Changes
							</Button>
						</form>
					</Form>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default AddStoreSectionCard
