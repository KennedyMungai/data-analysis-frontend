import SideBar from '@/components/sidebar'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ProtectedLayout = ({ children }: Props) => {
	return (
		<div className='flex w-full h-full'>
			<div className='w-32 h-full flex justify-center'>
				<SideBar />
			</div>
			<main className='w-full h-full'>{children}</main>
		</div>
	)
}

export default ProtectedLayout
