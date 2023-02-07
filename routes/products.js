import { Router } from "express";

const router = Router()

router.get("/products",(req,res)=>{
    res.render("products",{
        title:"Product || Me",
        isProducts:true
    })
})

router.get("/add",(req,res)=>{
    res.render("add",{
        title:"Add || Me",
        isAdd:true
    })
})

export default router