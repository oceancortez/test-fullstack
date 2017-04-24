/*Criar um modelo de dados com uma tabela de cadastro de usuários que contenha os seguintes campos:
Id
Nome (Obrigatório)
Email (Obrigatório e válido)
Telefone (Obrigatório)
Sexo (Obrigatório)
*/

DROP DATABASE IF EXISTS test_fullstack;

CREATE DATABASE IF NOT EXISTS test_fullstack;

USE test_fullstack;

CREATE TABLE `test_fullstack`.`user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `telephone` VARCHAR(100) NOT NULL,
  `sex` VARCHAR(100) NOT NULL,

  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

select * from test_fullstack.user;

INSERT INTO `test_fullstack`.`user` (`name`, `email`, `telephone`, `sex`) VALUES ('test_fullstack', 'test_fullstack@test_fullstack.com', '11999998888', 'M');
INSERT INTO `test_fullstack`.`user` (`name`, `email`, `telephone`, `sex`) VALUES ('test_fullstack_1', 'test_fullstack_1@test_fullstack.com', '11999998888', 'M');
