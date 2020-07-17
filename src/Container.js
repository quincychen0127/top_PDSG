import React, { memo } from 'react'
import { DropBox } from './DropBox'
import { DragBox } from './DragBox'
import "./style.css"

export const Container = memo(function Container() {
  return (
    <main>
          <h2 className = "Question"> Identify the Microplastic</h2>
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
          <DropBox   />
    </main>
  )
})