import { config } from "../config/Constants"
import {Request,response,Response}from "express"
import shortid from "shortid"
import { URLModel } from "../dataBase/model/url"

export class urlController{
    //criar um hash para essa URL
    public async shorten(req:Request,res:Response):Promise<void>{
            //verificar se a url esta duplicada
            const  {originURL} = req.body 
            const url =  await URLModel.findOne({originURL})
            if (url) {
                response.json(url)
            }
         
            const hash = shortid.generate()
            const shortURL = `${config.API_URL}/${hash}`
            // SALVAR url no banco
            const newUrl =  URLModel.create({originURL, hash, shortURL})
            //retornar url salva
            res.json(newUrl)
    }

    public async redirect(req:Request,res:Response):Promise<void>{
        //pegar hash da url 
        // encontrar url original pelo hash
        // redirecionar  para a original apartir do que for encontrado no banco
        const{hash} = req.params
        const url = await URLModel.findOne({hash})
        if (url) {
            res.redirect(url.originURL)
        }
        res.status(400).json({error:'url not fould'})
    }
}

