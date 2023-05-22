export function upper (str){
    return str.toUpperCase();
}

export function lower (str){
    return str.toLowerCase();
}

export function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}
export function createVoltar(){
    return `<a href="/">voltar</a><br>\n`;

}

//export default{ upper, lower, createLink, createVoltar};
