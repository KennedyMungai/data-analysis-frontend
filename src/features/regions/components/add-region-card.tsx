'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { useCreateRegion } from '@/features/regions/api/use-create-region'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useNewRegion } from '@/features/regions/hooks/use-new-region'

const formSchema = z.object({
	region_name: z.string().min(1, 'Region Name is required')
})

const AddRegionCard = () => {
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

export default AddRegionCard
