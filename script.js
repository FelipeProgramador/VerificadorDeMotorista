   function pulaLinha() {
			        document.write("<br>");
			    }

			    function mostra(frase) {
			        document.write(frase);
			        pulaLinha();
			    }

			    var idade = parseInt(prompt("Qual é sua idade?"));
			    var temCarteira = prompt("Tem carteira? Responda S ou N");

			    if (idade >= 18 && temCarteira == 'S') {
			    	mostra('Pode dirigir');
			    }else{
			    	mostra('Não pode dirigir');
			    }
