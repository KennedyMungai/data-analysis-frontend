type Props = {
	title: string
}

const TopBar = ({ title }: Props) => {
	return (
		<div className='flex items-center justify-between w-full h-16 p-2 border-b shadow-sm'>
			<p className='text-2xl uppercase'>{title}</p>
			{/* TODO: Add user auth shenanigans */}
			<p>{new Date().toLocaleDateString()}</p>
		</div>
	)
}

export default TopBar
