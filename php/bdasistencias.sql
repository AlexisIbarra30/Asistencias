-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2021 a las 20:04:53
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdasistencias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencias`
--

CREATE TABLE `asistencias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellidos` varchar(120) NOT NULL,
  `fecha` date NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_salida` time NOT NULL,
  `horas_permanencia` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asistencias`
--

INSERT INTO `asistencias` (`id`, `nombre`, `apellidos`, `fecha`, `hora_entrada`, `hora_salida`, `horas_permanencia`) VALUES
(1, 'Luis Felipe', 'Ramirez Jerónimo', '2019-02-25', '10:20:09', '17:38:14', '07:00:00'),
(2, 'Angélica', 'Guzmán Ponce', '2019-02-26', '10:56:27', '18:55:15', '08:00:00'),
(3, 'Angélica', 'Guzmán Ponce', '2019-02-27', '09:57:45', '18:58:58', '09:00:00'),
(4, 'Luis Felipe', 'Ramirez Jerónimo', '2019-03-01', '11:14:44', '18:08:42', '07:00:00'),
(5, 'Luis Felipe', 'Ramirez Jerónimo', '2019-02-27', '09:16:41', '17:22:41', '08:00:00'),
(6, 'Angélica', 'Guzmán Ponce', '2019-03-01', '10:45:17', '19:13:52', '09:00:00'),
(7, 'Carlos', 'Ramirez Piña', '2019-02-25', '09:52:20', '18:08:37', '09:00:00'),
(8, 'Carlos', 'Ramirez Piña', '2019-02-26', '13:15:37', '18:15:35', '05:00:00'),
(9, 'Carlos', 'Ramirez Piña', '2019-02-27', '10:30:50', '18:09:30', '08:00:00'),
(10, 'Mario Alberto', 'Hernández Becerril', '2019-02-27', '11:31:09', '17:30:07', '06:00:00'),
(11, 'Nely', 'Plata Cesar', '2019-02-25', '09:10:03', '18:04:32', '09:00:00'),
(12, 'Mario Alberto', 'Hernández Becerril', '2019-02-28', '07:46:46', '15:03:52', '08:00:00'),
(13, 'Carlos', 'Ramirez Piña', '2019-02-28', '10:04:19', '19:05:54', '09:00:00'),
(14, 'Fernando', 'Rebollar Castelan', '2019-02-26', '10:34:01', '17:40:48', '07:00:00'),
(15, 'Rodrigo', 'Vidal Lopez', '2019-02-27', '10:03:46', '19:31:37', '09:00:00'),
(16, 'Adrián', 'Camacho Ramirez', '2019-02-28', '10:58:03', '18:42:46', '08:00:00'),
(17, 'Carlos', 'Ramirez Piña', '2019-03-01', '16:21:44', '18:08:52', '02:00:00'),
(18, 'Angélica', 'Guzmán Ponce', '2019-02-25', '10:06:35', '19:03:29', '09:00:00'),
(19, 'Eduardo', 'González Mora', '2019-02-26', '06:23:21', '12:27:28', '06:00:00'),
(20, 'Luis Felipe', 'Ramirez Jerónimo', '2019-02-26', '10:17:06', '17:12:38', '07:00:00'),
(21, 'Angélica', 'Guzmán Ponce', '2019-02-28', '09:57:47', '19:00:18', '10:00:00'),
(22, 'Rodrigo', 'Vidal Lopez', '2019-02-28', '09:54:18', '20:01:41', '11:00:00'),
(23, 'Rodrigo', 'Vidal Lopez', '2019-03-01', '10:15:00', '18:08:36', '08:00:00'),
(24, 'Daniela Monserrat', 'Ruiz Lopez', '2019-02-27', '09:14:18', '17:53:53', '08:00:00'),
(25, 'Benjamín', 'Sánchez Arena', '2019-02-26', '07:20:56', '16:11:37', '09:00:00'),
(26, 'Daniela Monserrat', 'Ruiz Lopez', '2019-03-01', '09:42:17', '18:03:24', '09:00:00'),
(27, 'Juana Mariel', 'Dávila Vilchis', '2019-02-25', '07:04:09', '17:04:09', '10:00:00'),
(28, 'Juana Mariel', 'Dávila Vilchis', '2019-02-26', '07:31:10', '17:12:31', '10:00:00'),
(29, 'Juan Manuel', 'Zarza González', '2019-02-26', '10:33:33', '17:56:17', '07:00:00'),
(30, 'Juan Manuel', 'Zarza González', '2019-02-27', '09:46:41', '18:39:13', '09:00:00'),
(31, 'Juana Mariel', 'Dávila Vilchis', '2019-02-27', '06:52:50', '18:22:12', '12:00:00'),
(32, 'Juana Mariel', 'Dávila Vilchis', '2019-02-28', '07:14:33', '17:52:24', '10:00:00'),
(33, 'Miguel Ángel', 'Arana González', '2019-02-27', '08:02:05', '19:29:52', '11:00:00'),
(34, 'Juana Mariel', 'Dávila Vilchis', '2019-03-01', '06:46:57', '16:23:29', '10:00:00'),
(35, 'Laurence', 'Ruiz Ugalde', '2019-02-26', '10:33:21', '14:39:54', '04:00:00'),
(36, 'Miguel Ángel', 'Arana González', '2019-02-26', '09:25:33', '17:06:39', '08:00:00'),
(37, 'Graciela', 'García Rueda', '2019-02-25', '09:36:27', '18:29:40', '09:00:00'),
(38, 'Graciela', 'García Rueda', '2019-02-26', '10:04:11', '19:56:25', '09:00:00'),
(39, 'Laurence', 'Ruiz Ugalde', '2019-02-27', '11:41:06', '14:41:54', '03:00:00'),
(40, 'Laurence', 'Ruiz Ugalde', '2019-02-28', '08:51:30', '14:38:04', '06:00:00'),
(41, 'Laurence', 'Ruiz Ugalde', '2019-03-01', '08:46:57', '14:37:30', '06:00:00'),
(42, 'Graciela', 'García Rueda', '2019-02-28', '09:34:20', '20:18:35', '11:00:00'),
(43, 'Edgar', 'Jardón Torres', '2019-02-27', '07:03:10', '20:04:54', '13:00:00'),
(44, 'Ivan', 'Francisco Valencia', '2019-02-26', '12:01:37', '18:53:39', '06:00:00'),
(45, 'Graciela', 'García Rueda', '2019-03-01', '09:36:43', '17:45:14', '08:00:00'),
(46, 'Ivan', 'Francisco Valencia', '2019-02-25', '12:02:15', '19:02:42', '07:00:00'),
(47, 'Ivan', 'Francisco Valencia', '2019-02-27', '13:01:09', '18:58:00', '05:00:00'),
(48, 'Graciela', 'García Rueda', '2019-02-27', '09:46:32', '18:42:05', '09:00:00'),
(49, 'Adriana', 'Ventolero Hernández', '2019-02-26', '09:10:52', '16:09:43', '07:00:00'),
(50, 'Adriana', 'Ventolero Hernández', '2019-02-28', '07:53:03', '16:16:29', '09:00:00'),
(51, 'Ivan', 'Francisco Valencia', '2019-02-28', '12:36:10', '18:58:11', '06:00:00'),
(52, 'Juan Alberto', 'Antonio Velazquez', '2019-02-25', '08:14:17', '18:35:35', '10:00:00'),
(53, 'Juan Alberto', 'Antonio Velazquez', '2019-02-26', '08:12:18', '18:17:19', '10:00:00'),
(54, 'Adriana', 'Ventolero Hernández', '2019-02-27', '07:59:01', '16:09:40', '09:00:00'),
(55, 'Ivan', 'Francisco Valencia', '2019-03-01', '11:37:56', '19:04:08', '08:00:00'),
(56, 'Iván', 'Tellez Echeverri', '2019-02-28', '07:26:56', '16:09:35', '09:00:00'),
(57, 'Iván', 'Tellez Echeverri', '2019-02-27', '07:21:53', '17:26:33', '10:00:00'),
(58, 'Juan Alberto', 'Antonio Velazquez', '2019-02-27', '08:07:29', '19:25:42', '11:00:00'),
(59, 'Iván', 'Tellez Echeverri', '2019-02-26', '07:23:56', '16:47:50', '09:00:00'),
(60, 'Juan Alberto', 'Antonio Velazquez', '2019-02-28', '08:12:26', '18:12:36', '10:00:00'),
(61, 'Iván', 'Tellez Echeverri', '2019-02-25', '07:32:00', '16:37:56', '09:00:00'),
(62, 'Jose Luis', 'Medina Valdés', '2019-02-28', '09:47:10', '17:14:42', '08:00:00'),
(63, 'Nely', 'Plata Cesar', '2019-02-28', '09:17:43', '17:56:00', '08:00:00'),
(64, 'Mario Alberto', 'Hernández Becerril', '2019-02-25', '07:29:24', '15:14:04', '08:00:00'),
(65, 'Jose Luis', 'Medina Valdés', '2019-02-27', '11:27:17', '19:46:44', '08:00:00'),
(66, 'Nely', 'Plata Cesar', '2019-03-01', '09:03:57', '16:22:36', '07:00:00'),
(67, 'Edgar', 'Jardón Torres', '2019-03-01', '06:54:45', '17:59:19', '11:00:00'),
(68, 'Edgar', 'Jardón Torres', '2019-02-28', '07:05:02', '20:51:14', '13:00:00'),
(69, 'José', 'Morelos Martinez', '2019-02-25', '10:48:45', '19:00:45', '09:00:00'),
(70, 'José', 'Morelos Martinez', '2019-02-26', '10:27:11', '19:00:22', '09:00:00'),
(71, 'Miguel Ángel', 'Arana González', '2019-03-01', '09:33:28', '15:29:30', '06:00:00'),
(72, 'Eduardo', 'González Mora', '2019-03-01', '06:29:03', '10:36:16', '04:00:00'),
(73, 'Adrián', 'Camacho Ramirez', '2019-02-25', '10:49:58', '17:38:03', '07:00:00'),
(74, 'Miguel Ángel', 'Arana González', '2019-02-28', '09:31:26', '16:47:26', '07:00:00'),
(75, 'Francisco', 'Manzanarez Moronores', '2019-02-27', '10:17:52', '18:24:46', '08:00:00'),
(76, 'José', 'Morelos Martinez', '2019-02-27', '10:48:19', '19:00:04', '09:00:00'),
(77, 'Miguel Ángel', 'Arana González', '2019-02-25', '09:27:35', '19:51:51', '10:00:00'),
(78, 'Juan Manuel', 'Zarza González', '2019-03-01', '12:03:58', '15:42:46', '03:00:00'),
(79, 'Juan Manuel', 'Zarza González', '2019-02-28', '10:24:21', '17:53:24', '07:00:00'),
(80, 'Francisco', 'Manzanarez Moronores', '2019-02-28', '11:37:34', '17:22:06', '06:00:00'),
(81, 'Benjamín', 'Sánchez Arena', '2019-02-27', '07:15:05', '18:16:01', '11:00:00'),
(82, 'Daniela Monserrat', 'Ruiz Lopez', '2019-02-26', '09:34:34', '17:56:27', '08:00:00'),
(83, 'Daniela Monserrat', 'Ruiz Lopez', '2019-02-25', '09:05:34', '18:11:11', '09:00:00'),
(84, 'María Guadalupe', 'Martinez Jiménez', '2019-02-27', '10:13:30', '20:56:07', '10:00:00'),
(85, 'Daniel', 'Mejía Pérez', '2019-03-01', '09:22:51', '19:14:26', '10:00:00'),
(86, 'María Guadalupe', 'Martinez Jiménez', '2019-02-26', '08:23:06', '20:00:42', '12:00:00'),
(87, 'Francisco', 'Manzanarez Moronores', '2019-03-01', '11:36:08', '18:04:52', '07:00:00'),
(88, 'María Guadalupe', 'Martinez Jiménez', '2019-02-28', '13:47:28', '20:34:05', '07:00:00'),
(89, 'Daniel', 'Mejía Pérez', '2019-02-28', '10:52:59', '19:20:40', '09:00:00'),
(90, 'Daniel', 'Mejía Pérez', '2019-02-27', '10:40:53', '18:22:31', '08:00:00'),
(91, 'Daniel', 'Mejía Pérez', '2019-02-26', '09:24:12', '19:02:03', '10:00:00'),
(92, 'Daniel', 'Mejía Pérez', '2019-02-25', '10:20:04', '19:02:29', '09:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellidos` varchar(120) NOT NULL,
  `usuario` varchar(80) NOT NULL,
  `password` varchar(130) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `usuario`, `password`) VALUES
(1, 'Alexis Ricardo', 'Ibarra Ramirez', 'alexbtr', 'pass123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asistencias`
--
ALTER TABLE `asistencias`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asistencias`
--
ALTER TABLE `asistencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
