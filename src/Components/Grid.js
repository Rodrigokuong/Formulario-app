import React from 'react'
import Item from './Item';

const Grid = ({ productos, setProductos }) => {

    return (
    <>
             {
                productos.map( q => 
                    
                        <Item 
                            {...q}
                            key={ q.id }
                            productos = { productos }
                            setProductos = { setProductos }
                        />
                     )
            } 
    </>
  )
}

export default Grid