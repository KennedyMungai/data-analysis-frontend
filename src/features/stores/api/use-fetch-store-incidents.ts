import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchStoreIncidents = (storeId: string) =>
	useQuery({
		queryKey: ['store_section_incidents', { storeId }],
		queryFn: async () =>
			await axios
				.get(`http://127.0.0.1:8000/incidents/store/${storeId}`)
				.then((res) => res.data as IIncident[])
	})
