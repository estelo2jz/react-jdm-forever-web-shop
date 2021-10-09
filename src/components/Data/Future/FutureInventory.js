import React, { createContext, useState, useEffect } from 'react'

// the last 4 numbers is the year
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

export const FutureDataContext = createContext();

export const FutureDataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      "_id": "1",
      "model": "Future",
      "year": "1991",
      "make": "MITSUBISHI",
      "images": [
        NSX1, NSX2, NSX3, NSX4, NSX5, NSX6, NSX16, NSX7, NSX8, NSX9, NSX10, NSX11, NSX12, NSX13, NSX14, NSX15
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

      "builtBy": "Throtl",
      "mileage": "mileage",
      "price": 'price',
      "bodyColor": 'Black',

      "stockNumber": 12125991,
      "vin": 'vin',
      "miles": 'miles',
      "engineSize": 'engine',
      "transmissionType": '5 Speed Manual',
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