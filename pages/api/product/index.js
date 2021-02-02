import connextDB from '../../../utils/connextDB';
import Products from '../../../models/productModel';

connextDB()
export default async(req,res)=>{
    switch (req.method){
        case "GET":
            await getProducts(req,res)
            break;


    }
}
const getProducts =async(req,res)=>{
    try{
     const products= await Products.find()
        res.json({
           status:'success',
            results:products.length,
            products
        })
    }catch(err){
      return res.status(500).json({err:err.message})
    }
}