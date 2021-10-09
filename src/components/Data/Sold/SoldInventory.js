import React, { createContext, useState, useEffect } from 'react'

import MaxdaConvertilbe19881 from '../../../assets/images/CurrentCars/1988-mazda-rx-7-convertible-eng-rebuilt.jfif';
import MaxdaConvertilbe19882 from '../../../assets/images/CurrentCars/1988-mazda-rx-7-convertible-eng-rebuilt.jfif';
import MaxdaConvertilbe19883 from '../../../assets/images/CurrentCars/1988-mazda-rx-7-convertible-eng-rebuilt.jfif';

import Nissan1991GTR0 from '../../../assets/images/CurrentCars/1991-nissan-skyline-gt-r.jfif';
import Nissan1991GTR1 from '../../../assets/images/CurrentCars/1991-nissan-skyline-gt-r-1.jfif';
import Nissan1991GTST4dr from '../../../assets/images/CurrentCars/1991-nissan-skyline-gts-t-4dr.jfif';
import Toyota1991CruiserVX from '../../../assets/images/CurrentCars/1991-toyota-land-cruiser-vx-diesel-turbo.jfif';
import Mazda1992RX7FD from '../../../assets/images/CurrentCars/1992-mazda-rx7-fd.jfif';
import Nissan1992Autech from '../../../assets/images/CurrentCars/1992-nissan-skyline-autech-rb26de.jfif';
import Holden1994Commodore from '../../../assets/images/CurrentCars/1994-holden-commodore-ute.jfif';
import Honda1994CivicFerio from '../../../assets/images/CurrentCars/1994-honda-civic-ferio.jfif';
import Honda1994NSX from '../../../assets/images/CurrentCars/1994-honda-nsx.jfif';
import Mazda1994RX7 from '../../../assets/images/CurrentCars/1994-mazda-rx-7.jfif';
import Mazda1994RX7FD from '../../../assets/images/CurrentCars/1994-mazda-rx7-fd.jfif';
import Mitsu1995 from '../../../assets/images/CurrentCars/1995-mitsubishi-delica-space-gear-super-exceed.jfif';
import Nissan1995GTR1 from '../../../assets/images/CurrentCars/1995-nissan-skyline-gt-r-1.jfif';
import Nissan1995GTR0 from '../../../assets/images/CurrentCars/1995-nissan-skyline-gt-r.jfif';
import Nissan1995GTRVSpec1 from '../../../assets/images/CurrentCars/1995-nissan-skyline-gt-r-v-spec-1.jfif';
import Nissan1995GTRVSpec2 from '../../../assets/images/CurrentCars/1995-nissan-skyline-gt-r-v-spec-2.jfif';
import Nissan1995GTRVSpec from '../../../assets/images/CurrentCars/1995-nissan-skyline-gt-r-v-spec.jfif';
import Honda1996R1 from '../../../assets/images/CurrentCars/1996-honda-integra-type-r-1.jfif';
import Honda1996R0 from '../../../assets/images/CurrentCars/1996-honda-integra-type-r.jfif';
import Toyota1996CelicaGTFour from '../../../assets/images/CurrentCars/1996-toyota-celica-gt-four.jfif';

export const SoldDataContext = createContext();

export const SoldDataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      "_id": "9",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        MaxdaConvertilbe19881, MaxdaConvertilbe19882, MaxdaConvertilbe19883
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "10",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1991GTR0
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "11",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1991GTR1
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "12",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1991GTST4dr
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "13",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Toyota1991CruiserVX
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "14",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Mazda1992RX7FD
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "15",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1992Autech
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "16",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Holden1994Commodore
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "17",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Honda1994CivicFerio
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "18",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Honda1994NSX
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "19",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Mazda1994RX7
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "20",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Mazda1994RX7FD
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "21",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Mitsu1995
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "22",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1995GTR1
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "23",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1995GTR0
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "24",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1995GTRVSpec1
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "25",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1995GTRVSpec2
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "26",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Nissan1995GTRVSpec
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "27",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Honda1996R1
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "28",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Honda1996R0
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
    {
      "_id": "29",
      "model": "SOLD",
      "year": "-",
      "make": "-",
      "images": [
        Toyota1996CelicaGTFour
      ],
      "modList": [
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
        "mod", "mod", "mod", "mod", "mod",
      ],
      "maintenanceService": [
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
        "parts", "parts", "parts", "parts", "parts",
      ],
      "aboutUs": [
        "jdmlover International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://jdmlover.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
        "Right Hand Drive (RHD) http://jdmlover.com/RHD",
        "California legalization of imported vehicles (http://jdmlover.com/California)",
        "Inventory List (http://jdmlover.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "none": "-",
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",

      "fullNameWithAddress": "FOR SALE INCYPRESS, CALIFORNIA",
      "fullName": "1991 HONDA NSX",

      "builtBy": "-",
      "mileage": "-",
      "price": '99,999',
      "bodyColor": '-',

      "stockNumber": 12125991,
      "vin": '-',
      "miles": '-',
      "engineSize": '-',
      "transmissionType": '-',
      "engineType": "-",
      "fuelSpecification": "-",
      "doors": "-",
      "bodyStyle": "-",
      "paintType": "-",
      "interior": "-",
      "secondaryInt": "-",
      "seatingType": "-",
      "seatMaterial": "-",
      "shifterType": "-",
      "centerConsole": "NO",
      "count": 1
    },
  ])

  const [cart, setCart] = useState([])

  const addCart = (id) => {
    const check = cart.every(item => {
      return item._id !== id
    })
    if (check) {
      const data = products.filter(product => {
        return product._id === id
      })
      setCart([...cart, ...data])
    } else {
      alert("The product has been added to cart.")
    }
  }

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if (dataCart) setCart(dataCart)
  }, [])

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart))
  }, [cart])


  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart
  }


  return (
    <SoldDataContext.Provider value={value}>
      {props.children}
    </SoldDataContext.Provider>
  )
}