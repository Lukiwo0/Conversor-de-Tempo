    function github() {
        window.open('https://github.com/Lukiwo0/Estudos')
    }

    function converter() {
        var valorselecionado = document.getElementById("escolhe").value; // Obtém o elemento select
        var tipo = document.getElementById("numero").value;
        var tiposem = tipo.trim();

        console.log("Unidade selecionada:", valorselecionado);
        console.log("Valor inserido:", tipo);

        if (tiposem === "") {
            document.getElementById("res").innerHTML = "";
            res.innerHTML = "Adicione um valor.";
        } else if (Number(tiposem) <= 0) {
            document.getElementById("res").innerHTML = "";
            res.innerHTML = "Coloque um valor maior que 0.";
        } else if (valorselecionado === "milissegundos") {
            document.getElementById("res").innerHTML = "";

            var restsegundo = tipo / 1000
            var restminuto = tipo / 60000
            var resthoras = tipo / 36000000
            var restdias = tipo / 86400000
            var restsemanas = tipo / 604800000

            res.innerHTML = `O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br> O resultado é <strong>${restminuto} em minuto(s)</strong>!
            <br> O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br> O resultado é <strong>${restdias} em dia(s)</strong>!
            <br> O resultado é <strong>${restsemanas} em semana(s)</strong>!`

        } else if (valorselecionado === "segundos") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 1000
            var restminuto = tipo / 60
            var resthoras = tipo / 3600
            var restdias = tipo / 86400
            var restsemanas = tipo / 604800

            res.innerHTML = `O resultado é <strong>${restmili} em milissegundos(s)</strong>!
            <br>O resultado é <strong>${restminuto} em minuto(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!`

        } else if (valorselecionado === "minuto") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 60000
            var restsegundo = tipo * 60
            var resthoras = tipo / 60
            var restdias = tipo / 1440 
            var restsemanas = tipo / 10080
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!`

        } else if (valorselecionado === "hora") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 3600000
            var restsegundo = tipo * 3600
            var restminuto = tipo * 60
            var restdias = tipo / 24
            var restsemanas = tipo / 168
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${restminuto} em minuto(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!`

        } else if (valorselecionado === "dia") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 86400000
            var restsegundo = tipo * 86400
            var restminuto = tipo * 1440
            var resthoras = tipo * 24
            var restsemanas = tipo / 7
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${restminuto} em minuto(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!`

        } else if (valorselecionado === "semana") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 604800000
            var restsegundo = tipo * 604800
            var restminutos = tipo * 10080
            var resthoras = tipo * 168
            var restdias = tipo * 7
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${restminutos} em minuto(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!`

        } else {
            res.innerHTML = "Tá... Algo deu errado."
        }

        

    }

    function limpar() {
        document.getElementById("numero").value = "";
        document.getElementById("res").innerHTML = "";
    }
