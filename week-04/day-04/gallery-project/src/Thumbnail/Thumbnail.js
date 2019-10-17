import './Thumbnail.css'
import React from 'react'

export default function Thumbnail(props) {
	return (
		<div
			onClick={() => props.onArrowClick(props.index)}
			className={props.picked ? 'thumbnail thumbnail-picked' : 'thumbnail'}>
			<img alt='' title={props.header} src={props.url}></img>
			<span className={props.picked ? 'picked' : ''}></span>
		</div>
	)
}
