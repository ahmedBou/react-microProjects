# React Microprojects

reusable components for a big project

## UseState

1.birthday remember : useState - props - map - destructuring - key ref

```useState
 people.map((item)=>{
          const{id, image, name, age} = item
          return(
            <div key={id} className='person'>
              <img src={image} alt={{name}}/>
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          )
        })
```

## useEffect and Conditional Rendering
1. Tours
2. Reviews
3. Questions
4. Menu 
5. Tabs
6. Slider
