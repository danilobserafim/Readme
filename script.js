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
    let tratamento = dado.replaceAll('\n', '  \n')
    let resposta = tratamento.replaceAll('. ', '• ')
    return resposta
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

    

    

    let file = new File([`
# ${titulo}

${separaLinhas(descricao)}

${banner && `![Banner](${banner})`}

${instalacao && `## Instalação
${separaLinhas(instalacao)}`}

${uso && `## Modo de uso
${separaLinhas(uso)}`}

${tecnologias && `## Tecnologías
${separaLinhas(tecnologias)}`}

${contribuir && `## Ajude você também
${separaLinhas(contribuir)}`}

${licenca && `## Licença
${licenca}`}

${creditos && `## Créditos
${separaLinhas(creditos)}`}

${mais && `## Um pouco mais
${separaLinhas(mais)}`}`],
 'README.md',
 {type: "text/plain;charset=utf-8"})


let url = window.URL.createObjectURL(file)
let a = document.createElement("a");
a.href = url;
a.download = file.name;
a.click();
window.URL.revokeObjectURL(url);


    

})