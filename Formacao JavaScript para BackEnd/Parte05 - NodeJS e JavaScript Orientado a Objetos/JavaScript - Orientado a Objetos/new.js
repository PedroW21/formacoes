function User(nome, email)
{
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() 
    {
        return `Nome: ${this.nome}, Email: ${this.email}`;
    }
}

//const novoUser = new User("Robertinho", "r@r.com");
//console.log(novoUser.exibirInfos());

// function Admin(role)
// {
//     User.call(this, "Carlinhos", "c@c.com");
//     this.role = role || "estudante";
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("Admin");

// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
    init: function(nome, email)
    {
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function(nome)
    {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init("Irieneu aqui meu", "j@j.com");
console.log(novoUser.exibirInfos());
// console.log(user.isPrototypeOf(novoUser)); // true