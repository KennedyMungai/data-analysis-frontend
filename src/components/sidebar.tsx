'use client'

import { ModeToggle } from '@/components/mode-toggle'
import Image from 'next/image'
import Link from 'next/link'

const SideBar = () => {
	return (
		<nav className='fixed flex flex-col items-center justify-between h-full px-4 py-8 border-r shadow-sm'>
			<div className='flex flex-col items-center h-full'>
				<Link href={'/overall'}>
					<Image
						src={'/icon.svg'}
						width={60}
						height={60}
						alt='Icon'
						className='dark:bg-neutral-100 self-center p-2 rounded-md'
					/>
				</Link>
			</div>
			<div>{/* TODO: Add the navigation icons */}</div>
			<div className='flex items-center justify-center'>
				<ModeToggle />
			</div>
		</nav>
	)
}

export default SideBar
