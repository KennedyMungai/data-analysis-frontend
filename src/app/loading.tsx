import Image from 'next/image'

const NotFoundPage = () => {
	return (
		<div className='bg-neutral-200 flex items-center justify-center h-full'>
			<Image
				src={'/icon.svg'}
				width={100}
				height={100}
				alt='Logo'
				className='animate-spin'
			/>
		</div>
	)
}

export default NotFoundPage
