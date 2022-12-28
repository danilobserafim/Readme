const button = document.getElementById("btnGerar")

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
    <p>${descricao}</p>
    <h2>instalação</h2>
    <p>${instalacao}</p>
    <h2>Modo de uso</h2>
    <p>${uso}</p>
    <h2>ajude você tambêm</h2>
    <p>${contribuir}</p>
    <h2>Licença</h2>
    <p>${licenca}</p>
    <h2>Créditos</h2>
    <p>${creditos}</p>
    <h2>Um pouco mais</h2>
    <p>${mais}</p>`], 'README.md',{type: "text/plain;charset=utf-8"})
    let url = window.URL.createObjectURL(file)


    let a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);



    

})