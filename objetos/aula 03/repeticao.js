const cliente = {
    nome: "Amanda O",
    idade: 16,
    email: "Amanda@firma.com",
    telefone: ["4255555444", "42999885544"],
};

cliente.endereco = [
{
    rua: "R. Ebano Pereira",
    numero: 621,
    apartamento: true,
    complemento: "apt",
},
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);;
    }
}