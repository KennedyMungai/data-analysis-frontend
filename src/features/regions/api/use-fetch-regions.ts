import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFetchRegions = () =>
	useQuery({
		queryKey: ['regions'],
		queryFn: async () =>
			await axios
				.get('https://data-analysis-backend-8qe3.onrender.com/regions')
				.then((res) => res.data)
	})
