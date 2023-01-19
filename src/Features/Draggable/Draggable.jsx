import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'

function Draggable({ children }) {

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.COMPONENT },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  )
}


export default Draggable;