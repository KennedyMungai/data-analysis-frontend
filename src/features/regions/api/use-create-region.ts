import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'

export const useCreateRegion = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['create-region'],
		mutationFn: async (createRegionData: ICreateRegion) =>
			axios
				.post('http://localhost:8000/regions', createRegionData)
				.then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['regions'] })
			toast.success('Region Created!')
		},
		onError: () => toast.error('Failed to Create Region!')
	})

	return mutation
}
