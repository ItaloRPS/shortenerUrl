import { config } from "../config/Constants"
import {Request,Response}from "express"
import shortid from "shortid"

export class urlController{
    //criar um hash para essa URL
    public async shorten(req:Request,res:Response):Promise<void>{
            //verificar se a url esta duplicada
            
            console.log(req.body )
            const  {originUrl} = req.body 
            const hash = shortid.generate()
            const shortURL = `${config.API_URL}/${hash}`
            // SALVAR url no banco
            //retornar url salva
            res.json({originUrl, hash, shortURL})
    }
}

