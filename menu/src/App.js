import data from './data'
import './App.css';
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';


const allCategory = ['all', ...new Set(data.map(item => item.category))];
console.log('all category',allCategory)



function App() {

  const [menu, setMenu]= useState(data);
  const [categories, setCategories] = useState(allCategory)

  const handleCategory = (category)=>{
    if(category === 'all'){
      console.log('true');
      return setMenu(data)

    }
    const newCategory= menu.filter(item => item.category === category)
    console.log(newCategory);
    console.log(menu);
    setMenu(newCategory)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'> </div>
        </div>
        <Categories categories = {categories} filterItems = {handleCategory} data ={menu}/>

        <div className='section-center'>
          {menu.map((item)=>{
            return(
              <Menu key={item.id}  {...item}/>
            )
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
