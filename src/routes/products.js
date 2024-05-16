import express from "express"
import { ProductController } from "../controllers/productsController.js"

export const  productRouter = express.Router()

productRouter.get("/", ProductController.getAllProducts)

