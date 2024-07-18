interface Region {
	region_name: string
	region_id: string
	created_at: string
	updated_at: string
	stores: Store[]
	employees: Employee[]
	incidents: Incident[]
}

interface Store {
	store_name: string
	store_id: string
	created_at: string
	updated_at: string
	employees: Employee[]
	incidents: Incident[]
	store_sections: StoreSection[]
}

interface StoreSection {
	store_section_name: string
	store_section_id: string
	created_at: string
	updated_at: string
	incidents: Incident[]
}

interface Employee {
	employee_name: string
	employee_email: string
	employee_phone_number: string
	employee_id: string
	created_at: string
	updated_at: string
	incidents: Incident[]
}

interface Incident {
	incident_description: string
	product_name: string
	product_code: string
	product_quantity: number
	product_price: number
	incident_id: string
	region_id: string
	store_id: string
	store_section_id: string
	employee_id: string
	created_at: string
	updated_at: string
}

interface CreateRegion {
	region_name: string
}