import React, { createContext, useState, useEffect } from 'react'

import MaxdaConvertilbe19881 from '../../../assets/images/CurrentCars/1988-mazda-rx-7-convertible-eng-rebuilt.jfif';
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

import NSX1 from '../../../assets/images/cars/1991-honda-nsx-1.jfif';
import NSX2 from '../../../assets/images/cars/1991-honda-nsx-2.jfif';
import NSX3 from '../../../assets/images/cars/1991-honda-nsx-3.jfif';
import NSX4 from '../../../assets/images/cars/1991-honda-nsx-4.jfif';
import NSX5 from '../../../assets/images/cars/1991-honda-nsx-5.jfif';
import NSX6 from '../../../assets/images/cars/1991-honda-nsx-6.jfif';
import NSX7 from '../../../assets/images/cars/1991-honda-nsx-7.jfif';
import NSX8 from '../../../assets/images/cars/1991-honda-nsx-8.jfif';
import NSX9 from '../../../assets/images/cars/1991-honda-nsx-9.jfif';
import NSX10 from '../../../assets/images/cars/1991-honda-nsx-10.jfif';
import NSX11 from '../../../assets/images/cars/1991-honda-nsx-11.jfif';
import NSX12 from '../../../assets/images/cars/1991-honda-nsx-12.jfif';
import NSX13 from '../../../assets/images/cars/1991-honda-nsx-13.jfif';
import NSX14 from '../../../assets/images/cars/1991-honda-nsx-14.jfif';
import NSX15 from '../../../assets/images/cars/1991-honda-nsx-15.jfif';
import NSX16 from '../../../assets/images/cars/1991-honda-nsx-16.jfif';

import Rx71992FD1 from '../../../assets/images/cars/1992-mazda-rx7-fd-1.jfif';
import Rx71992FD2 from '../../../assets/images/cars/1992-mazda-rx7-fd-2.jfif';
import Rx71992FD3 from '../../../assets/images/cars/1992-mazda-rx7-fd-3.jfif';
import Rx71992FD4 from '../../../assets/images/cars/1992-mazda-rx7-fd-4.jfif';
import Rx71992FD5 from '../../../assets/images/cars/1992-mazda-rx7-fd-5.jfif';
import Rx71992FD6 from '../../../assets/images/cars/1992-mazda-rx7-fd-6.jfif';
import Rx71992FD7 from '../../../assets/images/cars/1992-mazda-rx7-fd-7.jfif';
import Rx71992FD8 from '../../../assets/images/cars/1992-mazda-rx7-fd-8.jfif';
import Rx71992FD9 from '../../../assets/images/cars/1992-mazda-rx7-fd-9.jfif';
import Rx71992FD10 from '../../../assets/images/cars/1992-mazda-rx7-fd-10.jfif';
import Rx71992FD11 from '../../../assets/images/cars/1992-mazda-rx7-fd-11.jfif';
import Rx71992FD12 from '../../../assets/images/cars/1992-mazda-rx7-fd-12.jfif';
import Rx71992FD13 from '../../../assets/images/cars/1992-mazda-rx7-fd-13.jfif';
import Rx71992FD14 from '../../../assets/images/cars/1992-mazda-rx7-fd-14.jfif';
import Rx71992FD15 from '../../../assets/images/cars/1992-mazda-rx7-fd-15.jfif';
import Rx71992FD16 from '../../../assets/images/cars/1992-mazda-rx7-fd-16.jfif';


import Cappuccino1 from '../../../assets/images/cars/1993-suzuki-cappuccino-1.jfif';
import Cappuccino2 from '../../../assets/images/cars/1993-suzuki-cappuccino-2.jfif';
import Cappuccino3 from '../../../assets/images/cars/1993-suzuki-cappuccino-3.jfif';
import Cappuccino4 from '../../../assets/images/cars/1993-suzuki-cappuccino-4.jfif';
import Cappuccino5 from '../../../assets/images/cars/1993-suzuki-cappuccino-5.jfif';
import Cappuccino6 from '../../../assets/images/cars/1993-suzuki-cappuccino-6.jfif';
import Cappuccino7 from '../../../assets/images/cars/1993-suzuki-cappuccino-7.jfif';
import Cappuccino8 from '../../../assets/images/cars/1993-suzuki-cappuccino-8.jfif';
import Cappuccino9 from '../../../assets/images/cars/1993-suzuki-cappuccino-9.jfif';
import Cappuccino10 from '../../../assets/images/cars/1993-suzuki-cappuccino-10.jfif';
import Cappuccino11 from '../../../assets/images/cars/1993-suzuki-cappuccino-11.jfif';
import Cappuccino12 from '../../../assets/images/cars/1993-suzuki-cappuccino-12.jfif';
import Cappuccino13 from '../../../assets/images/cars/1993-suzuki-cappuccino-13.jfif';
import Cappuccino14 from '../../../assets/images/cars/1993-suzuki-cappuccino-14.jfif';
import Cappuccino15 from '../../../assets/images/cars/1993-suzuki-cappuccino-15.jfif';



import Supra19931 from '../../../assets/images/cars/1993-toyota-supra-1.jfif';
import Supra19932 from '../../../assets/images/cars/1993-toyota-supra-2.jfif';
import Supra19933 from '../../../assets/images/cars/1993-toyota-supra-3.jfif';
import Supra19934 from '../../../assets/images/cars/1993-toyota-supra-4.jfif';
import Supra19935 from '../../../assets/images/cars/1993-toyota-supra-5.jfif';
import Supra19936 from '../../../assets/images/cars/1993-toyota-supra-6.jfif';
import Supra19937 from '../../../assets/images/cars/1993-toyota-supra-7.jfif';
import Supra19938 from '../../../assets/images/cars/1993-toyota-supra-8.jfif';
import Supra19939 from '../../../assets/images/cars/1993-toyota-supra-9.jfif';
import Supra199310 from '../../../assets/images/cars/1993-toyota-supra-10.jfif';
import Supra199311 from '../../../assets/images/cars/1993-toyota-supra-11.jfif';
import Supra199312 from '../../../assets/images/cars/1993-toyota-supra-12.jfif';
import Supra199313 from '../../../assets/images/cars/1993-toyota-supra-13.jfif';
import Supra199314 from '../../../assets/images/cars/1993-toyota-supra-14.jfif';
import Supra199315 from '../../../assets/images/cars/1993-toyota-supra-15.jfif';


import CivicShuttle19951 from '../../../assets/images/cars/1995-honda-civic-shuttle-1.jfif';
import CivicShuttle19952 from '../../../assets/images/cars/1995-honda-civic-shuttle-2.jfif';
import CivicShuttle19953 from '../../../assets/images/cars/1995-honda-civic-shuttle-3.jfif';
import CivicShuttle19954 from '../../../assets/images/cars/1995-honda-civic-shuttle-4.jfif';
import CivicShuttle19955 from '../../../assets/images/cars/1995-honda-civic-shuttle-5.jfif';
import CivicShuttle19956 from '../../../assets/images/cars/1995-honda-civic-shuttle-6.jfif';
import CivicShuttle19957 from '../../../assets/images/cars/1995-honda-civic-shuttle-7.jfif';
import CivicShuttle19958 from '../../../assets/images/cars/1995-honda-civic-shuttle-8.jfif';
import CivicShuttle19959 from '../../../assets/images/cars/1995-honda-civic-shuttle-9.jfif';
import CivicShuttle199510 from '../../../assets/images/cars/1995-honda-civic-shuttle-10.jfif';
import CivicShuttle199511 from '../../../assets/images/cars/1995-honda-civic-shuttle-11.jfif';
import CivicShuttle199512 from '../../../assets/images/cars/1995-honda-civic-shuttle-12.jfif';
import CivicShuttle199513 from '../../../assets/images/cars/1995-honda-civic-shuttle-13.jfif';
import CivicShuttle199514 from '../../../assets/images/cars/1995-honda-civic-shuttle-14.jfif';
import CivicShuttle199515 from '../../../assets/images/cars/1995-honda-civic-shuttle-15.jfif';

import Evoiii19951 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-1.jfif';
import Evoiii19952 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-2.jfif';
import Evoiii19953 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-3.jfif';
import Evoiii19954 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-4.jfif';
import Evoiii19955 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-5.jfif';
import Evoiii19956 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-6.jfif';
import Evoiii19957 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-7.jfif';
import Evoiii19958 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-8.jfif';
import Evoiii19959 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-9.jfif';
import Evoiii199510 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-10.jfif';
import Evoiii199511 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-11.jfif';
import Evoiii199512 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-12.jfif';
import Evoiii199513 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-13.jfif';
import Evoiii199514 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-14.jfif';
import Evoiii199515 from '../../../assets/images/cars/1995-mitsubishi-lancer-evolution-iii-15.jfif';


import Integra1996TR1 from '../../../assets/images/cars/1996-honda-integra-type-r-1.jfif';
import Integra1996TR2 from '../../../assets/images/cars/1996-honda-integra-type-r-2.jfif';
import Integra1996TR3 from '../../../assets/images/cars/1996-honda-integra-type-r-3.jfif';
import Integra1996TR4 from '../../../assets/images/cars/1996-honda-integra-type-r-4.jfif';
import Integra1996TR5 from '../../../assets/images/cars/1996-honda-integra-type-r-5.jfif';
import Integra1996TR7 from '../../../assets/images/cars/1996-honda-integra-type-r-7.jfif';
import Integra1996TR11 from '../../../assets/images/cars/1996-honda-integra-type-r-11.jfif';
import Integra1996TR14 from '../../../assets/images/cars/1996-honda-integra-type-r-14.jfif';
import Integra1996TR20 from '../../../assets/images/cars/1996-honda-integra-type-r-20.jfif';
import Integra1996TR16 from '../../../assets/images/cars/1996-honda-integra-type-r-16.jfif';
import Integra1996TR17 from '../../../assets/images/cars/1996-honda-integra-type-r-17.jfif';
import Integra1996TR18 from '../../../assets/images/cars/1996-honda-integra-type-r-18.jfif';
import Integra1996TR19 from '../../../assets/images/cars/1996-honda-integra-type-r-19.jfif';
import Integra1996TR34 from '../../../assets/images/cars/1996-honda-integra-type-r-34.jfif';
import Integra1996TR35 from '../../../assets/images/cars/1996-honda-integra-type-r-35.jfif';
import Integra1996TR36 from '../../../assets/images/cars/1996-honda-integra-type-r-36.jfif';

import LancerEVO20001 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-1.jfif';
import LancerEVO20002 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-2.jfif';
import LancerEVO20003 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-3.jfif';
import LancerEVO20004 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-4.jfif';
import LancerEVO20005 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-5.jfif';
import LancerEVO20006 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-6.jfif';
import LancerEVO20007 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-7.jfif';
import LancerEVO20008 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-8.jfif';
import LancerEVO20009 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-9.jfif';
import LancerEVO200010 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-10.jfif';
import LancerEVO200011 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-11.jfif';
import LancerEVO200012 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-12.jfif';
import LancerEVO200013 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-13.jfif';
import LancerEVO200014 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-14.jfif';
import LancerEVO200015 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-15.jfif';
import LancerEVO200016 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-16.jfif';
import LancerEVO200017 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-17.jfif';
import LancerEVO200018 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-18.jfif';
import LancerEVO200019 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-19.jfif';
import LancerEVO200021 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-21.jfif';
import LancerEVO200022 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-22.jfif';
import LancerEVO200023 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-23.jfif';
import LancerEVO200024 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-24.jfif';
import LancerEVO200025 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-25.jfif';
import LancerEVO200026 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-26.jfif';
import LancerEVO200027 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-27.jfif';
import LancerEVO200028 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-28.jfif';
import LancerEVO200029 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-29.jfif';
import LancerEVO200030 from '../../../assets/images/cars/2000-mitsubishi-lancer-evolution-30.jfif';

export const CurrentDataContext = createContext();

export const CurrentDataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      "_id": "1",
      "model": "NSX",
      "year": "1991",
      "make": "Nissan",
      "images": [
        NSX1, NSX2, NSX3, NSX4, NSX5, NSX6, NSX16,NSX7, NSX8, NSX9, NSX10, NSX11, NSX12, NSX13, NSX14, NSX15
      ],
      "modList": [
        "Science of Speed Honda S2000 start button relay & connector harness", "Science of Speed Honda S2000 push button start switch", "Science of Speed Billet Tow Hook", "Science of Speed Door Speaker Panel pair kit", "Science of Speed Trunk Mounting Panel",
        "Science of Speed Bracket kit for Single & Double DIN stereos", "Science of Speed coilover top hats", "Mita Motorsports OEM Honda / Acura NSX radiator Mount Bracket set", "Mita Motorsports OEM Honda / Acura NSX front door sash set", "Mita Motorsports OEM Honda / Acura NSX door weather seals (L&R)",
        "Mita Motorsports OEM Honda / Acura NSX radiator mount bracket set", "Mita Motorsports OEM Honda / Acura NSX tail light seals", "Mita Motorsports OEM Honda / Acura NSX window seals (L&R)", "KW Suspension V3 coilvoers", "Mishimoto Radiator",
        "Comptech Aggressor rear spoiler", "EBC slotted brake rotors", "EBC red stuff brake pads", "Pioneer DMH-2660NEX head unit", "Seibon OEM carbon fiber hood",
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
        "JDM Lovers International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",
      "mileage": "95,647 KM / 59,432",
      "fullNameWithAddress": "1991 HONDA NSX FOR SALE INCYPRESS, CALIFORNIA",
      "builtBy": "Throtl",
      "fullName": "1991 HONDA NSX",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 56995,
      "bodyColor": 'Black',
      "stockNumber": 12125991,
      "none": "-",
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
        Rx71992FD1, Rx71992FD2, Rx71992FD3, Rx71992FD4, Rx71992FD5, Rx71992FD6, Rx71992FD7, Rx71992FD8, Rx71992FD9, Rx71992FD10, Rx71992FD11, Rx71992FD12, Rx71992FD13, Rx71992FD14, Rx71992FD15, Rx71992FD16
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
      // "aboutUs": [
      //   "JDM Lovers International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
      //   "Financing Available. Nationwide Shipping Available Please contact us for details. 844-523-2233 or sales@importavehicle.com",
      //   "All vehicles are As/Is No warranty. Imported vehicles can not be registered in California (http://jdmlover.com/California) until brought into California compliance. Please check all local state laws for information on title and registration. 25 year old vehicles are exempt from FMVSS requirements. Vehicles over 21 years old are exempt from EPA compliance requirements for importation.",
      //   "FAQ (http://jdmlover.com/FAQ)",
      //   "Insurance for JDM/Imported Vehicles (http://jdmlover.com/Insurance)",
      //   "Right Hand Drive (RHD) http://jdmlover.com/RHD",
      //   "California legalization of imported vehicles (http://jdmlover.com/California)",
      //   "Inventory List (http://jdmlover.com/cars)",
      //   "Parts and Maintenance for Nissan Skyline (http://jdmlover.com/Parts)",
      //   "Find Your Car - Looking for a car we don't have in stock? Looking at a car that will be legal in the future? We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world. Learn more http://jdmlover.com/Find",
      // ],
      "toBeImported": [
        "Honda Integra Type R DC2 Oct 1995 = Oct 2020",
        "Nissan Skyline GT-R R33 LM Version May 1996 = May 2021",
        "Mitsubishi Evolution IV Aug 1996 = Aug 2021",
        "Toyota Chaser JZX100 Sep 1996 = Sep 2021",
        "Mitsubishi Evolution V Jan 1998 = Jan 2023",
        "Nissan Silvia S15 Jan 1999 = Jan 2024",
        "Nissan Skyline GT-R R34 - Jan 1999 = Jan 2024"
      ],
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",
      "mileage": "77,240 KM meter changed at dealer / on cluster 28,818 KM ",
      "fullName": "1992 MAZDA RX7 FD",
      "builtBy": "unknown",
      "fullNameWithAddress": "1992 MAZDA RX7 FD FOR SALE IN CYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 45995,
      "bodyColor": 'Yellow',
      "stockNumber": 'TRI10546',
      "none": "-",
      "vin": 'FD3S-1',
      "miles": '171,959',
      "engineSize": '-',
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
        Cappuccino1, Cappuccino2, Cappuccino3, Cappuccino4, Cappuccino6, Cappuccino7, Cappuccino8, Cappuccino9, Cappuccino10, Cappuccino11, Cappuccino12, Cappuccino13, Cappuccino14, Cappuccino15, 
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
        "JDM Lovers International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",
      "mileage": "95,499 KM ~60,000 miles",
      "fullName": "1993 SUZUKI CAPPUCCINO",
      "builtBy": "unknown",
      "fullNameWithAddress": "1993 SUZUKI CAPPUCCINO FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 24995,
      "bodyColor": 'White',
      "stockNumber": 12126029,
      "none": "-",
      "vin": 'EA11R-',
      "miles": '60,000',
      "engineSize": '657 cc F6A (Turbo)',
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
        Supra19931, Supra19932, Supra19933, Supra19934,Supra19935, Supra19936, Supra19937, Supra19938, Supra19939, Supra199310, Supra199311, Supra199312, Supra199313, Supra199314, Supra199315
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
        "JDM Lovers International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",
      "mileage": "75,713 KM / 47,046 miles",
      "fullName": "1993 TOYOTA SUPRA",
      "builtBy": "unknown",
      "fullNameWithAddress": "1993 TOYOTA SUPRA FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 115000,
      "bodyColor": 'Silver',
      "stockNumber": 12126031,
      "none": "-",
      "vin": 'JZA-00',
      "miles": '48,000',
      "engineSize": '3.0 L 2JZ-GTE I6 (Turbo)',
      "transmissionType": '6 Speed Manual',
      "count": 1

    },
    {
      "_id": "5",
      "model": "CIVIC SHUTTLE",
      "year": "1995",
      "make": "HONDA",
      "": "",
      "images": [
        CivicShuttle19951, CivicShuttle19952, CivicShuttle19953, CivicShuttle19954, CivicShuttle19955, CivicShuttle19956, CivicShuttle19957, CivicShuttle19958, CivicShuttle19959, CivicShuttle199510, CivicShuttle199511, CivicShuttle199512, CivicShuttle199513, CivicShuttle199514, CivicShuttle199515
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
        "JDM Lovers International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",
      "mileage": "-",
      "fullName": "1995 HONDA CIVIC SHUTTLE",
      "builtBy": "unknown",
      "fullNameWithAddress": "1995 HONDA CIVIC SHUTTLE EF5 EAGLE 4WD FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 12264,
      "bodyColor": 'Black / gray',
      "stockNumber": 'JP12126010',
      "none": "-",
      "vin": 'EF5-35',
      "miles": '132,385',
      "engineSize": '-',
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
        Evoiii19951, Evoiii19952, Evoiii19953, Evoiii19954,Evoiii19955,Evoiii19956,Evoiii19957,Evoiii19958,Evoiii19959,Evoiii199510,Evoiii199511,Evoiii199512,Evoiii199513,Evoiii199514,Evoiii199515
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
        "JDM Lovers International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",
      "mileage": "73,384 KM / 45,598 (Original)",
      "fullName": "1991 MITSUBISHI LANCER EVOLUTION III",
      "builtBy": "unknown",
      "fullNameWithAddress": "1995 MITSUBISHI LANCER EVOLUTION II FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 56995,
      "bodyColor": 'Yellow',
      "stockNumber": 10635,
      "none": "-",
      "vin": 'CE9A-0',
      "miles": '45,600',
      "engineSize": '4G63',
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
        "JDM Lovers International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",
      "mileage": "127,189 KM / 79,031 (Original)",
      "fullName": "1996 HONDA INTEGRA TYPE-R",
      "builtBy": "-",
      "fullNameWithAddress": "1996 HONDA INTEGRA TYPE-R FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 32995,
      "bodyColor": 'White',
      "stockNumber": 10646,
      "none": "-",
      "vin": 'DC2-11',
      "miles": '80,000',
      "engineSize": '-',
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
        LancerEVO20001, LancerEVO20002, LancerEVO20003, LancerEVO20004, LancerEVO20005, LancerEVO20006, LancerEVO20007, LancerEVO20008, LancerEVO20009, LancerEVO200010, LancerEVO200011, LancerEVO200012, LancerEVO200013, LancerEVO200014, LancerEVO200015, LancerEVO200016, LancerEVO200017, LancerEVO200018, LancerEVO200019, LancerEVO200021, LancerEVO200022, LancerEVO200023, LancerEVO200024, LancerEVO200025, LancerEVO200026, LancerEVO200027, LancerEVO200028, LancerEVO200029, LancerEVO200030,
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
        "JDM Lovers International Vehicle Importers specializes in importing and selling JDM (Japanese domestic market) cars. From Nissan Skylines to Toyota Chasers, vehicles over 25 years old are legal to import. In addition to JDM cars, we can also import cars from other countries, Show or Display vehicles, and race cars.",
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
      "toBeImportedOne": "Japanese (JDM) cars turning 25 years old in 2021 and beyond (http://jdmlover.com/2021)",
      "toBeImportedTwo": "How to Buy and Store an R34 GT-R in Japan until 2024 (http://jdmlover.com/BuyR34)",
      "mileage": "",
      "fullName": "2000 MITSUBISHI LANCER EVOLUTION",
      "builtBy": "unknown",
      "fullNameWithAddress": "2000 MITSUBISHI LANCER EVOLUTION TOMMI MAKINEN FOR SALE INCYPRESS, CALIFORNIA",
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 80188,
      "bodyColor": 'RED',
      "stockNumber": 'JP12126022',
      "none": "-",
      "vin": 'CP9A-0',
      "miles": '14,361',
      "engineSize": '2.0 L 4G63T I4 Turbocharged',
      "transmissionType": '5 Speed Manual',
      "count": 1

    },
    {
      "_id": "9",
      "model": "RX-7 CONVERTIBLE ENG REBUILT",
      "year": "1988",
      "make": "MAZDA",
      "images": [
        MaxdaConvertilbe19881
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
      "price": '12,995',
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
      "model": "SKYLINE GT-R",
      "year": "1991",
      "make": "NISSAN",
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
      "price": '49,995',
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
      "model": "SKYLINE GT-R",
      "year": "1991",
      "make": "NISSAN",
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
      "price": '109,995',
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
      "model": "SKYLINE GTS--T 4DR",
      "year": "1991",
      "make": "NISSAN",
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
      "price": '26,995',
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
      "model": "LAND CRUISER VX DIESEL TURBO",
      "year": "1991",
      "make": "TOYOTA",
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
      "price": '35,995',
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
      "model": "RX7 FD",
      "year": "1992",
      "make": "MAZDA",
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
      "price": '51,995',
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
      "model": "SKYLINE AUTECH RB26DE",
      "year": "1992",
      "make": "NISSAN",
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
      "price": '44,995',
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
      "model": "COMMODORE UTE",
      "year": "1994",
      "make": "HOLDEN",
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
      "price": '17,499',
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
      "model": "CICIV FERIO",
      "year": "1994",
      "make": "HONDA",
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
      "price": '24,995',
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
      "model": "NSX",
      "year": "1994",
      "make": "HONDA",
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
      "price": '109,995',
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
      "model": "RX-7",
      "year": "1994",
      "make": "MAZDA",
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
      "price": '47,995',
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
      "model": "RX7 FD",
      "year": "1994",
      "make": "MAZDA",
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
      "price": '49,995',
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
      "model": "DELICA SPACE GEAR SUPER EXCEED",
      "year": "1995",
      "make": "MITSUBISHI",
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
      "model": "SKYLINE GT-R",
      "year": "1995",
      "make": "NISSAN",
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
      "price": '169,995',
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
      "model": "SKYLINE GT-R",
      "year": "1995",
      "make": "NISSAN",
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
      "price": '64,995',
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
      "model": "SKYLINE GT-R V SPEC",
      "year": "1995",
      "make": "NISSAN",
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
      "price": '79,995',
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
      "model": "SKYLINE GT-R V SPEC",
      "year": "1995",
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
      "price": '65,995',
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
      "model": "SKYLINE GT-R V SPEC",
      "year": "1995",
      "make": "NISSAN",
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
      "price": '86,995',
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
      "model": "INTEGRA TYPE-R",
      "year": "1996",
      "make": "HONDA",
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
      "price": '34,995',
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
      "model": "INTEGRA TYPE-R",
      "year": "1996",
      "make": "HONDA",
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
      "price": '33,995',
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
      "model": "CELICA GT-FOUR",
      "year": "1996",
      "make": "TOYOTA",
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
      "price": '26,995',
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
    <CurrentDataContext.Provider value={value}>
      {props.children}
    </CurrentDataContext.Provider>
  )
}