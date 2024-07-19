import { Button } from '@/components/ui/button'
import {
	Form,
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
	SheetTitle
} from '@/components/ui/sheet'
import { useCreateStoreSection } from '@/features/store-sections/api/use-create-store-section'
import { useNewStoreSection } from '@/features/store-sections/hooks/use-new-store-section'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	store_section_name: z.string().min(1, 'Store Section Name is required'),
	store_id: z.string().min(1, 'Store is required')
})

const NewStoreSectionSheet = () => {
	const { isOpen, onClose, storeId } = useNewStoreSection()

	const { isPending, mutate } = useCreateStoreSection()

	const form = useForm<ICreateStoreSection>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			store_section_name: '',
			store_id: storeId
		}
	})

	const handleSubmit = async (values: ICreateStoreSection) =>
		mutate(values, { onSuccess: () => onClose() })

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className='text-2xl text-center capitalize'>
						Create a New Store Section
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
											<FormLabel>
												Store Section Name
											</FormLabel>
											<FormControl>
												<Input
													placeholder='E.g. Kanyenya-ini, Kwa Njenga'
													{...field}
												/>
											</FormControl>
											<FormDescription>
												The name of a new store section
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
											<FormLabel>Store ID</FormLabel>
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

export default NewStoreSectionSheet
