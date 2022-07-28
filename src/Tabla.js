import React,{useState, useEffect} from 'react'
import AddProduct from './components/AddProduct'
import Grid from './components/Grid'
import 'bootstrap/dist/css/bootstrap.css';


const Tabla = () => {
 
  const [information, setInformation] = useState([]);

  //useEffect nos permite ejecutar la funcion getInf solamente cuando se renderiza por primera vez 

   useEffect( () => {
    getInf();
}, []) 

  //cuando mandamos [] es una lista de dependencia, quiere decir como un array

const getInf = async() => {
    
    const url='https://run.mocky.io/v3/c3d00cfc-825d-45a0-a1f3-c5b92d076371';
    const resp =  await fetch( url );
    const data = await resp.json();

    const info = data.map( inf => {
      
        
        return {
            
            id: inf.id,
            pro: inf.name,
            des: inf.description,
            stock: inf.stock,
            pre: inf.precio,
            item: inf.item,

        } 
        
    }) 

    setInformation(info);

}


  return (
    <>
    <div className='container'>
      
    <table className='table table-bordered 
                      table-dark 
                      table-responsive'> 

      <thead>
        
        <tr>
           <th>Id</th>
           <th>Producto</th>
           <th>Descripcion</th>
           <th>Stock</th>
           <th>Precio</th>
           <th>Rubro</th>
           <th>Eliminar</th>
        </tr>
    
      </thead>
      
      <tbody>
      
        {
          <Grid productos={ information } setProductos = { setInformation } />
        }
        
        
      </tbody>
    
    </table>
    
    <hr />
    
    <br />
    
   
    <AddProduct productos={ information }  setProductos={ setInformation } />

    </div>
    
    </>
  )
}

export default Tabla