// import React, { useContext } from 'react'
// import { StoreContext } from '../context/StoreContext'

//  const product = [
//     {id:1,name:"laptop",price:2000},
//     {id:2,name:"laptop",price:2000},
//     {id:3,name:"laptop",price:2000}
//     ]

// const Products = () => {

//    const {dispatch} = useContext ( StoreContext)


   
//   return (
//     <div>
//         <h1>Products</h1>
//         {product.map((p)=>(
            
//             <div key={p.id}>
//                 <p>{p.name} - {p.price}</p>
                
                
//                 <button onClick={()=> dispatch({type :"add_to_cart", product:p })}>Add to Catr</button>
                
            
//             </div>
            
            
            
            

//         ))}
        
        
//     </div>
    
    
//   )
// }

// export default Products


import React, { useContext } from 'react'
import { StoresContext } from '../context/StoresContext'

const product = [
    {id:1,name:"laptop",price:10000},
    {id:2,name:"laptop",price:10000},
    {id:3,name:"laptop",price:10000}]

const Products = () => {

const {dispatch} = useContext(StoresContext)
 

  return (
    <div>
        {product.map((p)=>(
            <div key={p.id}>
                <p>{p.name}-{p.price}</p>
                {/* <button onClick={()=> dispatch({type :"addtocart", product:p })}>Add to Catr</button> */}
                <button onClick={(()=>{console.log(p); dispatch({type:"addtocart", product:p});
                })}>add to cart</button>
            </div>
        ))}

    </div>
  )
}

export default Products