CREATE DATABASE Toy_Story;
USE Toy_Story;

create table filme (
id_filme int primary key auto_increment,
nome varchar(45),
data_lancamento date
);

create table personagem_favorito (
id_personagem_favorito int primary key auto_increment,
nome varchar(45)
);

create table usuario (
id_usuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar (45),
data_nascimento date,
email varchar(45),
senha varchar(45),
fk_filme int,
	foreign key (fk_filme)
		references filme(id_filme),
fk_personagem_favorito int,
	foreign key (fk_personagem_favorito)
		references personagem_favorito(id_personagem_favorito)
);