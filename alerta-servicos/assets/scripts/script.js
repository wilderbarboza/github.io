document.onload=tempo();
var seg=5;

function redireciona(){
if(seg > 0){
 document.getElementById('text').innerHTML= `Olá bem Vindo!<br/> Você será redirecionado a nosso novo dominio.<br/>Em ${seg} segundos` ;
 console.log(seg)
 seg--;
} else{
    window.location= "https://alertaservicos.com.br"
}
}
function tempo(){
    setInterval(redireciona,1000)
}