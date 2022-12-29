const button = document.getElementById("btnGerar")
const inputTitulo = document.getElementById("titulo")
const inputDescricao = document.getElementById("descricao")
const alert = document.getElementById("alert")
const info = document.getElementById("info")

function change() {
    inputDescricao.style.borderColor = "gray"

    inputTitulo.style.borderColor = "gray"

    alert.style.display = 'none'
    info.style.display = 'block'

}

function separaLinhas(dado) {
    let retorno = dado.replaceAll('\n', '\n</br>')
    let finalRetorno = retorno.replaceAll('. ', '• ')
    return finalRetorno
}


button.addEventListener("click", ()=>{
    let titulo = document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let banner = document.getElementById("banner").value
    let instalacao = document.getElementById("instalacao").value
    let tecnologias = document.getElementById("tecnologias").value
    let uso = document.getElementById("uso").value
    let contribuir = document.getElementById("contribuir").value
    let licenca = document.getElementById("licenca").value
    let creditos = document.getElementById("creditos").value
    let mais = document.getElementById("mais").value
    
    if (!titulo || !descricao) {

        window.scrollTo(0,0)
        alert.style.display = 'block'
        info.style.display = 'none'

        if (!descricao) {
            inputDescricao.focus()
            inputDescricao.style.borderColor = 'red'
        }
        if (!titulo) {
            inputTitulo.focus()
            inputTitulo.style.borderColor = 'red'
        }
        return
    }

    

    

    let file = new File([`<h1>${titulo}</h1>
    <p>${separaLinhas(descricao)}</p>
    ${banner && `<img src='${banner}' alt="Banner" width='100%'/>`}

    ${instalacao && `<h2>instalação</h2>
    <p>${separaLinhas(instalacao)}</p>`}

    ${uso && `<h2>Modo de uso</h2>
    <p>${separaLinhas(uso)}</p>`}

    ${tecnologias && `<h2>Técnologias</h2>
    <p>${separaLinhas(tecnologias)}</p>`}

    ${contribuir && `<h2>ajude você tambêm</h2>
    <p>${separaLinhas(contribuir)}</p>`}

    ${licenca && `<h2>Licença</h2>
    <p>${licenca}</p>`}

    ${creditos && `<h2>Créditos</h2>
    <p>${separaLinhas(creditos)}</p>`}

    ${mais && `<h2>Um pouco mais</h2>
    <p>${separaLinhas(mais)}</p>`}`], 'README.md',{type: "text/plain;charset=utf-8"})
    let url = window.URL.createObjectURL(file)


    let a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);


    

})