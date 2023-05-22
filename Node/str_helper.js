function upper (str){
    return str.toUpperCase();
}

function lower (str){
    return str.toLowerCase();
}

function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}
function createVoltar(){
    return `<a href="/">voltar</a><br>\n`;

}

console.log("oi");
module.exports = {
    upper,
    lower,
    createLink,
    createVoltar,

};