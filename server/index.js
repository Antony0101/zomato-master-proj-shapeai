import express from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

const zomato=express();

//middlewares applications

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/",(req,res)=>res.json({message:"success"}));

zomato.listen(4000,()=>console.log("server running"));