import express, { Request, Response } from "express";
import { Todo } from "../models/user_model";

const router = express.Router();

//Todo:POST Request
router.post("/add", async (req: Request, res: Response) => {

    const { title, description } = req.body;
    console.log(req.body);
    console.log(title);
    console.log(description);
    
    const dataItem = Todo.set({title, description });
    console.log(dataItem);
    await dataItem.save();
    return res.status(200).json({
        data: dataItem
    });
});

export { router };