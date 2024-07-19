import { create } from 'zustand'

type Props = {
	isOpen: boolean
	storeId: string
	setStoreId: (id: string) => void
	onOpen: () => void
	onClose: () => void
}

export const useNewStoreSection = create<Props>((set) => ({
	isOpen: false,
	storeId: '',
	setStoreId: (id) => set({ storeId: id }),
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}))
