function abremenu(){
    let menu = document.getElementById('menu-area');
 if(menu.style.width == '200px'){
    menu.style.width="0px";
 }else{
    menu.style.width="200px";
 }
}
function reserva(e){
      if(document.getElementById('q'+e).classList.contains("Livre")){
         document.getElementById('q'+e).classList.remove("Livre");
         document.getElementById('q'+e).classList.add("Ocupado");
         document.getElementById('t'+e).innerHTML="Ocupado";
      }else{
         document.getElementById('q'+e).classList.remove("Ocupado");
         document.getElementById('q'+e).classList.add("Livre");
         document.getElementById('t'+e).innerHTML="Livre"
      }
   }
function limpeza(l){
   if(document.getElementById('q'+l).classList.contains("Limpeza")){
      document.getElementById('q'+l).classList.remove("Limpeza");
      document.getElementById('l'+l).innerHTML="-";
      document.getElementById('b'+l).innerHTML="Limpeza";
      window.alert("limpeza do quarto "+l+" cancelada");
   }else{
      document.getElementById('q'+l).classList.add("Limpeza");
      document.getElementById('l'+l).innerHTML="Limpar";
      document.getElementById('b'+l).innerHTML="Cancelar";

   }

}

