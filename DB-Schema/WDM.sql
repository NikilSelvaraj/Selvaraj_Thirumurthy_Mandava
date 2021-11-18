-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 18, 2021 at 10:12 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WDM`
--
CREATE DATABASE IF NOT EXISTS `WDM` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `WDM`;

-- --------------------------------------------------------

--
-- Table structure for table `Address`
--

CREATE TABLE `Address` (
  `ID` int(11) NOT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `Address_2` varchar(50) DEFAULT NULL,
  `District` varchar(30) DEFAULT NULL,
  `City` varchar(30) DEFAULT NULL,
  `State` varchar(30) DEFAULT NULL,
  `Country` varchar(30) DEFAULT NULL,
  `Postal_Code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Address`:
--

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `ID` int(11) NOT NULL,
  `First_Name` varchar(100) DEFAULT NULL,
  `Last_Name` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Phone_No` int(11) DEFAULT NULL,
  `Created_Date` timestamp NULL DEFAULT NULL,
  `Last_Update` timestamp NULL DEFAULT NULL,
  `Address_ID` int(11) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Customer`:
--

-- --------------------------------------------------------

--
-- Table structure for table `Equipment`
--

CREATE TABLE `Equipment` (
  `ID` int(11) NOT NULL,
  `Equipment_Type` varchar(50) DEFAULT NULL,
  `Model_No` varchar(50) DEFAULT NULL,
  `Brand_Name` varchar(100) DEFAULT NULL,
  `Load_Capacity` int(11) DEFAULT NULL,
  `Last_Used` timestamp NULL DEFAULT NULL,
  `IsCurrentlyInUse` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Equipment`:
--

-- --------------------------------------------------------

--
-- Table structure for table `Inventory`
--

CREATE TABLE `Inventory` (
  `Inventory_ID` int(11) NOT NULL,
  `Item_ID` int(11) DEFAULT NULL,
  `Item_Type` varchar(50) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `Item_Desc` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Inventory`:
--

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `Order_ID` int(11) DEFAULT NULL,
  `Payment_Type` varchar(50) DEFAULT NULL,
  `Payment_DateTime` timestamp NULL DEFAULT NULL,
  `Payment_Status` varchar(10) DEFAULT NULL,
  `Bill_No` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Payment`:
--

-- --------------------------------------------------------

--
-- Table structure for table `Personel`
--

CREATE TABLE `Personel` (
  `ID` int(11) NOT NULL,
  `First_Name` varchar(100) DEFAULT NULL,
  `Last_Name` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Phone_No` int(11) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Last_Update` timestamp NULL DEFAULT NULL,
  `Address_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Personel`:
--

-- --------------------------------------------------------

--
-- Table structure for table `Services`
--

CREATE TABLE `Services` (
  `Service_ID` int(11) NOT NULL,
  `Service_Name` varchar(50) DEFAULT NULL,
  `Service_Desc` varchar(1000) DEFAULT NULL,
  `PriceperPound` int(11) DEFAULT NULL,
  `LateService_charges` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Services`:
--

-- --------------------------------------------------------

--
-- Table structure for table `Service_Order`
--

CREATE TABLE `Service_Order` (
  `Order_ID` int(11) NOT NULL,
  `Customer_ID` int(11) DEFAULT NULL,
  `Address_ID` int(11) DEFAULT NULL,
  `Service_Id` int(11) DEFAULT NULL,
  `Service_Mode` varchar(20) DEFAULT NULL,
  `Load_Weight` int(11) DEFAULT NULL,
  `Amount` int(11) DEFAULT NULL,
  `Order_DateTime` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Service_Order`:
--   `Customer_ID`
--       `Customer` -> `ID`
--

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Address`
--
ALTER TABLE `Address`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Equipment`
--
ALTER TABLE `Equipment`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Inventory`
--
ALTER TABLE `Inventory`
  ADD PRIMARY KEY (`Inventory_ID`);

--
-- Indexes for table `Payment`
--
ALTER TABLE `Payment`
  ADD PRIMARY KEY (`Bill_No`);

--
-- Indexes for table `Personel`
--
ALTER TABLE `Personel`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Services`
--
ALTER TABLE `Services`
  ADD PRIMARY KEY (`Service_ID`);

--
-- Indexes for table `Service_Order`
--
ALTER TABLE `Service_Order`
  ADD PRIMARY KEY (`Order_ID`),
  ADD KEY `Customer_ID` (`Customer_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Service_Order`
--
ALTER TABLE `Service_Order`
  ADD CONSTRAINT `service_order_ibfk_1` FOREIGN KEY (`Customer_ID`) REFERENCES `Customer` (`ID`);


--
-- Metadata
--
USE `phpmyadmin`;

--
-- Metadata for table Address
--

--
-- Metadata for table Customer
--

--
-- Metadata for table Equipment
--

--
-- Metadata for table Inventory
--

--
-- Metadata for table Payment
--

--
-- Metadata for table Personel
--

--
-- Metadata for table Services
--

--
-- Metadata for table Service_Order
--

--
-- Metadata for database WDM
--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
