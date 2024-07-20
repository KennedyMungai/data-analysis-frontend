import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFoundPage = () => {
	return (
		<div className='gap-y-4 bg-neutral-100 dark:bg-neutral-800 dark:text-white flex flex-col items-center justify-center h-full'>
			<p className='text-4xl'>404 - Page Not Found</p>
			<Link href={'/overall'}>
				<Button
					variant={'outline'}
					size={'lg'}
					className='bg-transparent'
				>
					Go Back
				</Button>
			</Link>
		</div>
	)
}

export default NotFoundPage
