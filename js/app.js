let totalGeral = 0
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0";

function adicionar(){
    // Recuperar valores do HTML (Nome, Qtd, Valor)
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-") [0];
    let valorUnitario = produto.split("R$") [1];
    let quantidade = document.getElementById("quantidade").value
    // Calcular o valor da compra
    let preco = quantidade * valorUnitario;
    // Adicionar ao carrinho
    if(quantidade >= 1){
        let carrinho = document.getElementById("lista-produtos")
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${valorUnitario}</span>
        </section>`;
    }
    // Atualizar o valor da compra
        totalGeral = totalGeral + preco 
        let campoTotal = document.getElementById("valor-total")
        campoTotal.textContent = `R$ ${totalGeral}`;    
        document.getElementById("quantidade").value = 0
}


function limpar(){
    let totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
}