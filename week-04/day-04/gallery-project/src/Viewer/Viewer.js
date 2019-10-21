import React, {useState} from 'react'
import arrowUnclicked from '../images/arrow-unclicked.png'
import arrowClicked from '../images/arrow-clicked.png'
import './Viewer.css'

export default function Viewer(props) {
	const [arrowImgL, setArrowImgL] = useState(arrowUnclicked)
	const [arrowImgR, setArrowImgR] = useState(arrowUnclicked)
	return (
		<div className='Viewer'>
			<section
				onClick={() => {
					let index = (props.index - 1) % props.length
					props.onArrowClick(index === -1 ? props.length - 1 : index)
				}}
				className='Viewer-arrow'>
				<img
					alt=''
					onMouseLeave={() => setArrowImgL(arrowUnclicked)}
					onMouseEnter={() => setArrowImgL(arrowClicked)}
					src={arrowImgL}></img>
			</section>
			<section className='Viewer-image-content'>
				<img alt='' src={props.url}></img>
				<section className='Viewer-image-content-description'>
					<h1>{props.header}</h1>
					<p>{props.description}</p>
				</section>
			</section>
			<section
				onClick={() => props.onArrowClick((props.index + 1) % props.length)}
				className='Viewer-arrow right'>
				<img
					alt=''
					onMouseLeave={() => setArrowImgR(arrowUnclicked)}
					onMouseEnter={() => setArrowImgR(arrowClicked)}
					src={arrowImgR}></img>
			</section>
		</div>
	)
}
