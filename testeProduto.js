const {sequelize, Produto} = require('./database/models/index');


async function criaVariosProdutos(){
    const alu = await Produto.bulkCreate([{
        nome: 'PRATO DE BOLO SEM PÉ BOUQUET GARNI VERDE SECO - COLEÇÃO ERVAS Ø 41CM',
        preco: 914.66,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 20,
        descricao: 'Os verdes da Coleção Ervas vão encher a sua mesa de cor. Mas não é tudo verde? Ah, mas não é um verde só: tem verde vivo, verde suave, verde fresco e verde seco. Umas lindezas! A coleção está cheia de novidades, mas continua com aquela característica marcante das minhas produções: o tom de garimpo que deixa a mesa superexclusiva.',
        categoria_id: 4
        
    },

    {
        nome: 'CONJUNTO C/ 6 SOUSPLAT WINDSOR Ø 34 CM',
        preco:  709.66,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 10,
        descricao: 'A Porto Brasil buscou inspiração no passado medieval para criar a linha Windsor. Com sua pintura desgastada e rústica, a linha Windsor transmite os ares da antiga monarquia, quando reis e rainhas viviam em castelos como o de Windsor que eram rústicos e transmitiam a sensação de força e proteção. Deixe a realeza fazer parte de sua mesa.',
        categoria_id: 4 
    },

    {
        nome: 'PRATO DE BOLO MARRAKECH PIMENTA-ROSA - PANELINHA Ø 31 CM - CONJUNTO C/ 6,',
        preco: 821.76,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 20,
        descricao: 'Rita Lobo lança novas peças da Coleção Especiarias, do Acervo Panelinha. Depois do sucesso do lançamento da Coleção Especiarias, que chegou às lojas em abril deste ano, a chef Rita Lobo traz uma surpresa para o Natal: novos produtos do Acervo Panelinha, sua marca de louças, que agora já tem 23 peças. Tem mais duas cores, soluções para todos os perfis de público e um Especial de Natal estrelado pelas louças, com receitas deliciosas',
        categoria_id: 4
    },

    {
        nome: 'SOUSPLAT RASO BARBECUE - 101 - CONJUNTO C/ 6',
        preco: 421.76,
        marca: 'Alleanza',
        qtdeEmEstoque: 10,
        descricao: 'Peças elaboradas em cerâmica Feldspática branca de alta resistência, com processo de decoração digital, sobre a base branca',
        categoria_id: 4
        
    },

    {
        nome: 'SOUSPLAT ALLEANZA RENDA - CONJUNTO C/ 6',
        preco:  421.76,
        marca: 'Alleanza',
        qtdeEmEstoque: 14,
        descricao: 'Peças elaboradas em cerâmica Feldspática branca de alta resistência, com processo de decoração digital, sobre a base branca.',
        categoria_id: 4 
    },

    {
        nome: 'CONJUNTO DE 6 SOUSPLAT FREEDOM',
        preco: 421.76,
        marca: 'Alleanza',
        qtdeEmEstoque: 25,
        descricao: 'Acredito que não teria melhor maneira em descrever a liberdade do que foi colocado nessa linha freedom da alleanza. Em uma cor super linda, onde é visto a liberdade em cada detalhe e a cada traço, pelos pássaros e gaiolas que foram colocados de forma delicada.',
        categoria_id: 4
    },

    {
        nome: 'SOUSPLAT 27CM PORCELANA Schmidt - MÁRMORE CINZA',
        preco: 221.76,
        marca: 'Le Creuset',
        qtdeEmEstoque: 17,
        descricao: 'A ousadia dos traços da pedra mármore e a tradição da cor cinza na porcelana. Cada sousplat possui 27cm de diâmetro, o que é o ideal para as principais refeições do dia.',
        categoria_id: 4
        
    },

    {
        nome: 'SOUSPLAT 29CM RAMALHETE',
        preco: 51.70,
        marca: 'Alleanza',
        qtdeEmEstoque: 60,
        descricao: 'Peças elaboradas em cerâmica Feldspática branca de alta resistência, com processo de decoração digital, sobre a base branca.',
        categoria_id: 4 
    },

    {
        nome: 'SOUSPLAT CERÂMICA NATAL FATHER CHRISTMAS Ø28cm',
        preco: 64.56,
        marca: 'Alleanza',
        qtdeEmEstoque: 30,
        descricao: 'Peças elaboradas em cerâmica Feldspática branca de alta resistência, com processo de decoração digital, sobre a base branca.É recomendado utilizar sabão, detergente e uma esponja macia.',
        categoria_id: 4
    },

    {
        nome: 'SOUSPLAT ACQUA FISH 6 PEÇAS - ALLEANZA',
        preco: 194.56,
        marca: 'Alleanza',
        qtdeEmEstoque: 25,
        descricao: 'Produto fabricado de Cerâmica Feldspática branca de alta resistência, possui um processo de decoração digital e não libera substâncias tóxicas.',
        categoria_id: 4
        
    },

    {
        nome: 'SOUSPLAT BEER NOVO CERÂMICA ACETINADO 28,5CM',
        preco: 74.56 ,
        marca: 'Wolff',
        qtdeEmEstoque: 44,
        descricao: 'A beleza desse item é daquelas que conferem bons sentimentos e significados ao ambiente. Crie em sua mesa a sua história.',
        categoria_id: 4 
    },

    {
        nome: 'SOUSPLAT CAPRI AZUL E BRANCO CERÂMICA 32,5CM',
        preco: 66.52,
        marca: 'Monte Sião',
        qtdeEmEstoque: 40,
        descricao: 'A beleza desse item é daquelas que conferem bons sentimentos e significados ao ambiente. Crie em sua mesa a sua história.',
        categoria_id: 4
    }




]);
    console.log(alu);
}





async function buscaProdutos(){
    const al = await Produto.findAll();
    console.log(al.map(a=>a.toJSON()));
}


async function buscaProdutosCompra(){
    const al = await Produto.findByPk(1,{include:['produto_compra']});
    console.log(al.toJSON());
}



//buscaProdutos();

//buscaProdutosCompra();

criaVariosProdutos();
