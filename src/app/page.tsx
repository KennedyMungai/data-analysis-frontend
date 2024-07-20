import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import BackgroundVideo from 'next-video/background-video'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import bg_video from '/videos/bg_video.mp4'

const font = Poppins({ subsets: ['latin'], weight: '600' })

const HomePage = () => {
	return (
		<main className='flex items-center justify-center w-full h-full text-white bg-transparent'>
			<BackgroundVideo src={bg_video} loop autoPlay>
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
					<Link href='/overall'>
						<Button
							variant={'outline'}
							size={'lg'}
							className='text-xl bg-transparent'
						>
							Get Started
						</Button>
					</Link>
				</div>
			</BackgroundVideo>
		</main>
	)
}

export default HomePage
