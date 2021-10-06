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
        NSX1, NSX2, NSX3, NSX4, 
      ],
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
        Rx71992FD1, Rx71992FD2, Rx71992FD3, , Rx71992FD5
      ],
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
        Integra1996TR1, Integra1996TR2, Integra1996TR3, Integra1996TR4, 
      ],
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