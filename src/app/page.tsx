import { cn } from '@/lib/utils'
import BackgroundVideo from 'next-video/background-video'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import bg_video from '/videos/bg_video.mp4'
import { Button } from '@/components/ui/button'

const font = Poppins({ subsets: ['latin'], weight: '600' })

const HomePage = () => {
	return (
		<main className='flex items-center justify-center w-full h-full text-white bg-transparent'>
			<BackgroundVideo src={bg_video}>
				<div className='bg-neutral-200/20 rounded-xl flex flex-col items-center justify-center px-32 py-16'>
					<div className='gap-x-8 flex items-center'>
						<Image
							src='/icon.svg'
							width={100}
							height={100}
							alt='Logo'
						/>
						<p className={cn('font-bold text-4xl', font.className)}>
							Data Analysis
						</p>
					</div>
					<Button
						variant={'outline'}
						size={'lg'}
						className='text-xl bg-transparent'
					>
						Get Started
					</Button>
				</div>
			</BackgroundVideo>
		</main>
	)
}

export default HomePage
