import List from './List';
import React, { useEffect, useState } from 'react';
import Alert from './Alert';


const getLocalStorage = ()=>{
  let list = localStorage.getItem('cart')
  if(list){
    return JSON.parse(localStorage.getItem('cart'))
  }else{
    return []
  }
}



function App() {

  const [grocery, setGrocery] = useState('');
  const[cart, setCart] = useState(getLocalStorage());
  const[alert, setAlert] = useState({show: false, msg: '', type: 'success'});
  const[isEditing, setIsEditing] = useState(false);
  const[editID, setEditID] = useState('');


  console.log(`grocery ${grocery}`);
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!grocery){

    //  display alert
    // setAlert({show: true, msg: 'please Enter value', type: 'danger'})
      showAlert(true, 'danger', 'please Enter value');
    }else if(grocery && isEditing){
      // deal with edit
      console.log("edit");
    }
    showAlert(true, 'danger', 'Item Added To The List');
    const shop = {id: new Date().getTime().toString(), grocery}
    setCart([...cart, shop ]);
    console.log(cart);
    setGrocery('');
  };

  const showAlert = (show=false, type, msg)=>{
    setAlert({show, type, msg})
  }

  const handleDelete = (id)=>{
    showAlert(true, 'danger', 'empty list')
    const newGrocery = cart.filter(item=>item.id !== id);
    setCart(newGrocery);
  }

  const editItem = ((id)=>{
    const itemToEdit = cart.find((item)=>item.id === id);
    console.log(itemToEdit);
    setIsEditing(true);
    setEditID(id)
    setGrocery(itemToEdit.grocery)
  })


  useEffect(()=>{

    setTimeout(()=>{
      // setShow(true);
    }, 2000)
  }, [])

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  return (
    <>

      <div className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert  {...alert} removeAlert={showAlert} list={cart}/>}
          <h3>grocery bud</h3>
          <div className='form-control'>
            <input
              type='text'
              className='grocery'
              placeholder='e.g eggs'
              value={grocery}
              onChange={(e)=>{setGrocery(e.target.value)}}
            />
            <button
              type='submit'
              className='submit-btn'>{isEditing? 'edit' : 'submit'}</button>
          </div>
        </form>
        {cart.length > 0 &&(
          <div className='grocery-container'>
            <div className='grocery-list'>
              <List list = {cart}  handleDelete = {handleDelete} editItem={editItem} />
            </div>
            <button className='clear-btn'>clear items</button>
          </div>
        )}

      </div>

    </>
  );
}

export default App;