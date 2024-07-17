import SideBar from '@/components/sidebar'
import TopBar from '@/components/top-bar'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ProtectedLayout = ({ children }: Props) => {
	return (
		<div className='flex w-full h-full'>
			<div className='w-32 h-full'>
				<SideBar />
			</div>
			<main className='w-full h-full'>
				<TopBar />
				{children}
			</main>
		</div>
	)
}

export default ProtectedLayout
