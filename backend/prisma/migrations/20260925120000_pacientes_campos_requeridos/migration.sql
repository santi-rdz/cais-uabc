-- AlterTable
ALTER TABLE `pacientes` MODIFY `nombre` VARCHAR(255) NOT NULL,
    MODIFY `apellidos` VARCHAR(255) NOT NULL,
    MODIFY `fecha_nacimiento` DATE NOT NULL,
    MODIFY `es_externo` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `telefono` VARCHAR(30) NOT NULL,
    MODIFY `genero` VARCHAR(20) NOT NULL;
