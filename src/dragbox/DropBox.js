import React from "react"
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

import './DropBox.css'

export const DropBox = () => {
	const [{ canDrop, isOver}, drop] = useDrop({
		accept:ItemTypes.DragBox,
		drop: () => ({ name: 'DropBox'}),
		collect: (monitor) => ({
			isOver:monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	})
	const isActive = canDrop && isOver
	let backgroundColor = '#fffff0'
	if (isActive) {
		backgroundColor = '#61a37c'
	} else if (canDrop) {
		backgroundColor = 'yellow'
	}
	return (
		<div 
			className = "DropBox"
			ref = {drop}
			style = {{backgroundColor}}
		>
      		{isActive ? 'Release to drop' : 'Drag a box here'}
      	</div>
	)
}