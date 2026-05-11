import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().required(),
    image: Joi.string().required(),
    category: Joi.string().required(),
});


export const validateProductData = (req: Request, res: Response, next: NextFunction) => {
    const { name, description, price, image, category } = req.body;

    productSchema.validateAsync({ name, description, price, image, category })
        .then(() => next())
        .catch((err) => {
            res.status(400).json({ message: err.details[0].message });
        });
};