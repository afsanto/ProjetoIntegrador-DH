const fs = require('fs');
const path = require('path');
const cadastroJson= path.join('cadastro.json')

const cadastroController ={
    viewForm: (req,res)=>{
        res.render('cadastro');

    },

    saveForm:(req,res)=>{       

        let nome = req.body;

        let sobrenome = req.body;

        let email = req.body;

        let nascimento = req.body;

        let telefone = req.body;  
        
        let cpf = req.body;

        let password = req.body;  

        let dadosJson = JSON.stringify({nome, sobrenome, email, nascimento, telefone, cpf, password});
        fs.writeFileSync(cadastroJson, dadosJson);

        res.redirect('/cadastro/sucesso');
       
    },

    sucesso: (req,res)=>{
        res.render('sucesso'); 
    }
   
};

module.exports= cadastroController;
