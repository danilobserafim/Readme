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

    let blob = new File([`
        # Título 
        ${titulo}

        ## Descrição
        ${descricao}

        ## instalação
        ${instalacao}

        ## Modo de uso
        ${uso}

        ## ajude você tambêm
        ${contribuir}

        ## Licença
        ${licenca}

        ## Créditos
        ${creditos}

        ## Um pouco mais
        ${mais}

        

        
    `], 'README.MD',{type:"text/plain"})
    let url = window.URL.createObjectURL(blob)


    let a = document.createElement("a");
        a.href = url;
        a.download = blob.name;
        a.click();
        window.URL.revokeObjectURL(url);



    

})