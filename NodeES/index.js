import http from "http";
import fs from "fs";
import { createLink, createVoltar } from "./str_helper.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3333;
const folder = process.argv[2];
let icomp = "Instituto de Computacao";
const server = http.createServer((req,res) => {
    if (req.url === "/"){

        fs.readdir(folder, (err, files) => {
            if (err) console.log(err)
            else{
             res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
             files.forEach(f => res.write(`${createLink(f)} \n`))
             res.end();}
        });

    }else{
        fs.readFile(`${folder}/${req.url}`, (err, content) =>{
            res.write(createVoltar());
            res.end(content); });
        
    } 
});
server.listen(PORT, () => {
    console.log('rodando na porta', PORT);
})