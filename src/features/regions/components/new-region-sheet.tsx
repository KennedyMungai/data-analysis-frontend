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
import { useCreateRegion } from '@/features/regions/api/use-create-region'
import { useNewRegion } from '@/features/regions/hooks/use-new-region'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	region_name: z.string().min(1, 'Region Name is required')
})

const NewRegionSheet = () => {
	const { mutate, isPending, isSuccess } = useCreateRegion()

	const { isOpen, onClose } = useNewRegion()

	const form = useForm<ICreateRegion>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			region_name: ''
		}
	})

	const handleSubmit = async (values: ICreateRegion) => {
		mutate(values, { onSuccess: () => onClose() })
	}

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
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
								name='region_name'
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel>Region Name</FormLabel>
											<FormControl>
												<Input
													placeholder='E.g. North Eastern, Turkana'
													{...field}
												/>
											</FormControl>
											<FormDescription>
												The name of a new region
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

export default NewRegionSheet
