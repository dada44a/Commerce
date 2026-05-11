import { Request, Response } from "express";
import Product from "../models/product.js";

class ProductController {

    getAllProducts = async (_req: Request, res: Response) => {
        try {
            const products = await Product.find();
            res.json({ products });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    getProductById = async (req: Request, res: Response) => {
        try {
            const productId = req.params.id;
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json({ product });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    searchProducts = async (req: Request, res: Response) => {
        try {
            const { query } = req.query;
            if (!query) {
                return res.status(400).json({ message: "Search query is required" });
            }
            const products = await Product.find({
                name: { $regex: query as string, $options: "i" },
            });
            res.json({ products });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    filterProducts = async (req: Request, res: Response) => {
        try {
            const { category, search } = req.query;
            if (!category) {
                return res.status(400).json({ message: "Category query is required" });
            }
            const products = await Product.find({
                category: { $regex: category as string, $options: "i" },
                name: { $regex: search as string, $options: "i" },
            });
            res.json({ products });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    addProduct = async (req: Request, res: Response) => {
        try {
            const { name, price, description, category, stock, image } = req.body;
            if (!name || !price || !description || !category || !stock || !image) {
                return res.status(400).json({ message: "All fields are required" });
            }


            const product = await Product.create({
                name,
                price,
                description,
                category,
                stock,
                image,
            });
            res.json({ message: "add product", product });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    updateProduct = async (req: Request, res: Response) => {
        try {
            const { name, price, description, category, stock, image } = req.body;
            const productId = req.params.id;
            if (!name || !price || !description || !category || !stock || !image) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const product = await Product.findByIdAndUpdate(productId, {
                name,
                price,
                description,
                category,
                stock,
                image,
            });
            res.json({ message: "update product", product });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    deleteProduct = async (req: Request, res: Response) => {
        try {
            const productId = req.params.id;
            const product = await Product.findByIdAndDelete(productId);
            res.json({ message: "delete product", product });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }




}

export default new ProductController();