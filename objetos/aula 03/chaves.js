const cliente = {
    nome: "Amanda O",
    idade: 16,
    email: "Amanda@firma.com",
    telefone: ["4255555444", "42999885544"],
};

/*
cliente.endereco = [
{
    rua: "R. Ebano Pereira",
    numero: 621,
    apartamento: true,
    complemento: "apt",
},
];
*/


const ChavesDoObjeto = Object.keys(cliente);
console.log(ChavesDoObjeto);

if (!ChavesDoObjeto.includes("endereco")){
    console.log("Erro, é necessário ter um endereço cadastrado");
}



























































































































































