let items = []
let option 

while (option != 3){ 

    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))


    switch(option){ 
        case 1:
            let item = prompt('Digite o item a ser cadastrado')
            items.push(item)
            break;
            
        case 2: 
        if(items.length == 0){ 
            alert('Não existe itens cadastrados')
        }else{
            alert(items)
        }
        break;
        
        case 3: { 
            alert('Até a próxima, tchal tchal :D')
            break;
        }
        default:
        alert('Opção invalida. tente novamente')
    
    } 
}