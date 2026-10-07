let combos = prompt("Olá! Digite o código do seu combo")

switch (combos) {
    case "Bug":
        alert("Hamburguer + Refri")
        break
    case "Deploy":
        alert("Pizza + Suco")
        break
    case "Sênior":
        alert("Salada + Água")
        break
        
    default:
        alert("Este combo não está disponível")
        break    
}