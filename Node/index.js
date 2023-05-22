const http = require("http");
const fs = require("fs"); 
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const strHelper = require("./str_helper");
let icomp = "Instituto de Computacao";

console.log(strHelper.upper(icomp));
console.log(strHelper.lower(icomp));



const server = http.createServer((req,res) => {
    if (req.url === "/"){

        fs.readdir(folder, (err, files) => {
            if (err) console.log(err)
            else{
             res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
             files.forEach(f => res.write(`${createLink(f)} \n`))
             res.end();
    
             }
        });

    }else{
        fs.readFile(`${folder}/${req.url}`, (err, content) =>{

            res.write(createVoltar());
            res.end(content);

        }); 
        
    } 
});


server.listen(PORT, () => {
    console.log('rodando na porta', PORT);
})