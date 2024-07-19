import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'

export const useCreateStore = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['create-store'],
		mutationFn: async (createStoreData: ICreateStore) =>
			axios
				.post(`http://localhost:8000/stores`, createStoreData)
				.then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['region_stores'] })
			toast.success('Store created successfully')
		},
		onError: () => toast.error('Failed to create store')
	})

	return mutation
}
