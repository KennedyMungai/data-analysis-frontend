interface IRegion {
	region_name: string
	region_id: string
	created_at: string
	updated_at: string
	stores: Store[]
	incidents: Incident[]
}

interface IStore {
	store_name: string
	store_id: string
	created_at: string
	updated_at: string
	incidents: Incident[]
	store_sections: Storesection[]
}

interface IStoresection {
	store_section_name: string
	store_section_id: string
	created_at: string
	updated_at: string
	incidents: Incident[]
}

interface IIncident {
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

interface ICreateRegion {
	region_name: string
}

interface ICreateStore {
	store_name: string
	region_id: string
}

interface ICreateStoreSection {
	store_section_name: string
	store_id: string
}

interface ICreateIncident {
	incident_description: string
	product_name: string
	product_code: string
	product_quantity: number
	product_price: number
	region_id: string
	store_id: string
	store_section_id: string
	employee_id: string
	employee_name: string
	employee_email: string
}
