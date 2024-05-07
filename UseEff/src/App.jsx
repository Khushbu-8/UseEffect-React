import { useEffect, useState } from 'react'

//useEffect is hook componant ,allows you to perform a side effect in component
// side effects : fetching data, directly Updating the DOM, timers etc.

//...... Timer side Effect ........//

// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     setTimeout(()=> {
//       setCount(count+1)
//     },1000)
//   },[]) // continuas  count the counter  without the blank array , if i added the array than only increase by one

//   return (
//    <>
//    <h1>Count : {count}</h1>
//    </>
//   )
// }

function App() {
  const [Product, setProduct] = useState([])
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then((deta) =>{
        console.log(deta);
       setProduct(deta.Product)
       setTitle(deta.title)
       setPrice(deta.price)
      })
  },[])

  return (
    <>
      <h1>Title : {title}</h1>
      <h1>Price : {price}</h1>
      
    </>
  )
}

export default App
