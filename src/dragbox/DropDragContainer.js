import React, { memo } from 'react'
import { DropBox } from './DropBox'
import { DragBox } from './DragBox'
import "./DropDragContainer.css"

const Container = memo(function Container() {
  return (
    <div>
          <h2 className = "Question"> Sources of Micro-plastics</h2>
          <div className = "ChoiceBox">
          	<DragBox 
            	name = "Bottles"
            	f = "true"
          	/>
          	<DragBox 
            	name = "Leggings"
            	f = "true"
          	/>
          	<DragBox 
            	name = "Tennis Balls"
            	f = "false"
          	/>
          	<DragBox 
            	name = "Bags"
            	f = "false"
          	/>
          	<DragBox 
            	name = "Fishing Net"
            	f = "false"
          	/>
          </div>
          <DropBox/>
    </div>
  )
})

export default Container
