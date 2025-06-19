import Product from '../Model/ProductSchema.js'

export const getProducts=async(request,response)=>{
    try{
        const products=await Product.find({})
        response.json(products)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}