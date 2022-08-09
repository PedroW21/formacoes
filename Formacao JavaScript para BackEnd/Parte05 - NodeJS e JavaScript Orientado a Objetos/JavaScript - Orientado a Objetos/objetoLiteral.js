const user = {
    nome: "Pierre",
    email: "p@p.com",
    nascimento: "2001/12/21",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
      console.log(this.nome, this.email)
    }
  }
  
  const admin = {
    nome: "Marcão",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
      console.log('curso criado!')
    }
  }
  
  Object.setPrototypeOf(admin, user)
  admin.criarCurso()
  admin.exibirInfos()
  
  
  
  
  
  