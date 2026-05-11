import { Router } from "express";
import productController from "../controllers/ProductController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import { validateProductData } from "../middlewares/validateProducts.js";

const productRouter = Router();

productRouter.get("/", productController.getAllProducts);
// productRouter.get("/search", productController.searchProducts);
// productRouter.get("/filter", productController.filterProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.post("/", authMiddleware, adminMiddleware,validateProductData, productController.addProduct);
productRouter.put("/:id", authMiddleware, adminMiddleware, validateProductData, productController.updateProduct);
productRouter.delete("/:id", authMiddleware, adminMiddleware, productController.deleteProduct);

export default productRouter;