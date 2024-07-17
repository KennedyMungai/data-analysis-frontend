import TopBar from '@/components/top-bar'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ProtectedLayout = ({ children }: Props) => {
	return (
		<main className='h-full'>
			<TopBar />
			{children}
		</main>
	)
}

export default ProtectedLayout
