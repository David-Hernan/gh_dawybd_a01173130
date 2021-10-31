-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-10-2021 a las 22:10:05
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `medicinas`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarMedicina` (IN `nombre` VARCHAR(50) CHARSET utf8, IN `funcion` VARCHAR(100) CHARSET utf8, IN `indice_bodega` INT(11))  INSERT INTO muestras (nombre, funcion, indice_bodega) VALUES(nombre,funcion,indice_bodega)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodega`
--

CREATE TABLE `bodega` (
  `indice_bodega` int(11) NOT NULL,
  `nombre_bodega` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `bodega`
--

INSERT INTO `bodega` (`indice_bodega`, `nombre_bodega`, `created_at`) VALUES
(1, 'caja1', '2021-10-09 19:43:50'),
(2, 'estante1', '2021-10-09 19:43:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestras`
--

CREATE TABLE `muestras` (
  `indice_medicinas` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `funcion` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `indice_bodega` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `muestras`
--

INSERT INTO `muestras` (`indice_medicinas`, `nombre`, `funcion`, `indice_bodega`, `created_at`) VALUES
(1, 'vicodin', 'La medicina del doctor House', 1, '2021-10-09 19:46:34'),
(2, 'Imodium', 'Opioide contra la diarrea', 2, '2021-10-09 19:46:34'),
(3, 'Vitacilina', '¡Ah qué buena medicina!', 2, '2021-10-09 19:46:34'),
(4, 'Vicks', 'Mejora los síntomas de congestión nasal', 1, '2021-10-09 23:34:21'),
(5, 'Clobazam', 'Fármaco anticonvulsivante', 2, '2021-10-09 23:41:10'),
(6, 'Paracetamol', 'Para el dolor', 2, '2021-10-10 00:23:48'),
(21, 'Epinefrina', 'Es adrenalina', 1, '2021-10-10 21:19:37'),
(24, 'Buscapina', 'Alivia molestias estomacales', 1, '2021-10-20 02:20:14'),
(25, 'amoxicilina', 'tratar infecciones de las vías respiratorias', 2, '2021-10-30 20:03:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre_completo` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_completo`, `username`, `password`, `created_at`) VALUES
(1, 'Miguel ', 'miguel_hidalgo', '$2a$12$rvlETb48jozx9jg6k8vmWu5.CweiyQObqkGtvF66km6vACg/dWNpS', '2021-10-10 21:24:03'),
(2, 'administrador', 'admin', '$2a$12$xHTLzCShFs6GXntALPc/Juplx04iLwT.1xZND6hon2kLHt6Kmx7Fu', '2021-10-10 21:25:24'),
(3, 'Luis Miguel Gómez Santi', 'luis', '$2a$12$zPoLGdzP3cNuwwfHUVSwj.bgrH3mhM2C2LcpfubCD0QXJ6oTW1VnO', '2021-10-10 22:37:23'),
(4, 'el chavo del 8', 'chavito', '$2a$12$mPz5LrY8T/NF6xT9tI5fi.xJwrANj2KgcWcOQJFP6qCJamV.9FNo.', '2021-10-10 23:04:18'),
(5, 'chilindrina', 'chilindrina', '$2a$12$y55.VJzTomyBama9x/s/deQHj6.BQoo2L0BC3Zn4Hw8pGu3dWeUGy', '2021-10-10 23:28:35');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bodega`
--
ALTER TABLE `bodega`
  ADD PRIMARY KEY (`indice_bodega`);

--
-- Indices de la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD PRIMARY KEY (`indice_medicinas`),
  ADD KEY `for_indice_bodega` (`indice_bodega`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bodega`
--
ALTER TABLE `bodega`
  MODIFY `indice_bodega` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `muestras`
--
ALTER TABLE `muestras`
  MODIFY `indice_medicinas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD CONSTRAINT `muestras_ibfk_1` FOREIGN KEY (`indice_bodega`) REFERENCES `bodega` (`indice_bodega`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
