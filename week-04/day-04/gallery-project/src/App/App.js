import React, {useState, useEffect, useRef} from 'react'
import imageList from '../imageList.js'
import './App.css'
import Viewer from '../Viewer/Viewer.js'
import Thumbnail from '../Thumbnail/Thumbnail.js'

function App() {
	console.log(111)

	const [imgList, setImgList] = useState(imageList)
	const [imgIndex, setimgIndex] = useState(0)
	let lastestIndex = useRef(imgIndex)

	lastestIndex.current = imgIndex

	useEffect(() => {
		document.documentElement.addEventListener('keydown', handleKeyDown)
	}, [])

	const handleKeyDown = event => {
		if (event.keyCode === 37) {
			let index = (lastestIndex.current - 1) % imageList.length

			setimgIndex(index === -1 ? imgList.length - 1 : index)
		} else if (event.keyCode === 39) {
			setimgIndex((lastestIndex.current + 1) % imageList.length)
		}
	}

	const onArrowClick = index => {
		setimgIndex(index)
	}

	return (
		<div className='App'>
			<div className='container'>
				<Viewer
					length={imageList.length}
					index={imgIndex}
					onArrowClick={onArrowClick}
					header={imgList[imgIndex].header}
					description={imgList[imgIndex].description}
					url={imgList[imgIndex].url}></Viewer>

				<section className='thumbnail-list'>
					{imgList.map((img, index) => {
						return (
							<Thumbnail
								index={index}
								onArrowClick={onArrowClick}
								picked={index === imgIndex}
								key={index}
								header={img.header}
								url={img.url}></Thumbnail>
						)
					})}
				</section>
			</div>
		</div>
	)
}

export default App
