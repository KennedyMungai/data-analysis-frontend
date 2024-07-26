'use client'

import { ColumnDef } from '@tanstack/react-table'

export type IncidentColumns = {
	employee_name: string
	incident_description: string
	product_name: string
}

export const columns: ColumnDef<IncidentColumns>[] = [
	{
		accessorKey: 'employee_name',
		header: 'Employee Name'
	},
	{
		accessorKey: 'incident_description',
		header: 'Description'
	},
	{
		accessorKey: 'product_name',
		header: 'Product Name'
	}
]
