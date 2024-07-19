import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchSingleStore = (storeId: string) =>
	useQuery({
		queryKey: ['store', { storeId }],
		queryFn: async () =>
			axios
				.get(`http://localhost:8000/stores/${storeId}`)
				.then((res) => res.data as IStore)
	})
