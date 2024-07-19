import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'

export const useCreateStoreSection = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-store-section'],
		mutationFn: async (createStoreSectionData: ICreateStoreSection) =>
			await axios
				.post(
					`http://localhost:8000/store_sections`,
					createStoreSectionData
				)
				.then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['stores_store_sections']
			})
			toast.success('Store Section created successfully')
		},
		onError: () => toast.error('Failed to create store section')
	})
}
