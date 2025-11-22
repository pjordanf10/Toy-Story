CREATE DATABASE Toy_Story;
USE Toy_Story;

create table filme (
id_filme int primary key auto_increment,
nome varchar(45),
data_lancamento date
);

create table usuario (
id_usuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar (45),
personagem_favorito varchar(45),
data_nascimento date,
email varchar(45),
senha varchar(45),
fk_filme int,
	foreign key (fk_filme)
		references filme(id_filme)
);

create table brinquedo (
id_brinquedo int primary key auto_increment,
nome varchar (45),
tempo_junto int,
caracteristica varchar(200),
fk_usuario int,
	foreign key (fk_usuario)
		references usuario(id_usuario)
);