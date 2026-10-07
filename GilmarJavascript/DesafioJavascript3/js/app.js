idade = Number(prompt("Olá, aqui é a Magistril, antes de continuar queremos saber a idade"))

if (idade < 18) {
    alert("Me desculpe, tente novamente mais tarde")

} else {
    planos = prompt("Temos a nossa lista de benefícios apenas para você! Dê uma olhada: Básico | Pro | VIP")

    switch (planos) {
        case "básico":
            alert("Acesso a maioria dos cursos e notificações da plataforma")
            break
        case "pro":
            alert("Acesso a cursos pagos")
            break
        case "vip":
            alert("Atendimento prioritário e aulas online privadas")
            
    default:
        alert("Esse plano não existe")
    }
}