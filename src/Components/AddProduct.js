import React, { useState } from 'react'



const AddProduct = ({ productos, setProductos }) => {

  const [product, setProduct] = useState('');

  const [descrip, setDescrip] = useState('');

  const [stock, setStock] = useState('');

  const [precio, setPrecio] = useState('');

  const [rubro, setRubro] = useState('');


  const handleProduc = (e) => (setProduct(e.target.value));

  const handleDes = (e) => (setDescrip(e.target.value));

  const handleStock = (e) => (setStock(e.target.value));

  const handlePre = (e) => (setPrecio(e.target.value));

  const handleRu = (e) => (setRubro(e.target.value));



  const handleAgregar = (e) => {

    e.preventDefault();

    //Obtener el arreglo actual


    //Agregar el objeto mio 

    const nuevos_productos = [...productos, {

      id: productos[productos?.length - 1]?.id + 1,
      pro: product,
      des: descrip,
      stock: stock,
      pre: precio,
      item: rubro

    }]

    //Actualizar el estado 

    setProductos(nuevos_productos);

  }

  return (
    <>
   
      <div className='container'>

        <div className='panel panel-primary'>

          <div className='panel-heading'><h3>Nuevo Producto</h3></div>

          <div className='panel-body'>

            <label>Producto</label>

            <input
              className='form-control'
              type='text'
              value={product}
              onChange={handleProduc}
            />

            <br />

            <label>Descripcion</label>

            <input
              className='form-control'
              type='text'
              value={descrip}
              onChange={handleDes}
            />

            <br />

            <label>Stock</label>

            <input
              className='form-control'
              type='text'
              value={stock}
              onChange={handleStock}
            />

            <br />

            <label>Precio</label>

            <input
              className='form-control'
              type='text'
              value={precio}
              onChange={handlePre}
            />

            <br />

            <label>Rubro</label>

            <input
              className='form-control'
              type='text'
              value={rubro}
              onChange={handleRu}
            />

            <br />

            <button
              className='btn btn-primary'
              type='button'
              onClick={handleAgregar}
            >
              Agregar Producto
            </button>


          </div> {/* panel body */}
        </div> {/* panel default */}
      </div> {/* container */}
    </>
  )
}

export default AddProduct