export class ProductController{
    static getAllProducts(req,res,next){
        res.status(200).json({
            message:"get all products"
        })
    }
}