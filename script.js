const modal=document.getElementById("modal");

document.getElementById("abrirModal").onclick=()=>{

modal.style.display="flex";

}

document.getElementById("fecharModal").onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

}
