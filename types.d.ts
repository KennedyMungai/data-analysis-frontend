interface IRegion {
	region_name: string
	region_id: string
	created_at: string
	updated_at: string
	stores: IStore[]
	employees: IEmployee[]
	incidents: IIncident[]
}

interface IStore {
	store_name: string
	store_id: string
	created_at: string
	updated_at: string
	employees: IEmployee[]
	incidents: IIncident[]
	store_sections: IStoreSection[]
}

interface IStoreSection {
	store_section_name: string
	store_section_id: string
	created_at: string
	updated_at: string
	incidents: IIncident[]
}

interface IEmployee {
	employee_name: string
	employee_email: string
	employee_phone_number: string
	employee_id: string
	created_at: string
	updated_at: string
	incidents: IIncident[]
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