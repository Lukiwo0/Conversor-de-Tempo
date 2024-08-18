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
            var restmes = tipo / 2628000000
            var restano = tipo / 31540000000

            res.innerHTML = `O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br> O resultado é <strong>${restminuto} em minuto(s)</strong>!
            <br> O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br> O resultado é <strong>${restdias} em dia(s)</strong>!
            <br> O resultado é <strong>${restsemanas} em semana(s)</strong>!
            <br> O resultado é <strong>${restmes} em mês(s)</strong>!
            <br> O resultado é <strong>${restano} em ano(s)</strong>!`

        } else if (valorselecionado === "segundos") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 1000
            var restminuto = tipo / 60
            var resthoras = tipo / 3600
            var restdias = tipo / 86400
            var restsemanas = tipo / 604800
            var restmes = tipo / 2628000
            var restano = tipo / 31540000

            res.innerHTML = `O resultado é <strong>${restmili} em milissegundos(s)</strong>!
            <br>O resultado é <strong>${restminuto} em minuto(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!
            <br> O resultado é <strong>${restmes} em mês(s)</strong>!
            <br> O resultado é <strong>${restano} em ano(s)</strong>!`

        } else if (valorselecionado === "minuto") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 60000
            var restsegundo = tipo * 60
            var resthoras = tipo / 60
            var restdias = tipo / 1440 
            var restsemanas = tipo / 10080
            var restmes = tipo / 43800
            var restano = tipo / 525600
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!
            <br> O resultado é <strong>${restmes} em mês(s)</strong>!
            <br> O resultado é <strong>${restano} em ano(s)</strong>!`

        } else if (valorselecionado === "hora") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 3600000
            var restsegundo = tipo * 3600
            var restminuto = tipo * 60
            var restdias = tipo / 24
            var restsemanas = tipo / 168
            var restmes = tipo / 730
            var restano = tipo / 8760
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${restminuto} em minuto(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!
            <br> O resultado é <strong>${restmes} em mês(s)</strong>!
            <br> O resultado é <strong>${restano} em ano(s)</strong>!`

        } else if (valorselecionado === "dia") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 86400000
            var restsegundo = tipo * 86400
            var restminuto = tipo * 1440
            var resthoras = tipo * 24
            var restsemanas = tipo / 7
            var restmes = tipo / 30
            var restano = tipo / 365
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${restminuto} em minuto(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!
            <br> O resultado é <strong>${restmes} em mês(s)</strong>!
            <br> O resultado é <strong>${restano} em ano(s)</strong>!`

        } else if (valorselecionado === "semana") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 604800000
            var restsegundo = tipo * 604800
            var restminutos = tipo * 10080
            var resthoras = tipo * 168
            var restdias = tipo * 7
            var restmes = tipo / 4.345
            var restano = tipo / 52.143
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${restminutos} em minuto(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br> O resultado é <strong>${restmes} em mês(s)</strong>!
            <br> O resultado é <strong>${restano} em ano(s)</strong>!`

        } else if (valorselecionado === "mes") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 2628000000
            var restsegundo = tipo * 2628000
            var restminutos = tipo * 43800
            var resthoras = tipo * 730
            var restdias = tipo * 30
            var restsemanas = tipo * 4.345
            var restano = tipo / 12
    
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${restminutos} em minuto(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!
            <br> O resultado é <strong>${restano} em ano(s)</strong>!`

        } else if (valorselecionado === "ano") {
            document.getElementById("res").innerHTML = "";

            var restmili = tipo * 31540000000
            var restsegundo = tipo * 31540000
            var restminutos = tipo * 525600
            var resthoras = tipo * 8760
            var restdias = tipo * 365
            var restsemanas = tipo * 52.143
            var restmes = tipo * 12
    
    
            res.innerHTML = `O resultado é <strong>${restmili} em milissegundo(s)</strong>!
            <br>O resultado é <strong>${restsegundo} em segundo(s)</strong>!
            <br>O resultado é <strong>${restminutos} em minuto(s)</strong>!
            <br>O resultado é <strong>${resthoras} em hora(s)</strong>!
            <br>O resultado é <strong>${restdias} em dia(s)</strong>!
            <br>O resultado é <strong>${restsemanas} em semana(s)</strong>!
            <br> O resultado é <strong>${restmes} em mês(s)</strong>!`

        } else {
            res.innerHTML = "Tá... Algo deu errado."
        }

    }

    function limpar() {
        document.getElementById("numero").value = "";
        document.getElementById("res").innerHTML = "";
    }
