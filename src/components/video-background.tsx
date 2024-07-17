import Video from 'next-video'
import bg_video from '/videos/bg_video.mp4'

const VideoBackground = async () => {
	return (
		<Video
			src={bg_video}
			autoPlay
			audio={false}
			loop={true}
			className='-z-10 absolute blur-lg bg-neutral-600 w-full'
		/>
	)
}

export default VideoBackground
