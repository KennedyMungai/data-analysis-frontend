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
import { useCreateStore } from '@/features/stores/api/use-create-store'
import { useNewStore } from '@/features/stores/hooks/use-new-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { Form, useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
	regionId: string
}

const formSchema = z.object({
	store_name: z.string().min(1, 'Store Name is required'),
	region_id: z.string().min(1, 'Region is required')
})

const AddStoreCard = ({ regionId }: Props) => {
	const { isOpen, onClose } = useNewStore()

	const { isPending, mutate } = useCreateStore()

	const form = useForm<ICreateStore>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			store_name: '',
			region_id: regionId
		}
	})

	const handleSubmit = async (values: ICreateStore) =>
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
								name='store_name'
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
								name='region_id'
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

export default AddStoreCard
