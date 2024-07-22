'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useUser } from '@auth0/nextjs-auth0/client'
import { AlertCircleIcon, Loader2Icon } from 'lucide-react'

type Props = {
	title: string
}

const TopBar = ({ title }: Props) => {
	const { user, isLoading, error } = useUser()

	if (isLoading) {
		return (
			<div className='flex items-center justify-between w-full h-16 p-2 border-b shadow-sm'>
				<p className='text-2xl uppercase'>{title}</p>
				<div>
					<Loader2Icon className='size-6 animate-spin' />
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='flex items-center justify-between w-full h-16 p-2 border-b shadow-sm'>
				<p className='text-2xl uppercase'>{title}</p>
				<div>
					<AlertCircleIcon className='size-6 text-rose-500' />
				</div>
			</div>
		)
	}

	if (!user) {
		return (
			<div className='flex items-center justify-between w-full h-16 p-2 border-b shadow-sm'>
				<p className='text-2xl uppercase'>{title}</p>
				<div>
					<a href='/api/auth/login'>
						<Button>Login</Button>
					</a>
				</div>
			</div>
		)
	}

	return (
		<div className='flex items-center justify-between w-full h-16 p-2 border-b shadow-sm'>
			<p className='text-2xl uppercase'>{title}</p>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar>
							<AvatarImage>{user.picture}</AvatarImage>
							<AvatarFallback>
								{user.name?.slice(0, 2)}
							</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<a href='/api/auth/logout'>
							<Button variant={'outline'} size={'lg'}>
								Logout
							</Button>
						</a>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}

export default TopBar
