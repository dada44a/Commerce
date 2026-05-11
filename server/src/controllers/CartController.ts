import { Request, Response } from "express";
import Cart from "../models/cart.js";
import Product from "../models/product.js";

class CartController {

    // get cart (must be logged in)
    getCart = async (req: Request, res: Response) => {
        try {

        } catch (error) {
            console.log(error);

        }
    }

    // add items to cart (must be logged in)
    addToCart = async (req: Request, res: Response) => {
        try {

        } catch (error) {

        }
    }

    // update cart quantity (must be logged in)
    updateCart = async (req: Request, res: Response) => {
        try {

        } catch (error) {

        }
    }

    // remove cart items (must be logged in)
    removeCart = async (req: Request, res: Response) => {
        try {

        } catch (error) {

        }
    }



}

export default new CartController();