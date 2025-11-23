var database = require("../database/config");

function personagem() {
  var instrucaoSql = `
        select count(fk_personagem_favorito) as total, 
	    personagem_favorito.nome as nome
    from 
	    personagem_favorito join usuario
        on id_personagem_favorito = fk_personagem_favorito
	    group by personagem_favorito.nome;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function filme() {
  var instrucaoSql = `
        select count(fk_filme) as total,
	    filme.nome as nome
    from 
	    usuario join filme
        on id_filme = fk_filme
        group by filme.nome;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function idade() {
  var instrucaoSql = `
    select 
	case
    when timestampdiff(year, data_nascimento, now()) between 10 and 18
    then '10 - 18 anos'
    when timestampdiff(year, data_nascimento, now()) between 19 and 30
    then '19 - 30 anos'
    when timestampdiff(year, data_nascimento, now()) > 29
    then '30 ou mais'
    else 'Menor de 10 anos'
    end as 'faixa',
    count(*) as Quantidade
    from usuario
    group by faixa;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function kpi_filme() {
  var instrucaoSql = `
        select filme.nome as nome
    from
	    usuario join filme
        on id_filme = fk_filme
        group by filme.nome
        order by count(fk_filme) desc
        limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function kpi_personagem() {
  var instrucaoSql = `
	    select
	personagem_favorito.nome
    from
	    usuario join personagem_favorito
        on id_personagem_favorito = fk_personagem_favorito
        group by personagem_favorito.nome
        order by count(fk_personagem_favorito) desc
        limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function kpi_faixa() {
  var instrucaoSql = `
    select 
	case
    when timestampdiff(year, data_nascimento, now()) between 10 and 18
    then '10 - 18 anos'
    when timestampdiff(year, data_nascimento, now()) between 19 and 30
    then '19 - 30 anos'
    when timestampdiff(year, data_nascimento, now()) > 29
    then '30 ou mais'
    else 'Menor de 10 anos'
    end as 'faixa'
    from usuario
    group by faixa
    order by faixa
    limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  personagem,
  filme,
  idade,
  kpi_filme,
  kpi_personagem,
  kpi_faixa
};
