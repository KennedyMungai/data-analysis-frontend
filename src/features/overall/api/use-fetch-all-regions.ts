import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchAllRegions = () =>
	useQuery({
		queryKey: ['all_regions'],
		queryFn: async () =>
			axios
				.get('http://locahost:3000/api/regions')
				.then((res) => res.data as IRegion[])
	})
