const ProductItem=({product})=>{
   return(
       <div>
       <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={product.images[0].url} alt={product.images[0].url}>
        <div className="card-body">
        <h5 className="card-title" title={product.title}>{roduct.title}</h5>
        <div>
    {}    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
        </div>
       )
}
export default ProductItem;