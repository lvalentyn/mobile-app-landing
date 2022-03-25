import { images } from "../../constants"

const DownloadAds = () => {

	const downloadImageStyle = "border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"

	return (
		<div className="download">
			<div className="download_images flex">
				<a className={`${downloadImageStyle} mr-[2rem]`} href="#">
					<img src={images.appStore} alt="appStore" />
				</a>
				<a className={downloadImageStyle} href="#">
					<img src={images.googlePlay} alt="googlePlay" />
				</a>
			</div>
		</div>
	)
}

export default DownloadAds