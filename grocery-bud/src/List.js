import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list, handleDelete, editItem}) => {

  return (
    <>
      {
        list.map((item)=>{
          const {id, grocery} = item;
          return(
            <div key={id} className='grocery-item'>
              <p className='title'>{grocery}</p>
              <div className='button-container'>
                <button
                  className='edit-btn'
                  type='submit'
                  onClick={()=>{editItem(id)}}
                ><FaEdit /></button>
                <button
                  className='delete-btn'
                  type='button'
                  onClick={()=>{handleDelete(id)}}><FaTrash /></button>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default List