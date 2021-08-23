import express, { Request, Response } from "express";
import { Todo } from "../models/user_model";

const router = express.Router();

//Todo:POST Request
router.post("/add", async (req: Request, res: Response) => {

    const { title, description } = req.body;
    console.log(req.body);

    const dataItem = Todo.set({title, description });
    
    await dataItem.save();
    return res.status(200).json({
        data: dataItem
    });
});

//TODO:GET Request
router.get("/", async (req: Request, res: Response) => {
    try {
        const dataItems = await Todo.find({});
        return res.status(200).json({
            data: dataItems
        });
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
});

//TODO: DELETE Request
router.delete("/delete", async (req: Request, res: Response) => {
    const filter = {
        title: req.body.title
    }
    const dataItem = await Todo.deleteOne(filter).then((data) => 
        res.status(200).json({
            data: data
        })
    ).catch((e) => {
        res.status(500).json({
            error: e
        });
    });
});

//TODO:UPDATE REQUEST
router.put("/update", async (req: Request, res: Response) => {
    const filter = {
        title: req.body.title
    }

    const updatedData = {
        description: req.body.description
    };

    const dataItem = await Todo.updateOne(filter,updatedData,{
        new:true
    }).then((data) => 
        res.status(200).json({
            data: data
        })
    ).catch((e) => {
        res.status(500).json({
            error: e
        });
    });
});

export { router };