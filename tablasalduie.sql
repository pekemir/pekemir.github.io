-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-01-2022 a las 06:19:56
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tablasalduie`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificacion primera`
--

CREATE TABLE `clasificacion primera` (
  `id` int(11) NOT NULL,
  `escudoesquipo` text NOT NULL,
  `nombreequipo` text NOT NULL,
  `partidosj` int(11) NOT NULL,
  `partidosg` int(11) NOT NULL,
  `partidose` int(11) NOT NULL,
  `partidosp` int(11) NOT NULL,
  `golesf` int(11) NOT NULL,
  `golesc` int(11) NOT NULL,
  `difgoles` int(11) NOT NULL,
  `puntos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clasificacion primera`
--

INSERT INTO `clasificacion primera` (`id`, `escudoesquipo`, `nombreequipo`, `partidosj`, `partidosg`, `partidose`, `partidosp`, `golesf`, `golesc`, `difgoles`, `puntos`) VALUES
(1, 'escudosanviI', 'UA-SAN VICENTE', 6, 5, 1, 0, 26, 11, 15, 16),
(2, 'escudoxaloc', 'CH XALOC', 6, 4, 2, 0, 23, 4, 19, 14),
(3, 'escudohonig', 'HONIGVÖGEL HH 79', 6, 3, 1, 2, 17, 17, 0, 10),
(4, 'escudovalencia', 'VALENCIA CH', 6, 2, 3, 1, 17, 16, 1, 9),
(5, 'escudocarpesa', 'CH CARPESA', 6, 2, 1, 3, 17, 13, 4, 7),
(6, 'escudoginer', 'CD GINER DE LOS RÍOS', 5, 0, 0, 5, 0, 15, -15, 0),
(7, 'escudosalduie', 'HOCKEY SALDUIE 78', 5, 0, 0, 5, 3, 27, -24, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificacion_primera`
--

CREATE TABLE `clasificacion_primera` (
  `id` int(11) NOT NULL,
  `escudoesquipo` text NOT NULL,
  `nombreequipo` text NOT NULL,
  `partidosj` int(11) NOT NULL,
  `partidosg` int(11) NOT NULL,
  `partidose` int(11) NOT NULL,
  `partidosp` int(11) NOT NULL,
  `golesf` int(11) NOT NULL,
  `golesc` int(11) NOT NULL,
  `difgoles` int(11) NOT NULL,
  `puntos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clasificacion_primera`
--

INSERT INTO `clasificacion_primera` (`id`, `escudoesquipo`, `nombreequipo`, `partidosj`, `partidosg`, `partidose`, `partidosp`, `golesf`, `golesc`, `difgoles`, `puntos`) VALUES
(1, 'escudosanviI', 'UA-SAN VICENTE', 6, 5, 1, 0, 26, 11, 15, 16),
(2, 'escudoxaloc', 'CH XALOC', 6, 4, 2, 0, 23, 4, 19, 14),
(3, 'escudohonig', 'HONIGVÖGEL HH 79', 6, 3, 1, 2, 17, 17, 0, 10),
(4, 'escudovalencia', 'VALENCIA CH', 6, 2, 3, 1, 17, 16, 1, 9),
(5, 'escudocarpesa', 'CH CARPESA', 6, 2, 1, 3, 17, 13, 4, 7),
(6, 'escudoginer', 'CD GINER DE LOS RÍOS', 5, 0, 0, 5, 0, 15, -15, 0),
(7, 'escudosalduie', 'HOCKEY SALDUIE 78', 5, 0, 0, 5, 3, 27, -24, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticiasweb`
--

CREATE TABLE `noticiasweb` (
  `id` int(11) NOT NULL,
  `titulo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `noticiacorta` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `noticiaentera` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagenes` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `enlaces` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `noticiasweb`
--

INSERT INTO `noticiasweb` (`id`, `titulo`, `noticiacorta`, `noticiaentera`, `imagenes`, `enlaces`, `fecha`) VALUES
(1, 'Fin de la primera vuelta', 'Con la disputa de la 5ª jornada y a falta de disputar el partido aplazado contra...\r\n			', 'Con la disputa de la 5ª jornada y a falta de disputar el partido aplazado contra el CD Giner de los ríos termina la primera vuelta de la 1ª división masculina de hockey hierba. \n				Después de contar como derrotas los partidos disputados, contando en cada uno de ellos con muchas bajas, esperemos sirva este parón para recuperar jugadores y preparar al equipo física y mentalmente para la segunda vuelta, que seguro será emocionante a la par de dura. El equipo situado como colista deberá mejorar esta posición para conseguir el objetivo de la permanencia marcado a principio de temporada.\n				Mientras ,tanto el equipo Senior como el equipo Juvenil disputaran sus respectivas competiciones en la modalidad de Sala, intentando así hacerse un hueco para disputar las fases sectores para el Campeonato de España de dicha modalidad.\n			', 'noticia1.jpg,noticia1f1.jpg', '', '14/11/2021'),
(2, 'Segunda Jornada JJEE', 'Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Aragón...	', 'Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Aragón, los partidos daran comienzo a las 09:15, aunque los nuestros no jugaran hasta las 10:15, donde los conjuntos alevines y de iniciacion disputaran sus encuentros simultaneamente, los primeros contra el Honigvoguel y los segundos frente al Voguel.,\r\n				Desde aqui animamos a la gente a que acuda al campo, para poder disfrutar de otra jornada de hockey, y como no a nuestros equipos que poco a poco van cogiendo conceptos y ritmo de partido.			', 'noticia2.jpg,noticia2f1.jpg', '', '19/11/2021'),
(3, 'Resultados fin de semana', 'Este fin de semana se ha disputado la segunda jornada de los JJEE de Aragón...,\r\n			', 'Este fin de semana se ha disputado la segunda jornada de los JJEE de Aragón, donde nuestros equipos no han podido sumar sus partidos como victorias.,\r\n				A las 10:15 daban comienzo los partidos de alevines e iniciacion, en el primer campo los pupilos de Jorge Oteo caian contra el Vogel, un partido apasionante para los nuestros porque aunqe caian el primeros tres cuartos, en el ultimo conseguian anotar el primer gol en esta competicion para ellos y asi llevarse este ultimo cuarto, el resultado final fue de 3 a 1. ,\r\n				Al mismo tiempo nuestros alevines entrenados por Antonio Oteo no podian superar al Honigvogel cayendo por 6-0 en un encuetro que seguro ha servido para afianzar conceptos y obtener experiencia en los partidos.,\r\n				Animamos a ambos equipos porque, pese a los resultados, estan consiguiendo mejorar notablemente, y cada vez se ven mas destellos de Hockey.\r\n			', 'noticia3.jpg,noticia3f1.jpg,noticia3f2.jpg', '', '22/11/2021'),
(4, 'Acuerdo cooperación con Chocolates Lacasa,\r\n			', 'Recientemente se ha cerrado un acuerdo de cooperación con Chocolates...,\r\n			', 'Recientemente se ha cerrado un acuerdo de cooperacion con Chocolates Lacasa, este acuerdo no se podria haber llevado a cabo sin las conversaciones llevadas a cargo de Carla Berned.,\r\n				Los valores familiares tanto de Chocolates Lacasa como del club han hecho que este acuerdo fuera posible.,\r\n				Proximamente realizaremos un sorteo, con algunos de sus productos y merchandising del club para agradecerles su confianza, ¡estar atentos!,\r\n				Os dejamos un enlace de nuestra promo con Chocolates Lacasa\r\n			', 'noticia4.jpg,noticia4f1.jpg,noticia4f2.jpg', 'https://www.instagram.com/p/CWl8FTeDuIm/\r\n			', '01/10/2021'),
(5, 'Campeonato de Aragón de Hockey Sala\",	', 'Este Domingo 19 de Diciembre dará comienzo la liga aragonesa de ...', 'Este Domingo 19 de Diciembre dará comienzo la liga aragonesa de Hockey sala, el primer encuentro dará lugar en el CDM Delicias a las 9:00.\r\nDe esta manera se da el pistoletazo inicial a la temporada de Sala para los seniors, esperemos sea beneficiosa para el club tanto en resultados como en sensaciones.\r\nOs animamos a todos a que os acerquéis al pabellón para animar a vuestro equipo.\r\nFINALMENTE ESTE PARTIDO QUEDA APLAZADO A LA ESPERA DE NUEVA FECHA.\r\n				', 'noticia5.jpg', '', '17/12/2021'),
(6, 'FELIZ NAVIDAD!', 'Todo el club de Salduie queremos desearos una  feliz Navidad', '\r\nTodo el club de Salduie queremos desearos una  feliz Navidad, que paséis unos días estupendos, llenos de alegría, emoción y felicidad.\r\nTambién, como ya sabéis, debemos seguir siendo prudentes, las cosas no están bien con la pandemia , así que vamos a ser todos responsables. \r\nGracias a todos los que nos estáis apoyando, a todos nuestros amigos, familiares y seguidores. \r\nGracias a todos los jugadores, desde los más peques  a los más adultos, por que sin vosotros, esto no tendría ningún sentido. \r\nBrindemos todos por un año más, por seguir creciendo y por seguir luchando por y para esta pequeña gran familia que es Salduie. \r\nDe todo corazón, os queremos desear una Feliz Navidad.', 'noticia6f1.jpg,noticia6f2.jpg,noticia6f3.jpg,noticia6f4.jpg', '', '24/12/2021'),
(7, 'FELIZ NAVIDAD!', 'Todo el club de Salduie queremos desearos una  feliz Navidad', '\r\nTodo el club de Salduie queremos desearos una  feliz Navidad, que paséis unos días estupendos, llenos de alegría, emoción y felicidad.\r\nTambién, como ya sabéis, debemos seguir siendo prudentes, las cosas no están bien con la pandemia , así que vamos a ser todos responsables. \r\nGracias a todos los que nos estáis apoyando, a todos nuestros amigos, familiares y seguidores. \r\nGracias a todos los jugadores, desde los más peques  a los más adultos, por que sin vosotros, esto no tendría ningún sentido. \r\nBrindemos todos por un año más, por seguir creciendo y por seguir luchando por y para esta pequeña gran familia que es Salduie. \r\nDe todo corazón, os queremos desear una Feliz Navidad.', 'noticia6f1.jpg,noticia6f2.jpg,noticia6f3.jpg,noticia6f4.jpg', '', '24/12/2021'),
(8, 'Fin de la primera vuelta', 'Con la disputa de la 5ª jornada y a falta de disputar el partido aplazado contra...\r\n			', 'Con la disputa de la 5ª jornada y a falta de disputar el partido aplazado contra el CD Giner de los ríos termina la primera vuelta de la 1ª división masculina de hockey hierba. \r\n				Después de contar como derrotas los partidos disputados, contando en cada uno de ellos con muchas bajas, esperemos sirva este parón para recuperar jugadores y preparar al equipo física y mentalmente para la segunda vuelta, que seguro será emocionante a la par de dura. El equipo situado como colista deberá mejorar esta posición para conseguir el objetivo de la permanencia marcado a principio de temporada.\r\n				Mientras ,tanto el equipo Senior como el equipo Juvenil disputaran sus respectivas competiciones en la modalidad de Sala, intentando así hacerse un hueco para disputar las fases sectores para el Campeonato de España de dicha modalidad.\r\n			', 'noticia1.jpg,noticia1f1.jpg', '', '14/11/2021'),
(9, 'Segunda Jornada JJEE', 'Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Aragón...	', 'Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Aragón, los partidos daran comienzo a las 09:15, aunque los nuestros no jugaran hasta las 10:15, donde los conjuntos alevines y de iniciacion disputaran sus encuentros simultaneamente, los primeros contra el Honigvoguel y los segundos frente al Voguel.,\r\n				Desde aqui animamos a la gente a que acuda al campo, para poder disfrutar de otra jornada de hockey, y como no a nuestros equipos que poco a poco van cogiendo conceptos y ritmo de partido.			', 'noticia2.jpg,noticia2f1.jpg', '', '19/11/2021'),
(10, 'Resultados fin de semana', 'Este fin de semana se ha disputado la segunda jornada de los JJEE de Aragón...,\r\n			', 'Este fin de semana se ha disputado la segunda jornada de los JJEE de Aragón, donde nuestros equipos no han podido sumar sus partidos como victorias.,\r\n				A las 10:15 daban comienzo los partidos de alevines e iniciacion, en el primer campo los pupilos de Jorge Oteo caian contra el Vogel, un partido apasionante para los nuestros porque aunqe caian el primeros tres cuartos, en el ultimo conseguian anotar el primer gol en esta competicion para ellos y asi llevarse este ultimo cuarto, el resultado final fue de 3 a 1. ,\r\n				Al mismo tiempo nuestros alevines entrenados por Antonio Oteo no podian superar al Honigvogel cayendo por 6-0 en un encuetro que seguro ha servido para afianzar conceptos y obtener experiencia en los partidos.,\r\n				Animamos a ambos equipos porque, pese a los resultados, estan consiguiendo mejorar notablemente, y cada vez se ven mas destellos de Hockey.\r\n			', 'noticia3.jpg,noticia3f1.jpg,noticia3f2.jpg', '', '22/11/2021'),
(11, 'Acuerdo cooperación con Chocolates Lacasa,\r\n			', 'Recientemente se ha cerrado un acuerdo de cooperación con Chocolates...,\r\n			', 'Recientemente se ha cerrado un acuerdo de cooperacion con Chocolates Lacasa, este acuerdo no se podria haber llevado a cabo sin las conversaciones llevadas a cargo de Carla Berned.,\r\n				Los valores familiares tanto de Chocolates Lacasa como del club han hecho que este acuerdo fuera posible.,\r\n				Proximamente realizaremos un sorteo, con algunos de sus productos y merchandising del club para agradecerles su confianza, ¡estar atentos!,\r\n				Os dejamos un enlace de nuestra promo con Chocolates Lacasa\r\n			', 'noticia4.jpg,noticia4f1.jpg,noticia4f2.jpg', 'https://www.instagram.com/p/CWl8FTeDuIm/\r\n			', '01/10/2021'),
(12, 'Campeonato de Aragón de Hockey Sala\",	', 'Este Domingo 19 de Diciembre dará comienzo la liga aragonesa de ...', 'Este Domingo 19 de Diciembre dará comienzo la liga aragonesa de Hockey sala, el primer encuentro dará lugar en el CDM Delicias a las 9:00.\r\nDe esta manera se da el pistoletazo inicial a la temporada de Sala para los seniors, esperemos sea beneficiosa para el club tanto en resultados como en sensaciones.\r\nOs animamos a todos a que os acerquéis al pabellón para animar a vuestro equipo.\r\nFINALMENTE ESTE PARTIDO QUEDA APLAZADO A LA ESPERA DE NUEVA FECHA.\r\n				', 'noticia5.jpg', '', '17/12/2021'),
(13, 'FELIZ NAVIDAD!', 'Todo el club de Salduie queremos desearos una  feliz Navidad', '\r\nTodo el club de Salduie queremos desearos una  feliz Navidad, que paséis unos días estupendos, llenos de alegría, emoción y felicidad.\r\nTambién, como ya sabéis, debemos seguir siendo prudentes, las cosas no están bien con la pandemia , así que vamos a ser todos responsables. \r\nGracias a todos los que nos estáis apoyando, a todos nuestros amigos, familiares y seguidores. \r\nGracias a todos los jugadores, desde los más peques  a los más adultos, por que sin vosotros, esto no tendría ningún sentido. \r\nBrindemos todos por un año más, por seguir creciendo y por seguir luchando por y para esta pequeña gran familia que es Salduie. \r\nDe todo corazón, os queremos desear una Feliz Navidad.', 'noticia6f1.jpg,noticia6f2.jpg,noticia6f3.jpg,noticia6f4.jpg', '', '24/12/2021'),
(14, 'Fin de la primera vuelta', 'Con la disputa de la 5ª jornada y a falta de disputar el partido aplazado contra...\r\n			', 'Con la disputa de la 5ª jornada y a falta de disputar el partido aplazado contra el CD Giner de los ríos termina la primera vuelta de la 1ª división masculina de hockey hierba. \r\n				Después de contar como derrotas los partidos disputados, contando en cada uno de ellos con muchas bajas, esperemos sirva este parón para recuperar jugadores y preparar al equipo física y mentalmente para la segunda vuelta, que seguro será emocionante a la par de dura. El equipo situado como colista deberá mejorar esta posición para conseguir el objetivo de la permanencia marcado a principio de temporada.\r\n				Mientras ,tanto el equipo Senior como el equipo Juvenil disputaran sus respectivas competiciones en la modalidad de Sala, intentando así hacerse un hueco para disputar las fases sectores para el Campeonato de España de dicha modalidad.\r\n			', 'noticia1.jpg,noticia1f1.jpg', '', '14/11/2021'),
(15, 'Segunda Jornada JJEE', 'Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Aragón...	', 'Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Aragón, los partidos daran comienzo a las 09:15, aunque los nuestros no jugaran hasta las 10:15, donde los conjuntos alevines y de iniciacion disputaran sus encuentros simultaneamente, los primeros contra el Honigvoguel y los segundos frente al Voguel.,\r\n				Desde aqui animamos a la gente a que acuda al campo, para poder disfrutar de otra jornada de hockey, y como no a nuestros equipos que poco a poco van cogiendo conceptos y ritmo de partido.			', 'noticia2.jpg,noticia2f1.jpg', '', '19/11/2021'),
(16, 'Resultados fin de semana', 'Este fin de semana se ha disputado la segunda jornada de los JJEE de Aragón...,\r\n			', 'Este fin de semana se ha disputado la segunda jornada de los JJEE de Aragón, donde nuestros equipos no han podido sumar sus partidos como victorias.,\r\n				A las 10:15 daban comienzo los partidos de alevines e iniciacion, en el primer campo los pupilos de Jorge Oteo caian contra el Vogel, un partido apasionante para los nuestros porque aunqe caian el primeros tres cuartos, en el ultimo conseguian anotar el primer gol en esta competicion para ellos y asi llevarse este ultimo cuarto, el resultado final fue de 3 a 1. ,\r\n				Al mismo tiempo nuestros alevines entrenados por Antonio Oteo no podian superar al Honigvogel cayendo por 6-0 en un encuetro que seguro ha servido para afianzar conceptos y obtener experiencia en los partidos.,\r\n				Animamos a ambos equipos porque, pese a los resultados, estan consiguiendo mejorar notablemente, y cada vez se ven mas destellos de Hockey.\r\n			', 'noticia3.jpg,noticia3f1.jpg,noticia3f2.jpg', '', '22/11/2021'),
(17, 'Acuerdo cooperación con Chocolates Lacasa,\r\n			', 'Recientemente se ha cerrado un acuerdo de cooperación con Chocolates...,\r\n			', 'Recientemente se ha cerrado un acuerdo de cooperacion con Chocolates Lacasa, este acuerdo no se podria haber llevado a cabo sin las conversaciones llevadas a cargo de Carla Berned.,\r\n				Los valores familiares tanto de Chocolates Lacasa como del club han hecho que este acuerdo fuera posible.,\r\n				Proximamente realizaremos un sorteo, con algunos de sus productos y merchandising del club para agradecerles su confianza, ¡estar atentos!,\r\n				Os dejamos un enlace de nuestra promo con Chocolates Lacasa\r\n			', 'noticia4.jpg,noticia4f1.jpg,noticia4f2.jpg', 'https://www.instagram.com/p/CWl8FTeDuIm/\r\n			', '01/10/2021'),
(18, 'Campeonato de Aragón de Hockey Sala\",	', 'Este Domingo 19 de Diciembre dará comienzo la liga aragonesa de ...', 'Este Domingo 19 de Diciembre dará comienzo la liga aragonesa de Hockey sala, el primer encuentro dará lugar en el CDM Delicias a las 9:00.\r\nDe esta manera se da el pistoletazo inicial a la temporada de Sala para los seniors, esperemos sea beneficiosa para el club tanto en resultados como en sensaciones.\r\nOs animamos a todos a que os acerquéis al pabellón para animar a vuestro equipo.\r\nFINALMENTE ESTE PARTIDO QUEDA APLAZADO A LA ESPERA DE NUEVA FECHA.\r\n				', 'noticia5.jpg', '', '17/12/2021'),
(19, 'FELIZ NAVIDAD!', 'Todo el club de Salduie queremos desearos una  feliz Navidad', '\r\nTodo el club de Salduie queremos desearos una  feliz Navidad, que paséis unos días estupendos, llenos de alegría, emoción y felicidad.\r\nTambién, como ya sabéis, debemos seguir siendo prudentes, las cosas no están bien con la pandemia , así que vamos a ser todos responsables. \r\nGracias a todos los que nos estáis apoyando, a todos nuestros amigos, familiares y seguidores. \r\nGracias a todos los jugadores, desde los más peques  a los más adultos, por que sin vosotros, esto no tendría ningún sentido. \r\nBrindemos todos por un año más, por seguir creciendo y por seguir luchando por y para esta pequeña gran familia que es Salduie. \r\nDe todo corazón, os queremos desear una Feliz Navidad.', 'noticia6f1.jpg,noticia6f2.jpg,noticia6f3.jpg,noticia6f4.jpg', '', '24/12/2021'),
(20, 'FELIZ NAVIDAD!', 'Todo el club de Salduie queremos desearos una  feliz Navidad', '\r\nTodo el club de Salduie queremos desearos una  feliz Navidad, que paséis unos días estupendos, llenos de alegría, emoción y felicidad.\r\nTambién, como ya sabéis, debemos seguir siendo prudentes, las cosas no están bien con la pandemia , así que vamos a ser todos responsables. \r\nGracias a todos los que nos estáis apoyando, a todos nuestros amigos, familiares y seguidores. \r\nGracias a todos los jugadores, desde los más peques  a los más adultos, por que sin vosotros, esto no tendría ningún sentido. \r\nBrindemos todos por un año más, por seguir creciendo y por seguir luchando por y para esta pequeña gran familia que es Salduie. \r\nDe todo corazón, os queremos desear una Feliz Navidad.', 'noticia6f1.jpg,noticia6f2.jpg,noticia6f3.jpg,noticia6f4.jpg', '', '24/12/2021'),
(21, 'Fin de la primera vuelta', 'Con la disputa de la 5ª jornada y a falta de disputar el partido aplazado contra...\r\n			', 'Con la disputa de la 5ª jornada y a falta de disputar el partido aplazado contra el CD Giner de los ríos termina la primera vuelta de la 1ª división masculina de hockey hierba. \r\n				Después de contar como derrotas los partidos disputados, contando en cada uno de ellos con muchas bajas, esperemos sirva este parón para recuperar jugadores y preparar al equipo física y mentalmente para la segunda vuelta, que seguro será emocionante a la par de dura. El equipo situado como colista deberá mejorar esta posición para conseguir el objetivo de la permanencia marcado a principio de temporada.\r\n				Mientras ,tanto el equipo Senior como el equipo Juvenil disputaran sus respectivas competiciones en la modalidad de Sala, intentando así hacerse un hueco para disputar las fases sectores para el Campeonato de España de dicha modalidad.\r\n			', 'noticia1.jpg,noticia1f1.jpg', '', '14/11/2021'),
(22, 'Segunda Jornada JJEE', 'Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Aragón...	', 'Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Aragón, los partidos daran comienzo a las 09:15, aunque los nuestros no jugaran hasta las 10:15, donde los conjuntos alevines y de iniciacion disputaran sus encuentros simultaneamente, los primeros contra el Honigvoguel y los segundos frente al Voguel.,\r\n				Desde aqui animamos a la gente a que acuda al campo, para poder disfrutar de otra jornada de hockey, y como no a nuestros equipos que poco a poco van cogiendo conceptos y ritmo de partido.			', 'noticia2.jpg,noticia2f1.jpg', '', '19/11/2021'),
(23, 'Resultados fin de semana', 'Este fin de semana se ha disputado la segunda jornada de los JJEE de Aragón...,\r\n			', 'Este fin de semana se ha disputado la segunda jornada de los JJEE de Aragón, donde nuestros equipos no han podido sumar sus partidos como victorias.,\r\n				A las 10:15 daban comienzo los partidos de alevines e iniciacion, en el primer campo los pupilos de Jorge Oteo caian contra el Vogel, un partido apasionante para los nuestros porque aunqe caian el primeros tres cuartos, en el ultimo conseguian anotar el primer gol en esta competicion para ellos y asi llevarse este ultimo cuarto, el resultado final fue de 3 a 1. ,\r\n				Al mismo tiempo nuestros alevines entrenados por Antonio Oteo no podian superar al Honigvogel cayendo por 6-0 en un encuetro que seguro ha servido para afianzar conceptos y obtener experiencia en los partidos.,\r\n				Animamos a ambos equipos porque, pese a los resultados, estan consiguiendo mejorar notablemente, y cada vez se ven mas destellos de Hockey.\r\n			', 'noticia3.jpg,noticia3f1.jpg,noticia3f2.jpg', '', '22/11/2021'),
(24, 'Acuerdo cooperación con Chocolates Lacasa,\r\n			', 'Recientemente se ha cerrado un acuerdo de cooperación con Chocolates...,\r\n			', 'Recientemente se ha cerrado un acuerdo de cooperacion con Chocolates Lacasa, este acuerdo no se podria haber llevado a cabo sin las conversaciones llevadas a cargo de Carla Berned.,\r\n				Los valores familiares tanto de Chocolates Lacasa como del club han hecho que este acuerdo fuera posible.,\r\n				Proximamente realizaremos un sorteo, con algunos de sus productos y merchandising del club para agradecerles su confianza, ¡estar atentos!,\r\n				Os dejamos un enlace de nuestra promo con Chocolates Lacasa\r\n			', 'noticia4.jpg,noticia4f1.jpg,noticia4f2.jpg', 'https://www.instagram.com/p/CWl8FTeDuIm/\r\n			', '01/10/2021'),
(25, 'Campeonato de Aragón de Hockey Sala\",	', 'Este Domingo 19 de Diciembre dará comienzo la liga aragonesa de ...', 'Este Domingo 19 de Diciembre dará comienzo la liga aragonesa de Hockey sala, el primer encuentro dará lugar en el CDM Delicias a las 9:00.\r\nDe esta manera se da el pistoletazo inicial a la temporada de Sala para los seniors, esperemos sea beneficiosa para el club tanto en resultados como en sensaciones.\r\nOs animamos a todos a que os acerquéis al pabellón para animar a vuestro equipo.\r\nFINALMENTE ESTE PARTIDO QUEDA APLAZADO A LA ESPERA DE NUEVA FECHA.\r\n				', 'noticia5.jpg', '', '17/12/2021'),
(26, 'FELIZ NAVIDAD!', 'Todo el club de Salduie queremos desearos una  feliz Navidad', '\r\nTodo el club de Salduie queremos desearos una  feliz Navidad, que paséis unos días estupendos, llenos de alegría, emoción y felicidad.\r\nTambién, como ya sabéis, debemos seguir siendo prudentes, las cosas no están bien con la pandemia , así que vamos a ser todos responsables. \r\nGracias a todos los que nos estáis apoyando, a todos nuestros amigos, familiares y seguidores. \r\nGracias a todos los jugadores, desde los más peques  a los más adultos, por que sin vosotros, esto no tendría ningún sentido. \r\nBrindemos todos por un año más, por seguir creciendo y por seguir luchando por y para esta pequeña gran familia que es Salduie. \r\nDe todo corazón, os queremos desear una Feliz Navidad.', 'noticia6f1.jpg,noticia6f2.jpg,noticia6f3.jpg,noticia6f4.jpg', '', '24/12/2021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidosprimeramasc`
--

CREATE TABLE `partidosprimeramasc` (
  `id` int(11) NOT NULL,
  `categoria` text NOT NULL,
  `campeonato` text NOT NULL,
  `dia` date NOT NULL,
  `hora` time NOT NULL,
  `eqlocal` text NOT NULL,
  `esclocal` text NOT NULL,
  `golocal` text NOT NULL,
  `eqvis` text NOT NULL,
  `esvis` text NOT NULL,
  `golvis` text NOT NULL,
  `lugar` text NOT NULL,
  `jugado` int(11) NOT NULL,
  `jornada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `partidosprimeramasc`
--

INSERT INTO `partidosprimeramasc` (`id`, `categoria`, `campeonato`, `dia`, `hora`, `eqlocal`, `esclocal`, `golocal`, `eqvis`, `esvis`, `golvis`, `lugar`, `jugado`, `jornada`) VALUES
(1, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '16:00:00', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'PARQUE D. EBRO', 0, 1),
(2, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '10:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'VALENCIA CH', 'escudovalencia', '0', 'BETERO', 0, 1),
(3, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '12:00:00', 'CH CARPESA', 'escudocarpesa', '0', 'UA-SAN VICENTE', 'escudosanviI', '0', 'TARONGERS', 0, 1),
(4, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '15:00:00', 'CH XALOC', 'escudoxaloc', '0', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'TARONGERS', 0, 2),
(5, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '16:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'CH CARPESA', 'escudocarpesa', '0', 'PARQUE D. EBRO', 0, 2),
(6, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '12:00:00', 'UA-SAN VICENTE', 'escudosanviI', '0', 'VALENCIA CH', 'escudovalencia', '0', 'UNIVERSIDAD DE ALICANTE', 0, 2),
(7, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '15:45:00', 'UA-SAN VICENTE', 'escudosanviI', '0', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'UNIVERSIDAD DE ALICANTE', 0, 3),
(8, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '10:00:00', 'CH CARPESA', 'escudocarpesa', '0', 'CH XALOC', 'escudoxaloc', '0', 'TARONGERS', 0, 3),
(9, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '14:30:00', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'PARQUE D. EBRO', 0, 3),
(10, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '15:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'VALENCIA CH', 'escudovalencia', '0', 'PARQUE D. EBRO', 0, 4),
(11, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '13:00:00', 'CH XALOC', 'escudoxaloc', '0', 'UA-SAN VICENTE', 'escudosanviI', '0', 'BETERO', 0, 4),
(12, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '21:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'CH CARPESA', 'escudocarpesa', '0', 'BETERO', 0, 4),
(13, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '15:00:00', 'VALENCIA CH', 'escudovalencia', '0', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'BETERO', 0, 5),
(14, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '12:00:00', 'UA-SAN VICENTE', 'escudosanviI', '0', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'UNIVERSIDAD DE ALICANTE', 0, 5),
(15, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '14:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'CH XALOC', 'escudoxaloc', '0', 'PARQUE D. EBRO', 0, 5),
(16, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '21:00:00', 'CH XALOC', 'escudoxaloc', '0', 'VALENCIA CH', 'escudovalencia', '0', 'TARONGERS', 0, 6),
(17, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '15:00:00', 'CH CARPESA', 'escudocarpesa', '0', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'TARONGERS', 0, 6),
(18, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'TARONGERS', 0, 6),
(19, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '15:30:00', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'UA-SAN VICENTE', 'escudosanviI', '0', 'PARQUE D. EBRO', 0, 7),
(20, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '12:30:00', 'CH XALOC', 'escudoxaloc', '0', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'BETERO', 0, 7),
(21, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '19:30:00', 'VALENCIA CH', 'escudovalencia', '0', 'CH CARPESA', 'escudocarpesa', '0', 'TARONGERS', 0, 7),
(22, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'UA-SAN VICENTE', 'escudosanviI', '0', 'CH CARPESA', 'escudocarpesa', '0', 'UNIVERSIDAD DE ALICANTE', 0, 8),
(23, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'POR DETERMINAR', 0, 8),
(24, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'VALENCIA CH', 'escudovalencia', '0', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'POR DETERMINAR', 0, 8),
(25, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'POR DETERMINAR', 0, 9),
(26, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CH XALOC', 'escudoxaloc', '0', 'CH CARPESA', 'escudocarpesa', '0', 'POR DETERMINAR', 0, 9),
(27, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'UA-SAN VICENTE', 'escudosanviI', '0', 'POR DETERMINAR', 0, 9),
(28, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CH CARPESA', 'escudocarpesa', '0', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'POR DETERMINAR', 0, 10),
(29, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'UA-SAN VICENTE', 'escudosanviI', '0', 'CH XALOC', 'escudoxaloc', '0', 'UNIVERSIDAD DE ALICANTE', 0, 10),
(30, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'VALENCIA CH', 'escudovalencia', '0', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'POR DETERMINAR', 0, 10),
(31, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'CH XALOC', 'escudoxaloc', '0', 'POR DETERMINAR', 0, 11),
(32, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CH CARPESA', 'escudocarpesa', '0', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'POR DETERMINAR', 0, 11),
(33, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'VALENCIA CH', 'escudovalencia', '0', 'UA-SAN VICENTE', 'escudosanviI', '0', 'POR DETERMINAR', 0, 11),
(34, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'VALENCIA CH', 'escudovalencia', '0', 'POR DETERMINAR', 0, 12),
(35, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'UA-SAN VICENTE', 'escudosanviI', '0', 'POR DETERMINAR', 0, 12),
(36, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CH XALOC', 'escudoxaloc', '0', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'POR DETERMINAR', 0, 12),
(37, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'CH CARPESA', 'escudocarpesa', '0', 'POR DETERMINAR', 0, 13),
(38, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', '0', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'POR DETERMINAR', 0, 13),
(39, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'VALENCIA CH', 'escudovalencia', '0', 'CH XALOC', 'escudoxaloc', '0', 'POR DETERMINAR', 0, 3),
(40, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CH CARPESA', 'escudocarpesa', '0', 'VALENCIA CH', 'escudovalencia', '0', 'POR DETERMINAR', 0, 14),
(41, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'UA-SAN VICENTE', 'escudosanviI', '0', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'UNIVERSIDAD DE ALICANTE', 0, 14),
(42, 'SENIOR M', '1ª División Masculina Hockey Hierba', '0000-00-00', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', '0', 'CH XALOC', 'escudoxaloc', '0', 'POR DETERMINAR', 0, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temporada2122`
--

CREATE TABLE `temporada2122` (
  `id` int(11) NOT NULL,
  `categoria` text NOT NULL,
  `campeonato` text NOT NULL,
  `dia` date NOT NULL,
  `hora` time NOT NULL,
  `eqlocal` text NOT NULL,
  `esclocal` text NOT NULL,
  `golocal` text NOT NULL,
  `eqvis` text NOT NULL,
  `esvis` text NOT NULL,
  `golvis` text NOT NULL,
  `lugar` text NOT NULL,
  `jugado` int(11) NOT NULL,
  `jornada` int(11) NOT NULL,
  `semana` int(11) NOT NULL,
  `control` int(11) NOT NULL,
  `controldivision` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `temporada2122`
--

INSERT INTO `temporada2122` (`id`, `categoria`, `campeonato`, `dia`, `hora`, `eqlocal`, `esclocal`, `golocal`, `eqvis`, `esvis`, `golvis`, `lugar`, `jugado`, `jornada`, `semana`, `control`, `controldivision`) VALUES
(1, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-02', '16:00:00', 'HONIGVÖGEL HH 79', 'escudohonig', '3', 'HOCKEY SALDUIE 78', 'escudosalduie', '1', 'PARQUE D. EBRO', 1, 1, 40, 1, 1),
(2, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-03', '10:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'VALENCIA CH', 'escudovalencia', 'null', 'BETERO', 0, 1, 40, 0, 1),
(3, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-03', '12:00:00', 'CH CARPESA', 'escudocarpesa', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'TARONGERS', 0, 1, 40, 0, 1),
(4, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-16', '15:00:00', 'CH XALOC', 'escudoxaloc', '0', 'HONIGVÖGEL HH 79', 'escudohonig', '0', 'TARONGERS', 0, 2, 42, 0, 1),
(5, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-16', '16:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CH CARPESA', 'escudocarpesa', 'null', 'PARQUE D. EBRO', 1, 2, 42, 1, 1),
(6, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-17', '12:00:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'VALENCIA CH', 'escudovalencia', 'null', 'UNIVERSIDAD DE ALICANTE', 0, 2, 42, 0, 1),
(7, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-23', '15:45:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'UNIVERSIDAD DE ALICANTE', 1, 3, 43, 1, 1),
(8, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-24', '10:00:00', 'CH CARPESA', 'escudocarpesa', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'TARONGERS', 0, 3, 43, 0, 1),
(9, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-10-24', '14:30:00', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'PARQUE D. EBRO', 1, 3, 43, 0, 1),
(10, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-06', '15:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'VALENCIA CH', 'escudovalencia', 'null', 'PARQUE D. EBRO', 0, 4, 45, 1, 1),
(11, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-07', '13:00:00', 'CH XALOC', 'escudoxaloc', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'BETERO', 0, 4, 45, 0, 1),
(12, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-12-13', '21:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'CH CARPESA', 'escudocarpesa', 'null', 'BETERO', 0, 4, 51, 0, 1),
(13, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-13', '15:00:00', 'VALENCIA CH', 'escudovalencia', 'null', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'BETERO', 0, 5, 46, 0, 1),
(14, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-14', '12:00:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'UNIVERSIDAD DE ALICANTE', 0, 5, 46, 0, 1),
(15, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-14', '14:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'PARQUE D. EBRO', 1, 5, 46, 1, 1),
(16, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-16', '21:00:00', 'CH XALOC', 'escudoxaloc', 'null', 'VALENCIA CH', 'escudovalencia', 'null', 'TARONGERS', 0, 6, 47, 0, 1),
(17, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-20', '15:00:00', 'CH CARPESA', 'escudocarpesa', 'null', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'TARONGERS', 0, 6, 47, 0, 1),
(18, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-02-27', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'TARONGERS', 0, 6, 9, 1, 1),
(19, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-27', '15:30:00', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'PARQUE D. EBRO', 1, 7, 48, 0, 1),
(20, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-28', '12:30:00', 'CH XALOC', 'escudoxaloc', 'null', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'BETERO', 0, 7, 48, 0, 1),
(21, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2021-11-28', '19:30:00', 'VALENCIA CH', 'escudovalencia', 'null', 'CH CARPESA', 'escudocarpesa', 'null', 'TARONGERS', 0, 7, 48, 0, 1),
(22, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-06', '00:00:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'CH CARPESA', 'escudocarpesa', 'null', 'UNIVERSIDAD DE ALICANTE', 0, 8, 10, 0, 1),
(23, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-06', '00:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'POR DETERMINAR', 0, 8, 10, 1, 1),
(24, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-06', '00:00:00', 'VALENCIA CH', 'escudovalencia', 'null', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'POR DETERMINAR', 0, 8, 10, 0, 1),
(25, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-13', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'POR DETERMINAR', 0, 9, 11, 0, 1),
(26, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-13', '00:00:00', 'CH XALOC', 'escudoxaloc', 'null', 'CH CARPESA', 'escudocarpesa', 'null', 'POR DETERMINAR', 0, 9, 11, 0, 0),
(27, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-13', '00:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'POR DETERMINAR', 0, 9, 11, 1, 0),
(28, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-27', '00:00:00', 'CH CARPESA', 'escudocarpesa', 'null', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'POR DETERMINAR', 0, 10, 13, 0, 0),
(29, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-27', '00:00:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'UNIVERSIDAD DE ALICANTE', 0, 10, 13, 0, 0),
(30, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-03-27', '00:00:00', 'VALENCIA CH', 'escudovalencia', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'POR DETERMINAR', 0, 10, 13, 1, 0),
(31, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-03', '00:00:00', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'POR DETERMINAR', 0, 11, 14, 0, 0),
(32, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-03', '00:00:00', 'CH CARPESA', 'escudocarpesa', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'POR DETERMINAR', 0, 11, 14, 1, 0),
(33, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-03', '00:00:00', 'VALENCIA CH', 'escudovalencia', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'POR DETERMINAR', 0, 11, 14, 0, 0),
(34, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-09', '00:00:00', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'VALENCIA CH', 'escudovalencia', 'null', 'POR DETERMINAR', 0, 12, 15, 0, 0),
(35, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-09', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'POR DETERMINAR', 0, 12, 15, 0, 0),
(36, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-09', '00:00:00', 'CH XALOC', 'escudoxaloc', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'POR DETERMINAR', 0, 12, 15, 1, 0),
(37, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-24', '00:00:00', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'CH CARPESA', 'escudocarpesa', 'null', 'POR DETERMINAR', 0, 13, 17, 0, 0),
(38, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-24', '00:00:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'POR DETERMINAR', 0, 13, 17, 1, 0),
(39, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-04-24', '00:00:00', 'VALENCIA CH', 'escudovalencia', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'POR DETERMINAR', 0, 3, 17, 0, 0),
(40, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-05-01', '00:00:00', 'CH CARPESA', 'escudocarpesa', 'null', 'VALENCIA CH', 'escudovalencia', 'null', 'POR DETERMINAR', 0, 14, 18, 0, 0),
(41, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-05-01', '00:00:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'UNIVERSIDAD DE ALICANTE', 0, 14, 18, 0, 0),
(42, 'SENIOR M', '1ª División Masculina Hockey Hierba', '2022-05-01', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'POR DETERMINAR', 0, 14, 18, 0, 0),
(43, 'SENIOR M', '1ª División Masculina Hockey Hierba PLAY OFF ', '2022-05-07', '00:00:00', 'PLAY OFF (6º LIGA REGULAR)', 'noequipo', 'null', 'PLAY OFF (5º LIGA REGULAR)', 'noequipo', 'null', 'POR CONFIRMAR', 0, 0, 19, 0, 0),
(44, 'SENIOR M', '1ª División Masculina Hockey Hierba PLAY OFF ', '2022-05-07', '00:00:00', 'PLAY OFF (4º LIGA REGULAR)', 'noequipo', 'null', 'PLAY OFF (3º LIGA REGULAR)', 'noequipo', 'null', 'POR CONFIRMAR', 0, 0, 19, 0, 0),
(45, 'SENIOR M', '1ª División Masculina Hockey Hierba PLAY OFF ', '2022-05-07', '00:00:00', 'PLAY OFF (2º LIGA REGULAR)', 'noequipo', 'null', 'PLAY OFF (1º LIGA REGULAR)', 'noequipo', 'null', 'POR CONFIRMAR', 0, 0, 19, 0, 0),
(46, 'SENIOR M', '1ª División Masculina Hockey Hierba PLAY OFF ', '2022-05-15', '00:00:00', 'PLAY OFF (5º LIGA REGULAR)', 'noequipo', 'null', 'PLAY OFF (6º LIGA REGULAR)', 'noequipo', 'null', 'POR CONFIRMAR', 0, 0, 20, 0, 0),
(47, 'SENIOR M', '1ª División Masculina Hockey Hierba PLAY OFF ', '2022-05-15', '00:00:00', 'PLAY OFF (3º LIGA REGULAR)', 'noequipo', 'null', 'PLAY OFF (4º LIGA REGULAR)', 'noequipo', 'null', 'POR CONFIRMAR', 0, 0, 20, 0, 0),
(48, 'SENIOR M', '1ª División Masculina Hockey Hierba PLAY OFF ', '2022-05-15', '00:00:00', 'PLAY OFF (1º LIGA REGULAR)', 'noequipo', 'null', 'PLAY OFF (2º LIGA REGULAR)', 'noequipo', 'null', 'POR CONFIRMAR', 0, 0, 20, 0, 0),
(49, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-08', '14:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'PETXINA', 0, 0, 2, 0, 0),
(50, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-08', '14:30:00', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'CH CARPESA BLAU', 'escudocarpesa', 'null', 'CDM DELICIAS', 0, 0, 2, 0, 0),
(51, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-08', '15:30:00', 'HOCKEY SALDUIE 78', 'escudosalduie', '1', 'CH CARPESA BLAU', 'escudocarpesa', '4', 'CDM DELICIAS', 1, 0, 2, 1, 0),
(52, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-08', '16:30:00', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CDM DELICIAS', 0, 0, 2, 1, 0),
(53, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-08', '17:30:00', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'CDM DELICIAS', 0, 0, 2, 0, 0),
(54, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-08', '18:30:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'CDM DELICIAS', 0, 0, 2, 1, 0),
(55, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-16', '10:00:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'SAN VICENTE-SALA', 0, 0, 3, 0, 0),
(56, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-16', '12:00:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'CH CARPESA BLAU', 'escudocarpesa', 'null', 'SAN VICENTE-SALA', 0, 0, 3, 0, 0),
(57, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-23', '11:30:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'CH CARPESA BLAU', 'escudocarpesa', 'null', 'FUENSANTA', 0, 0, 4, 0, 0),
(58, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-23', '13:30:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'FUENSANTA', 0, 0, 4, 0, 0),
(59, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-22', '14:30:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CHESTE', 0, 0, 4, 1, 0),
(60, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-22', '15:30:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CHESTE', 0, 0, 4, 1, 0),
(61, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-22', '16:30:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'CHESTE', 0, 0, 4, 0, 0),
(62, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-22', '17:30:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'HONIGVÖGEL HH 79', 'escudohonig', 'null', 'CHESTE', 0, 0, 4, 0, 0),
(63, 'SENIOR M', '1ª DIVISIÓN MASCULINA HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-23', '12:30:00', 'CH CARPESA BLAU', 'escudocarpesa', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'CHESTE', 0, 0, 4, 0, 0),
(64, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2020-12-31', '00:00:00', 'VALENCIA CH', 'escudovalencia', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'PETXINA', 0, 0, 53, 0, 0),
(65, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2020-12-31', '00:00:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'MALVARROSA', 0, 0, 53, 0, 0),
(66, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-15', '14:30:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'VALENCIA CH', 'escudovalencia', 'null', 'CDM DELICIAS', 0, 0, 3, 1, 0),
(67, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-15', '15:30:00', 'CH XALOC', 'escudoxaloc', 'null', 'VALENCIA CH', 'escudovalencia', 'null', 'CDM DELICIAS', 0, 0, 3, 0, 0),
(68, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-15', '16:00:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'SAN VICENTE-SALA', 0, 0, 3, 0, 0),
(69, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-15', '16:30:00', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CH XALOC', 'escudoxaloc', 'null', 'CDM DELICIAS', 0, 0, 3, 1, 0),
(70, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-22', '09:30:00', 'VALENCIA CH', 'escudovalencia', 'null', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'CHESTE', 0, 0, 4, 0, 0),
(71, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-22', '10:30:00', 'CH XALOC', 'escudoxaloc', 'null', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'CHESTE', 0, 0, 4, 0, 0),
(72, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-22', '11:30:00', 'CD GINER DE LOS RÍOS', 'escudoginer', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CHESTE', 0, 0, 4, 1, 0),
(73, 'JUVENIL M', 'JUVENIL MASCULINO HOCKEY SALA - FASE FINAL (INTERTERRITORIAL)', '2022-01-22', '12:30:00', 'UA-SAN VICENTE', 'escudosanviI', 'null', 'HOCKEY SALDUIE 78', 'escudosalduie', 'null', 'CHESTE', 0, 0, 4, 1, 0),
(74, 'INICIACIÓN', 'JUEGOS ESCOLARES HIERBA', '2021-12-07', '10:15:00', 'HONIG', 'escudohonig', '4', 'VOGEL', 'escudohonig', '0', 'PARQUE DEPORTIVO EBRO', 1, 1, 50, 0, 0),
(75, 'INICIACIÓN', 'JUEGOS ESCOLARES HIERBA', '2021-12-21', '10:15:00', 'VOGEL', 'escudohonig', '3', 'SALDUIE', 'escudosalduie', '1', 'PARQUE DEPORTIVO EBRO', 1, 2, 52, 1, 0),
(76, 'INICIACIÓN', 'JUEGOS ESCOLARES HIERBA', '2021-12-28', '10:15:00', 'SALDUIE', 'escudosalduie', '0', 'HONIG', 'escudohonig', '4', 'PARQUE DEPORTIVO EBRO', 1, 3, 53, 1, 0),
(77, 'BENJAMIN', 'JUEGOS ESCOLARES HIERBA', '2021-11-07', '11:15:00', 'HONIGVOGEL', 'escudohonig', '6', 'SALDUIE', 'escudosalduie', '0', 'PARQUE DEPORTIVO EBRO', 1, 1, 45, 1, 0),
(78, 'BENJAMIN', 'JUEGOS ESCOLARES HIERBA', '2021-11-21', '11:15:00', 'HONIGVOGEL', 'escudohonig', '9', 'BRITISH SCHOOL', 'escudobritish', '6', 'PARQUE DEPORTIVO EBRO', 1, 2, 47, 0, 0),
(79, 'BENJAMIN', 'JUEGOS ESCOLARES HIERBA', '2021-11-28', '11:15:00', 'SALDUIE', 'escudosalduie', '0', 'BRITISH SCHOOL', 'escudobritish', '4', 'PARQUE DEPORTIVO EBRO', 1, 3, 48, 1, 0),
(80, 'ALEVIN', 'JUEGOS ESCOLARES HIERBA', '2021-11-07', '10:15:00', 'HONIGVOGEL', 'escudohonig', '6', 'SALDUIE', 'escudosalduie', '0', 'PARQUE DEPORTIVO EBRO', 1, 1, 45, 1, 0),
(81, 'ALEVIN', 'JUEGOS ESCOLARES HIERBA', '2021-11-21', '10:15:00', 'SALDUIE', 'escudosalduie', '0', 'HONIGVOGEL', 'escudohonig', '6', 'PARQUE DEPORTIVO EBRO', 1, 2, 47, 1, 0),
(82, 'ALEVIN', 'JUEGOS ESCOLARES HIERBA', '2021-11-28', '09:45:00', 'HONIGVOGEL', 'escudohonig', '6', 'SALDUIE', 'escudosalduie', '0', 'PARQUE DEPORTIVO EBRO', 1, 3, 48, 1, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clasificacion primera`
--
ALTER TABLE `clasificacion primera`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clasificacion_primera`
--
ALTER TABLE `clasificacion_primera`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticiasweb`
--
ALTER TABLE `noticiasweb`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `partidosprimeramasc`
--
ALTER TABLE `partidosprimeramasc`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `temporada2122`
--
ALTER TABLE `temporada2122`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clasificacion primera`
--
ALTER TABLE `clasificacion primera`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `clasificacion_primera`
--
ALTER TABLE `clasificacion_primera`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `noticiasweb`
--
ALTER TABLE `noticiasweb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `partidosprimeramasc`
--
ALTER TABLE `partidosprimeramasc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `temporada2122`
--
ALTER TABLE `temporada2122`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
