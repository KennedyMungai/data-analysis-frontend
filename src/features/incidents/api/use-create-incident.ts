import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useCreateIncident = (incidentData: ICreateIncident) =>
	useMutation({
		mutationKey: ['create-incident'],
		mutationFn: async () =>
			axios
				.post('http://localhost:8000/incidents', incidentData)
				.then((res) => res.data as IIncident)
	})
