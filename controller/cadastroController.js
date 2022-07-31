const cadastroController ={
    viewForm: (req,res)=>{
        res.render('cadastro');

    },

    saveForm:(req,res)=>{
        let {nome, sobrenome, email}=
        req.body;

        let nascimento = req.body;

        let telefone = req.body;  
        
        let cpf = req.body;

        let password = req.body;  


        res.redirect('/cadastro/sucesso');
       
    },

    sucesso: (req,res)=>{
        res.render('/sucesso'); 
    }
   
};

module.exports= cadastroController;
