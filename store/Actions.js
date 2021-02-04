export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART:'ADD_CART',
    ADD_MODAL:'ADD_MODAL'

}

export const addToCart=(product,cart)=>{
    if(product.inStock ===0)
        return ({type:'NOTIFY',payload:{error:'This product is out of stock'}})
    const check=cart.every(item =>{
         return item._id !==product._id
        })
    if(!check) return({type:'Notify',payload:{error:'this product has been add to cart'}})
    return ({type:'Notify',payload:[...cart,{...product,quantity:1}]})
}

export const decrease = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if(item._id === id) item.quantity -= 1
})

    return ({ type: 'ADD_CART', payload: newData })
}

export const increase = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if(item._id === id) item.quantity += 1
})

    return ({ type: 'ADD_CART', payload: newData })
}

export const deleteItem=(data,id, type)=>{
    const newData=filter(item=>{
            item._id!=id
    return ({type,payload:newData})
        })
}