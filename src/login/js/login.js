function doLogin(){
	//console.log("gato==========");
	//const nomeUsuario = "cachorro";
	//const senhaUsuario = "abc123";
	//alert("campo emali é inválido")
	var email = document.getElementById("email").value; 
	var pass = document.getElementById("pass").value;
	var emailValidado = validarEmail(email);
	var passValidado = validarSenha(pass);
	if(emailValidado && passValidado){//vai aparecer mensagem de sucesso se o email e senha forem validados
		window.location.href = "https://www.google.com.br/"
	}

}

function goToRegister(){
	console.log("rato==========");
}

function validarEmail(email){
	var validador = true;
	if(email == ""){//se o campo email for vazio vai executar o código abaixo
		//alert("campo email é obrigatório");
		document.getElementById("msg-erro-email").innerHTML = "campo email obrigatório";
		document.getElementById("email").classList.add("error");//aqui será usada a função addClass
		validador = false;
	}
	return validador;
}

function validarSenha(pass){
	var validador = true;
	if(pass == ""){//se o campo pass for vazio vai executar o código abaixo
		document.getElementById("msg-erro-pass").innerHTML = "campo senha obrigatório";
		document.getElementById("pass").classList.add("error");//aqui será usada a função addClass
		validador = false;
	}
	return validador;
}
function removeErros(idMsg,idInput){
	document.getElementById(idMsg).innerHTML = "";
	document.getElementById(idInput).classList.remove("error");//aqui será usada a função addClass
	console.log("idMsg==========",idMsg);
	console.log("idInput==========",idInput);
}