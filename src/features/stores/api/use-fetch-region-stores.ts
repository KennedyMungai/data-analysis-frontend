import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchRegionStores = (regionId: string) =>
	useQuery({
		queryKey: ['region_stores'],
		queryFn: async () =>
			axios
				.get(`http://127.0.0.1:8000/stores/region/${regionId}`)
				.then((res) => res.data as IStore[]),
		enabled: !!regionId
	})
