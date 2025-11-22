CREATE DATABASE Toy_Story;
USE Toy_Story;

CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
sobrenome VARCHAR(45),
personagem_favorito VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE quiz (
id_quiz INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE boneco (
id_boneco INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
tempo_junto INT,
caracteristicas VARCHAR(200),
fk_usuario INT,
	FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id_usuario)
);

CREATE TABLE tentativas (
id_tentativas INT PRIMARY KEY AUTO_INCREMENT,
fk_usuario INT,
	FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id_usuario),
fk_quiz INT,
	FOREIGN KEY (fk_quiz)
		REFERENCES quiz(id_quiz)
);