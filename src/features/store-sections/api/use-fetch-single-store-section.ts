import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchSingleStoreSection = (storeSectionId: string) =>
	useQuery({
		queryKey: ['store-section', { storeSectionId }],
		queryFn: async () =>
			axios
				.get(`http://localhost:8000/store_sections/${storeSectionId}`)
				.then((res) => res.data as IStoresection)
	})
