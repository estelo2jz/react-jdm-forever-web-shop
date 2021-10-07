import React, { createContext, useState, useEffect } from 'react'

// the 4 numbers is the year
import NSX1 from '../assets/images/cars/1991-honda-nsx-1.jfif';
import NSX2 from '../assets/images/cars/1991-honda-nsx-2.jfif';
import NSX3 from '../assets/images/cars/1991-honda-nsx-3.jfif';
import NSX4 from '../assets/images/cars/1991-honda-nsx-4.jfif';
import NSX5 from '../assets/images/cars/1991-honda-nsx-5.jfif';

import Rx71992FD1 from '../assets/images/cars/1992-mazda-rx7-fd-1.jfif';
import Rx71992FD2 from '../assets/images/cars/1992-mazda-rx7-fd-2.jfif';
import Rx71992FD3 from '../assets/images/cars/1992-mazda-rx7-fd-3.jfif';
import Rx71992FD4 from '../assets/images/cars/1992-mazda-rx7-fd-4.jfif';
import Rx71992FD5 from '../assets/images/cars/1992-mazda-rx7-fd-5.jfif';


import Cappuccino1 from '../assets/images/cars/1993-suzuki-cappuccino-1.jfif';
import Cappuccino2 from '../assets/images/cars/1993-suzuki-cappuccino-2.jfif';
import Cappuccino3 from '../assets/images/cars/1993-suzuki-cappuccino-3.jfif';
import Cappuccino4 from '../assets/images/cars/1993-suzuki-cappuccino-4.jfif';
import Cappuccino5 from '../assets/images/cars/1993-suzuki-cappuccino-5.jfif';


import Supra19931 from '../assets/images/cars/1993-toyota-supra-1.jfif';
import Supra19932 from '../assets/images/cars/1993-toyota-supra-2.jfif';
import Supra19933 from '../assets/images/cars/1993-toyota-supra-3.jfif';
import Supra19934 from '../assets/images/cars/1993-toyota-supra-4.jfif';
import Supra19935 from '../assets/images/cars/1993-toyota-supra-5.jfif';


import CivicShuttle19951 from '../assets/images/cars/1995-honda-civic-shuttle-1.jfif';
import CivicShuttle19952 from '../assets/images/cars/1995-honda-civic-shuttle-2.jfif';
import CivicShuttle19953 from '../assets/images/cars/1995-honda-civic-shuttle-3.jfif';
import CivicShuttle19954 from '../assets/images/cars/1995-honda-civic-shuttle-4.jfif';
import CivicShuttle19955 from '../assets/images/cars/1995-honda-civic-shuttle-5.jfif';

import Evoiii19951 from '../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-1.jfif';
import Evoiii19952 from '../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-2.jfif';
import Evoiii19953 from '../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-3.jfif';
import Evoiii19954 from '../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-4.jfif';
import Evoiii19955 from '../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-5.jfif';


import Integra1996TR1 from '../assets/images/cars/1996-honda-integra-type-r-1.jfif';
import Integra1996TR2 from '../assets/images/cars/1996-honda-integra-type-r-2.jfif';
import Integra1996TR3 from '../assets/images/cars/1996-honda-integra-type-r-3.jfif';
import Integra1996TR4 from '../assets/images/cars/1996-honda-integra-type-r-4.jfif';
import Integra1996TR5 from '../assets/images/cars/1996-honda-integra-type-r-5.jfif';
import Integra1996TR7 from '../assets/images/cars/1996-honda-integra-type-r-7.jfif';
import Integra1996TR11 from '../assets/images/cars/1996-honda-integra-type-r-11.jfif';
import Integra1996TR14 from '../assets/images/cars/1996-honda-integra-type-r-14.jfif';
import Integra1996TR20 from '../assets/images/cars/1996-honda-integra-type-r-20.jfif';
import Integra1996TR16 from '../assets/images/cars/1996-honda-integra-type-r-16.jfif';
import Integra1996TR17 from '../assets/images/cars/1996-honda-integra-type-r-17.jfif';
import Integra1996TR18 from '../assets/images/cars/1996-honda-integra-type-r-18.jfif';
import Integra1996TR19 from '../assets/images/cars/1996-honda-integra-type-r-19.jfif';
import Integra1996TR34 from '../assets/images/cars/1996-honda-integra-type-r-34.jfif';
import Integra1996TR35 from '../assets/images/cars/1996-honda-integra-type-r-35.jfif';
import Integra1996TR36 from '../assets/images/cars/1996-honda-integra-type-r-36.jfif';

import LancerEVO20001 from '../assets/images/cars/2000-mitsubishi-lancer-evolution-1.jfif';
import LancerEVO20002 from '../assets/images/cars/2000-mitsubishi-lancer-evolution-2.jfif';
import LancerEVO20003 from '../assets/images/cars/2000-mitsubishi-lancer-evolution-3.jfif';
import LancerEVO20004 from '../assets/images/cars/2000-mitsubishi-lancer-evolution-4.jfif';
import LancerEVO20005 from '../assets/images/cars/2000-mitsubishi-lancer-evolution-5.jfif';

// import NSX2 from '../assets/images/cars/1991-honda-nsx-2.jfif';
// import NSX2 from '../assets/images/cars/1991-honda-nsx-2.jfif';
// import NSX2 from '../assets/images/cars/1991-honda-nsx-2.jfif';
// import NSX2 from '../assets/images/cars/1991-honda-nsx-2.jfif';


export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      "_id": "1",
      "model": "NSX",
      "year": "1991",
      "make": "MITSUBISHI",
      "images": [
        NSX1, NSX2, NSX3, NSX4, NSX5
      ],
      "modList": [
        "Science of Speed Honda S2000 start button relay & connector harness", "Science of Speed Honda S2000 push button start switch", "Science of Speed Billet Tow Hook", "Science of Speed Door Speaker Panel pair kit", "Science of Speed Trunk Mounting Panel",
        "Science of Speed Bracket kit for Single & Double DIN stereos", "Science of Speed coilover top hats", "Mita Motorsports OEM Honda / Acura NSX radiator Mount Bracket set", "Mita Motorsports OEM Honda / Acura NSX front door sash set", "Mita Motorsports OEM Honda / Acura NSX door weather seals (L&R)",
        "Mita Motorsports OEM Honda / Acura NSX radiator mount bracket set", "Mita Motorsports OEM Honda / Acura NSX tail light seals", "Mita Motorsports OEM Honda / Acura NSX window seals (L&R)", "KW Suspension V3 coilvoers", "Mishimoto Radiator",
        "Comptech Aggressor rear spoiler", "EBC slotted brake rotors", "EBC red stuff brake pads", "Pioneer DMH-2660NEX head unit","Seibon OEM carbon fiber hood",
        "Seibon TB rear lip", "Seibon TS front lip", "Falken Azenis RT-660 Front (225/40ZR18) Rear (275/35ZR19)",
      ],
      "maintenanceService": [
        "New Parts / Install or Replaced", "New Spark Plug", "New Battery", "New Air cleaner Filter", "New Fuel Filter",
        "New Timing Belt & Adjuster", "New Water Pump", "New Thermostat", "New Valve Cover Gasket x 2", "New Camshaft & Crank Oil Seal x 5",
        "New Plug Hole Gasket x 6", "New Oil Pan Gasket", "New Exhaust Gasket", "New Control Arm x 2 (Rear, L&R)", "New Axle Boot x 1 (LH, Inn)",
        "New Trunk Shocks x 2", "New Wiper Blade x 2", "Service or Repair /done", "Engine Oil & Filter (Wako's Pro-Stage)", "MT Oil (Wako's RG)",
        "Engine Coolant", "Brake Fluid (DOT-4)",
      ],
      "aboutUs": [
        "Toprank International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://toprankjdm.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://toprankjdm.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://toprankjdm.com/Insurance)",
        "Right Hand Drive (RHD) http://toprankjdm.com/RHD",
        "California legalization of imported vehicles (http://toprankjdm.com/California)",
        "Inventory List (http://toprankjdm.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://toprankjdm.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://toprankjdm.com/Find",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://toprankjdm.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://toprankjdm.com/BuyR34)",
      "mileage": "95,647 KM / 59,432",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "builtBy": "Throtl",
      "fullName": "1991 HONDA NSX",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 56995,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "vin": 'NA-1-1',
      "miles": '95,647',
      "engineSize": '3.0 Liter V6',
      "transmissionType": '5 Speed Manual',
      "count": 1
    },
    {
      "_id": "2",
      "model": "RX7 FD",
      "year": "1992",
      "make": "MAZDA",
      "": "",
      "images": [
        Rx71992FD1, Rx71992FD2, Rx71992FD3, Rx71992FD4, Rx71992FD5
      ],
      "modList": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "maintenanceService": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "aboutUs": [
        "Toprank International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://toprankjdm.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://toprankjdm.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://toprankjdm.com/Insurance)",
        "Right Hand Drive (RHD) http://toprankjdm.com/RHD",
        "California legalization of imported vehicles (http://toprankjdm.com/California)",
        "Inventory List (http://toprankjdm.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://toprankjdm.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://toprankjdm.com/Find",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://toprankjdm.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://toprankjdm.com/BuyR34)",
      "mileage": "95,647 KM / 59,432",
      "fullName": "1991 HONDA NSX",
      "builtBy": "Throtl",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 45995,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "vin": 'NA-1-1',
      "miles": '95,647',
      "engineSize": '3.0 Liter V6',
      "transmissionType": '5 Speed Manual',
      "count": 1

    },
    {
      "_id": "3",
      "model": "CAPPUCCINO",
      "year": "1993",
      "make": "SUZUKI",
      "": "",
      "images": [
        Cappuccino1, Cappuccino2, Cappuccino3, Cappuccino4, 
      ],
      "modList": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "maintenanceService": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "aboutUs": [
        "Toprank International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://toprankjdm.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://toprankjdm.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://toprankjdm.com/Insurance)",
        "Right Hand Drive (RHD) http://toprankjdm.com/RHD",
        "California legalization of imported vehicles (http://toprankjdm.com/California)",
        "Inventory List (http://toprankjdm.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://toprankjdm.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://toprankjdm.com/Find",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://toprankjdm.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://toprankjdm.com/BuyR34)",
      "mileage": "95,647 KM / 59,432",
      "fullName": "1991 HONDA NSX",
      "builtBy": "Throtl",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 24995,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "vin": 'NA-1-1',
      "miles": '95,647',
      "engineSize": '3.0 Liter V6',
      "transmissionType": '5 Speed Manual',
      "count": 1

    },
    {
      "_id": "4",
      "model": "SUPRA",
      "year": "1993",
      "make": "TOYOTA",
      "": "",
      "images": [
        Supra19931, Supra19932, Supra19933, Supra19934, 
      ],
      "modList": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "maintenanceService": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "aboutUs": [
        "Toprank International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://toprankjdm.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://toprankjdm.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://toprankjdm.com/Insurance)",
        "Right Hand Drive (RHD) http://toprankjdm.com/RHD",
        "California legalization of imported vehicles (http://toprankjdm.com/California)",
        "Inventory List (http://toprankjdm.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://toprankjdm.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://toprankjdm.com/Find",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://toprankjdm.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://toprankjdm.com/BuyR34)",
      "mileage": "95,647 KM / 59,432",
      "fullName": "1991 HONDA NSX",
      "builtBy": "Throtl",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 115000,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "vin": 'NA-1-1',
      "miles": '95,647',
      "engineSize": '3.0 Liter V6',
      "transmissionType": '5 Speed Manual',
      "count": 1

    },
    {
      "_id": "5",
      "model": "CIVIC SHUTTLE",
      "year": "1995",
      "make": "HONDA",
      "": "",
      "images": [
        CivicShuttle19951, CivicShuttle19952, CivicShuttle19953, CivicShuttle19954, 
      ],
      "modList": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "maintenanceService": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "aboutUs": [
        "Toprank International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://toprankjdm.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://toprankjdm.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://toprankjdm.com/Insurance)",
        "Right Hand Drive (RHD) http://toprankjdm.com/RHD",
        "California legalization of imported vehicles (http://toprankjdm.com/California)",
        "Inventory List (http://toprankjdm.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://toprankjdm.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://toprankjdm.com/Find",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://toprankjdm.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://toprankjdm.com/BuyR34)",
      "mileage": "95,647 KM / 59,432",
      "fullName": "1991 HONDA NSX",
      "builtBy": "Throtl",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 12264,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "vin": 'NA-1-1',
      "miles": '95,647',
      "engineSize": '3.0 Liter V6',
      "transmissionType": '5 Speed Manual',
      "count": 1

    },
    {
      "_id": "6",
      "model": "LANCER EVOLUTION III",
      "year": "1995",
      "make": "MITSUBISHI",
      "": "",
      "images": [
        Evoiii19951, Evoiii19952, Evoiii19953, Evoiii19954, 
      ],
      "modList": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "maintenanceService": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "aboutUs": [
        "Toprank International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://toprankjdm.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://toprankjdm.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://toprankjdm.com/Insurance)",
        "Right Hand Drive (RHD) http://toprankjdm.com/RHD",
        "California legalization of imported vehicles (http://toprankjdm.com/California)",
        "Inventory List (http://toprankjdm.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://toprankjdm.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://toprankjdm.com/Find",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://toprankjdm.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://toprankjdm.com/BuyR34)",
      "mileage": "95,647 KM / 59,432",
      "fullName": "1991 HONDA NSX",
      "builtBy": "Throtl",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 56995,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "vin": 'NA-1-1',
      "miles": '95,647',
      "engineSize": '3.0 Liter V6',
      "transmissionType": '5 Speed Manual',
      "count": 1

    },
    {
      "_id": "7",
      "model": "INTEGRA TYPE-R",
      "year": "1996",
      "make": "HONDA",
      "": "",
      "images": [
        Integra1996TR1, Integra1996TR2, Integra1996TR3, Integra1996TR4, Integra1996TR5, Integra1996TR7, Integra1996TR11, Integra1996TR14, Integra1996TR16, Integra1996TR17, Integra1996TR18, Integra1996TR19, Integra1996TR20, Integra1996TR34, Integra1996TR35, Integra1996TR36
      ],
      "modList": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "maintenanceService": [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
      ],
      "aboutUs": [
        "Toprank International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
        "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
        "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://toprankjdm.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
        "FAQ (http://toprankjdm.com/FAQ)",
        "Insurance for JDM/Imported Vehicles (http://toprankjdm.com/Insurance)",
        "Right Hand Drive (RHD) http://toprankjdm.com/RHD",
        "California legalization of imported vehicles (http://toprankjdm.com/California)",
        "Inventory List (http://toprankjdm.com/cars)",
        "Parts and Maintenance for Nissan Skyline (http://toprankjdm.com/Parts)",
        "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://toprankjdm.com/Find",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://toprankjdm.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://toprankjdm.com/BuyR34)",
      "mileage": "95,647 KM / 59,432",
      "fullName": "1991 HONDA NSX",
      "builtBy": "Throtl",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 32995,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "vin": 'NA-1-1',
      "miles": '95,647',
      "engineSize": '3.0 Liter V6',
      "transmissionType": '5 Speed Manual',
      "count": 1

    },
    {
      "_id": "8",
      "model": "LANCER EVOLUTION",
      "year": "2000",
      "make": "MITSUBISHI",
      "": "",
      "images": [
        LancerEVO20001, LancerEVO20002, LancerEVO20003, LancerEVO20004, 
      ],
      "fullName": "1991 HONDA NSX",
      "builtBy": "Throtl",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 80188,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "vin": 'NA-1-1',
      "miles": '95,647',
      "engineSize": '3.0 Liter V6',
      "transmissionType": '5 Speed Manual',
      "count": 1

    }
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
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}