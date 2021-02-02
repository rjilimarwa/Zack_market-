import {getData} from '../utils/fetchData'
import {useState} from 'react'
import Head from 'next/js'
import ProductItem from '../components/product/ProductItem'
const Home =(props)=>{
    const [products,setProducts]= useState(props.products)
    return(
        <div>
       <Head>
           <title>Home Page</title>
        </Head>
    {
        products.length === 0 ?
<
    h2 > No
    Products < / h2 >
:
    products.map(product = > {
        <ProductItem key={product._id} product={product}/>
    }
)
}
        </div>
        )

}
export async  function getServerSideProps(){
 const  res= await getData('product')
  return{
      props:{
        products:res.products,
         result:res.products
      }
  }
}
export default Home