const {sequelize, Imagem} = require('./database/models/index');



async function buscaImagens(){
    const al = await Imagem.findAll();
    console.log(al.map(a=>a.toJSON()));
}


async function criaVariasImagens(){
    const alu = await Imagem.bulkCreate([{
        url:'../images/Sousplats/1.PNG',
        produto_id: 74
        
    },
       
    {
        url:'../images/Sousplats/2.PNG',
        produto_id: 75
    },

    {
        url:'../images/Sousplats/3.PNG',
        produto_id: 76
    },

    {
        url:'../images/Sousplats/4.PNG',
        produto_id: 77
        
    },
       
    {
        url:'../images/Sousplats/5.PNG',
        produto_id: 78
    },

    {
        url:'../images/Sousplats/6.PNG',
        produto_id: 79
    },

    {
        url:'../images/Sousplats/7.PNG',
        produto_id: 80
        
    },
       
    {
        url:'../images/Sousplats/8.PNG',
        produto_id: 81
    },

    {
        url:'../images/Sousplats/9.PNG',
        produto_id: 82
    },

    {
        url:'../images/Sousplats/10.PNG',
        produto_id: 83
        
    },
       
    {
        url:'../images/Sousplats/11.PNG',
        produto_id: 84
    },

    {
        url:'../images/Sousplats/12.PNG',
        produto_id: 85
    },

    /*{
        url:'../images/PratoSobremesas/13.PNG',
        produto_id: 62
        
    },
       
    {
        url:'../images/PratoSobremesas/14.PNG',
        produto_id: 63
    },

    {
        url:'../images/PratoSobremesas/15.PNG',
        produto_id: 64
    },

    {
        url:'../images/PratoSobremesas/16.PNG',
        produto_id: 65
        
    },
       
    {
        url:'../images/PratoSobremesas/17.PNG',
        produto_id: 66
    },

    {
        url:'../images/PratoSobremesas/18.PNG',
        produto_id: 67
    },

    {
        url:'../images/PratoSobremesas/19.PNG',
        produto_id: 68
        
    },
       
    {
        url:'../images/PratoSobremesas/20.PNG',
        produto_id: 69
    },

    {
        url:'../images/PratoSobremesas/21.PNG',
        produto_id: 70
    },

    {
        url:'../images/PratoSobremesas/22.PNG',
        produto_id: 71
        
    },
       
    {
        url:'../images/PratoSobremesas/23.PNG',
        produto_id: 72
    },

    {
        url:'../images/PratoSobremesas/24.PNG',
        produto_id: 73
    }*/




]);
    console.log(alu);
}


//buscaImagens();
criaVariasImagens();