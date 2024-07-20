'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
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
import { ScrollArea } from '@/components/ui/scroll-area'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle
} from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import { useCreateIncident } from '@/features/incidents/api/use-create-incident'
import { useNewIncident } from '@/features/incidents/hooks/use-new-incident'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
	employeeId: string
	storeSectionId: string
	storeId: string
	regionId: string
}

const formSchema = z.object({
	incident_description: z.string().min(1, 'Incident Description is required'),
	product_name: z.string().min(1, 'Product Name is required'),
	product_code: z.string().min(1, 'Product Code is required'),
	product_price: z.number().min(1, 'Product Code is required'),
	region_id: z.string().min(1, 'Region is required'),
	employee_id: z.string().min(1, 'Employee is required'),
	store_id: z.string().min(1, 'Store is required'),
	store_section_id: z.string().min(1, 'Store Section is required')
})

const NewIncidentSheet = ({
	regionId,
	employeeId,
	storeId,
	storeSectionId
}: Props) => {
	const { isOpen, onClose } = useNewIncident()

	const { isPending, mutate } = useCreateIncident()

	const form = useForm<ICreateIncident>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			employee_id: employeeId,
			incident_description: '',
			product_code: '',
			product_name: '',
			product_price: 0,
			region_id: regionId,
			store_id: storeId,
			store_section_id: storeSectionId
		}
	})

	const handleSubmit = async (values: ICreateIncident) => {
		mutate(values, { onSuccess: () => onClose() })

		form.reset()
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='p-4'>
				<DialogHeader>
					<SheetTitle className='text-2xl text-center capitalize'>
						Create a New Incident
					</SheetTitle>
				</DialogHeader>
				<ScrollArea className='h-[70vh] px-2 py-4'>
					<div className='h-auto p-4'>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(handleSubmit)}>
								<FormField
									control={form.control}
									name='incident_description'
									render={({ field }) => {
										return (
											<FormItem>
												<FormLabel>
													Store Name
												</FormLabel>
												<FormControl>
													<Textarea
														placeholder='The incident description'
														{...field}
													/>
												</FormControl>
												<FormDescription>
													The details of an incident
												</FormDescription>
												<FormMessage />
											</FormItem>
										)
									}}
								/>
								<FormField
									control={form.control}
									name='product_name'
									render={({ field }) => {
										return (
											<FormItem>
												<FormLabel>
													Product Name
												</FormLabel>
												<FormControl>
													<Input
														placeholder='E.g. Pilferage, Shoplifting'
														{...field}
													/>
												</FormControl>
												<FormDescription>
													The name of the product
												</FormDescription>
												<FormMessage />
											</FormItem>
										)
									}}
								/>
								<FormField
									control={form.control}
									name='product_code'
									render={({ field }) => {
										return (
											<FormItem>
												<FormLabel>
													Product Code
												</FormLabel>
												<FormControl>
													<Input
														placeholder='The Product Code'
														{...field}
													/>
												</FormControl>
												<FormDescription>
													The code of the product
												</FormDescription>
												<FormMessage />
											</FormItem>
										)
									}}
								/>
								<FormField
									control={form.control}
									name='product_quantity'
									render={({ field }) => {
										return (
											<FormItem>
												<FormLabel>
													Product Quantity
												</FormLabel>
												<FormControl>
													<Input
														placeholder='The quantity of the product'
														type='number'
														{...field}
													/>
												</FormControl>
												<FormDescription>
													The quantity of the product
												</FormDescription>
												<FormMessage />
											</FormItem>
										)
									}}
								/>
								<FormField
									control={form.control}
									name='product_price'
									render={({ field }) => {
										return (
											<FormItem>
												<FormLabel>
													Product Price
												</FormLabel>
												<FormControl>
													<Input
														placeholder='The Price of the product'
														type='number'
														{...field}
													/>
												</FormControl>
												<FormDescription>
													The price of the product
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
								<FormField
									control={form.control}
									name='store_id'
									render={({ field }) => {
										return (
											<FormItem>
												<FormLabel>Store ID</FormLabel>
												<FormControl>
													<Input
														disabled
														{...field}
													/>
												</FormControl>
												<FormDescription>
													The ID of the store
												</FormDescription>
												<FormMessage />
											</FormItem>
										)
									}}
								/>
								<FormField
									control={form.control}
									name='store_section_id'
									render={({ field }) => {
										return (
											<FormItem>
												<FormLabel>
													Store Section ID
												</FormLabel>
												<FormControl>
													<Input
														disabled
														{...field}
													/>
												</FormControl>
												<FormDescription>
													The ID of the Store Section
												</FormDescription>
												<FormMessage />
											</FormItem>
										)
									}}
								/>
								<FormField
									control={form.control}
									name='employee_id'
									render={({ field }) => {
										return (
											<FormItem>
												<FormLabel>
													Employee ID
												</FormLabel>
												<FormControl>
													<Input
														disabled
														{...field}
													/>
												</FormControl>
												<FormDescription>
													The ID of the Employee
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
				</ScrollArea>
			</DialogContent>
		</Dialog>
	)
}

export default NewIncidentSheet
