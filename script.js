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

    let file = new File([`
        <h1>Título</h1> 
        ${titulo}
        </br>
        </br>

        <h2>Descrição</h2>
        ${descricao}
        </br>
        </br>

        <h2>instalação</h2>
        ${instalacao}
        </br>
        </br>

        <h2>Modo de uso</h2>
        ${uso}
        </br>
        </br>

        <h2>ajude você tambêm</h2>>
        ${contribuir}
        </br>
        </br>

        <h2>Licença</h2>
        ${licenca}
        </br>
        </br>

        <h2>Créditos</h2>
        ${creditos}
        </br>
        </br>

        <h2>Um pouco mais</h2>
        ${mais}

        

        
    `], 'README.md',{type: "text/plain;charset=utf-8"})
    let url = window.URL.createObjectURL(file)


    let a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);



    

})