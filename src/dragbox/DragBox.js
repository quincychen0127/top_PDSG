import React from "react"
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'


export const DragBox = ({ name, f }) => {
	const [{ isDragging }, drag] = useDrag({
		item: { name,f, type: ItemTypes.DragBox},
		end : (item, monitor) => {
			const dropResult = monitor.getDropResult()
			if (item && dropResult) {
				if (item.f == "false") {
					alert(`${item.name} does not belong to ${dropResult.name}!`)
				} else {
					alert(`You dropped ${item.name} into ${dropResult.name}!Bingo!`)
				}
			}	
		},
		collect: (monitor) => ({
				isDragging: monitor.isDragging(),
		}),
	})
	return (
		<div 
			className = "DragBox"
			ref = {drag}
			style ={{
				opacity: isDragging ? 0.5 : 1,
				fontSize: 25,
				fontWeight: 'bold',
				cursor:'move',
				color: isDragging ? 'blue' : 'black' 
			}}
		>
      		<p> {name} </p>
      	</div>
	)
}


