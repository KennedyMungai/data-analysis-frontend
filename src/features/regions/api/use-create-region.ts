import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'

type Props = {
	createRegionData: CreateRegion
}

export const useCreateRegion = ({ createRegionData }: Props) => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['create-region'],
		mutationFn: async () =>
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
