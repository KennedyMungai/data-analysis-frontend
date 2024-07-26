import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchStoresStoreSections = (storeId: string) =>
	useQuery({
		queryKey: ['stores_store_sections', { storeId }],
		queryFn: async () =>
			await axios
				.get(`http://localhost:8000/store_sections/store/${storeId}`)
				.then((res) => res.data as IStoresection[])
	})
