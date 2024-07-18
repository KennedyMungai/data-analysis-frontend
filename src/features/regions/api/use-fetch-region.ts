import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchRegion = (regionId: string) =>
	useQuery({
		queryKey: ['region', { regionId }],
		queryFn: async () =>
			axios.get(`http://localhost:8000/regions/${regionId}`)
	})
