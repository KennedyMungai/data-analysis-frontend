import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'

export const useCreateIncident = () =>
	useMutation({
		mutationKey: ['create-incident'],
		mutationFn: async (incidentData: ICreateIncident) =>
			axios
				.post('http://localhost:8000/incidents', incidentData)
				.then((res) => res.data as IIncident),
		onSuccess: () => toast.success('Incident Created!'),
		onError: () => toast.error('Failed to Create Incident!')
	})
