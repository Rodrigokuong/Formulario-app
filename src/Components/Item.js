import React from 'react'

const Item = ({ pro, des, stock, pre, item, id, productos, setProductos }) => {

    const handleEliminar = (e) => {

        e.preventDefault();

        const isDelete = window.confirm(
            `¿Estas seguro de eliminar el registro con el '${id}'?`
        );

        if(isDelete) {
            let newData = productos.filter(p => p.id !== id);
            setProductos(newData)
        }
        else {
            return;
        }



    }

    return (
        <>

            <tr>

                <td>{id}</td>
                <td>{pro}</td>
                <td>{des}</td>
                <td>{stock}</td>
                <td>{pre}</td>
                <td>{item}</td>
                <td>
                    <button
                        className='btn btn-primary'
                        type='button'
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>
                </td>

            </tr>

        </>
    )
}

export default Item