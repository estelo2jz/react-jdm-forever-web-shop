import React, { createContext, useState, useEffect } from 'react'

// the last 4 numbers is the year
import NSX1 from '../../../assets/images/cars/1991-honda-nsx-1.jfif';
import Honda1996IntegraTR from '../../../assets/images/FutureCars/1996-honda-integra-type-r.jpg';

import { v4 as uuidv4 } from 'uuid';

export const FutureDataContext = createContext();

export const FutureDataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      "_id": "1",
      "model": "Integra Type-R",
      "year": "1996",
      "make": "Honda",
      "images": [
        Honda1996IntegraTR, 
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
      "fullName": "1996 HONDA INTEGRA TYPE-R",

      "builtBy": "Throtl",
      "mileage": "mileage",
      "price": 'Call For Price',
      "bodyColor": 'Championship White',

      "stockNumber": "DC2-11",
      "vin": 'vin',
      "miles": '81,900',
      "engineSize": 'engine',
      "transmissionType": '5 Speed Manual',
      "comingSoon": "COMING SOON",
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
    <FutureDataContext.Provider value={value}>
      {props.children}
    </FutureDataContext.Provider>
  )
}