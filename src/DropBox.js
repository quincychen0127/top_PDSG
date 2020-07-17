import React from "react"
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

const style = {
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '20px',
  lineHeight: 'normal',
  float: 'center',
  border: '15px solid green',
  padding: '50px',
  margin: '20px',
}

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
			style = {{...style, backgroundColor}}
		>
      		{isActive ? 'Release to drop' : 'Drag a box here'}
      	</div>
	)
}