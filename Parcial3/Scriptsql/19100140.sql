-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema 19100140
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema 19100140
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `19100140` DEFAULT CHARACTER SET utf8 ;
USE `19100140` ;

-- -----------------------------------------------------
-- Table `19100140`.`libro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `19100140`.`libro` (
  `idlibro` INT NOT NULL AUTO_INCREMENT,
  `nombrelibro` VARCHAR(360) NULL,
  `gusto` TEXT NULL,
  `genero` VARCHAR(256) NULL,
  `personajefav` VARCHAR(256) NULL,
  `arcofav` VARCHAR(256) NULL,
  `adult` TINYINT NULL,
  `calificacion` INT NULL,
  `recomendacion` TINYINT NULL,
  PRIMARY KEY (`idlibro`))
ENGINE = InnoDB;
INSERT INTO `19100140`.libro (`idlibro`,`nombrelibro`,`gusto`,`genero`,`personajefav`,`arcofav`,`adult`,`calificacion`,`recomendacion`) VALUES (1,'El heroe de las mil cara','Es muy entretenido','Aventura','Heroe','La caida del heroe',1,98,1);
INSERT INTO `19100140`.libro (`idlibro`,`nombrelibro`,`gusto`,`genero`,`personajefav`,`arcofav`,`adult`,`calificacion`,`recomendacion`) VALUES (2,'Dune','Es de accion en el espacio','Avetura','Paul','Ataque a la casa atreidis',1,87,1);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
