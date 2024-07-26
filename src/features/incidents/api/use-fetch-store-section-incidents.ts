import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchStoreSectionIncidents = (storeSectionId: string) =>
	useQuery({
		queryKey: ['incidents', { storeSectionId }],
		queryFn: async () =>
			await axios
				.get(
					`http://127.0.0.1:8000/incidents/store_section/${storeSectionId}`
				)
				.then((res) => res.data as IIncident[])
	})
