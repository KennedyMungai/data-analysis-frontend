import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchAllRegions = () =>
	useQuery({
		queryKey: ['all_regions'],
		queryFn: async () =>
			axios
				.get('http://127.0.0.1:8000/regions/')
				.then((res) => res.data as IRegion[])
	})
