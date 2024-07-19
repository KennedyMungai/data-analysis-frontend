import { create } from 'zustand'

type Props = {
	isOpen: boolean
	regionId: string
	setRegionId: (id: string) => void
	onOpen: () => void
	onClose: () => void
}

export const useNewStore = create<Props>((set) => ({
	isOpen: false,
	regionId: '',
	setRegionId: (id) => set({ regionId: id }),
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}))
