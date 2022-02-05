let lista= ['Ovo', 'Farinha', 'Corante', 'Massa'];
lista.push('prato');
let res=lista;
console.log(res)


function altera(cor){
    document.getElementById('titulo').innerHTML= "quadrado"+" "+cor;
    cores=cor;
    return cores;
}

function trocar(){
    if(document.querySelector('#quadrado').classList.contains('preto')){
        altera("verde");
        document.querySelector('#quadrado').classList.remove('preto');
        document.querySelector('#quadrado').classList.add('verde');
        var a = altera("verde");
        console.log(a);
    }else{
        document.querySelector('#quadrado').classList.remove('verde');
        document.querySelector('#quadrado').classList.add('preto');
        var a = altera("preto");
        console.log(a);
    }
    
}

var animal = "cachorro.jpg";

function imagem(){
    if(animal=="cachorro.jpg"){
        animal="gato.jpg"
        document.querySelector('#animal').innerHTML="gato"
        document.querySelector('.image').setAttribute('src','images/'+animal);
    }else{
        animal="cachorro.jpg";
        document.querySelector('#animal').innerHTML="cachorro"
        document.querySelector('.image').setAttribute('src','images/'+animal);
    }
       
}
function nomeArquivo(){
    let arquivo=document.querySelector('.image').getAttribute('src');
    alert(arquivo);
}

function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function aparecer() {
    if (window.scrollY == 0) {
        document.querySelector('.scroll-top').classList.add('desactive');
    } else if (window.scrollY > 0) {
        document.querySelector('.scroll-top').classList.remove('desactive');
        document.querySelector('.scroll-top').classList.add('active');
    }
}
window.addEventListener('scroll', aparecer)


function telefone() {
document.getElementById('btntel').style.display="none";
document.getElementById('telefone').style.display="block";
if(reserva==true){
    document.getElementById('btntel').style.backgroundColor="#ff0000";
}else{

}
}
// comentários de uma linha js
