import {urlController} from "./controller/urlController";
import express,{Request,Response}from "express"
import path  from 'path'
const app = express();
app.use(express.json())

app.get("/start",(req: Request, res: Response)=> {
    res.sendFile(path.join(__dirname + '/index.html'))
})

const ControllerUrl = new urlController()
app.post("/shorten",ControllerUrl.shorten)
app


app.listen("5000",()=> console.log("servidor na porta 5000")) 