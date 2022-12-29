const button = document.getElementById("btnGerar")

function separaLinhas(dado) {
    return dado.replaceAll('\n', '</br>\n')
}

button.addEventListener("click", ()=>{
    let titulo = document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let instalacao = document.getElementById("instalacao").value
    let uso = document.getElementById("uso").value
    let contribuir = document.getElementById("contribuir").value
    let licenca = document.getElementById("licenca").value
    let creditos = document.getElementById("creditos").value
    let mais = document.getElementById("mais").value

    let file = new File([`<h1>${titulo}</h1>
    <p>${separaLinhas(descricao)}</p></br>

    <h2>instalação</h2>
    <p>${separaLinhas(instalacao)}</p>

    <h2>Modo de uso</h2>
    <p>${separaLinhas(uso)}</p>

    <h2>ajude você tambêm</h2>
    <p>${separaLinhas(contribuir)}</p>

    <h2>Licença</h2>
    <p>${licenca}</p>

    <h2>Créditos</h2>
    <p>${separaLinhas(creditos)}</p>

    <h2>Um pouco mais</h2>
    <p>${separaLinhas(mais)}</p>`], 'README.md',{type: "text/plain;charset=utf-8"})
    let url = window.URL.createObjectURL(file)


    let a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);



    

})