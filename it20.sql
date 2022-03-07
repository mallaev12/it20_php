-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 07 2022 г., 14:54
-- Версия сервера: 8.0.24
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `it20`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `category_id` int NOT NULL,
  `name_category` varchar(255) NOT NULL,
  `discription_category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`category_id`, `name_category`, `discription_category`) VALUES
(1, 'Мужское', 'Товары для мужчин '),
(2, 'Женское', 'Товары для женщин'),
(3, 'Рубашки', 'Товары с рубашками');

-- --------------------------------------------------------

--
-- Структура таблицы `category_product`
--

CREATE TABLE `category_product` (
  `product_id` int NOT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `category_product`
--

INSERT INTO `category_product` (`product_id`, `category_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 3),
(3, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `photo`
--

CREATE TABLE `photo` (
  `photo_id` int NOT NULL,
  `alt_img` varchar(255) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `photo`
--

INSERT INTO `photo` (`photo_id`, `alt_img`, `photo`) VALUES
(1, 'Первая картинка', '/img/1.png'),
(2, 'Картинка вторая', '/img/r1.png'),
(3, 'Картинка три', 'img/3.png'),
(4, 'Картинка футболки', '/img/t-short1.png'),
(5, 'Платье', '/img/pl1.png');

-- --------------------------------------------------------

--
-- Структура таблицы `photo_product`
--

CREATE TABLE `photo_product` (
  `product_id` int NOT NULL,
  `photo_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `photo_product`
--

INSERT INTO `photo_product` (`product_id`, `photo_id`) VALUES
(1, 1),
(1, 2),
(2, 4),
(3, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  `name_product` varchar(255) NOT NULL,
  `discription_product` text NOT NULL,
  `promo_id` int DEFAULT NULL,
  `photo_id` int NOT NULL,
  `price_old` int DEFAULT NULL,
  `count_product` int NOT NULL,
  `price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `name_product`, `discription_product`, `promo_id`, `photo_id`, `price_old`, `count_product`, `price`) VALUES
(1, 3, 'РУБАШКА MEDICINE\r\n', 'Рубашка Medicine выполнена из вискозной ткани с клетчатым узором. Детали: прямой край, отложной воротник; планка и манжеты на поговицах; кармар на груди.', 1, 1, 2699, 5, 2499),
(2, 1, 'Футболка мужская', 'Футболка для парней', NULL, 4, 1299, 0, 999),
(3, 2, 'Платье', 'Платье новое', NULL, 5, 2699, 8, 2499);

-- --------------------------------------------------------

--
-- Структура таблицы `promo`
--

CREATE TABLE `promo` (
  `promo_id` int NOT NULL,
  `name_promo` varchar(255) NOT NULL,
  `price_promo` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `promo`
--

INSERT INTO `promo` (`promo_id`, `name_promo`, `price_promo`) VALUES
(1, '10market', 10);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Индексы таблицы `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`photo_id`);

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Индексы таблицы `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`promo_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `photo`
--
ALTER TABLE `photo`
  MODIFY `photo_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `promo`
--
ALTER TABLE `promo`
  MODIFY `promo_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
