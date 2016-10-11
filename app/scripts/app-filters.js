App.filter('ellipsis', ellipsis);
function ellipsis(){
	return function(input, size){
		if(input.length<=size) return input;
		//(size || 10) se size for evaluado como falso (undefined, null, vazio, false, nam, ou 0 ele é = false) ele pega o valor padrão de 10
		var output = input.substring(0, (size || 10)) + "...";
		return output;
	}
};


App.filter('cpfformat', cpfformat);
function cpfformat(){

    return function (v) {
        v = v.replace( /\D/g , ""); //Remove tudo o que não é dígito
        v = v.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
        return v;
    };
};


App.filter('dateformat', dateformat);
function dateformat(){
    return function (v) {
        for (var i = 0; i < v.length; i++) {
             v = v.replace( "-", "/");
        }
       // console.log(v);
       
        return v;
    };
};
