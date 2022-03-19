import {urlController} from "./controller/urlController";
import {mongoConnection} from "./dataBase/mongoConnection";
import express,{Request,Response}from "express"
import path  from 'path'
const app = express();
app.use(express.json())

const mongo =  new mongoConnection()

mongo.connect()
app.get("/start",(req: Request, res: Response)=> {
    res.sendFile(path.join(__dirname + '/index.html'))
})

const ControllerUrl = new urlController()
app.post("/shorten",ControllerUrl.shorten)

app.post("/:hash",ControllerUrl.redirect)


app.listen("5000",()=> console.log("servidor na porta 5000")) 