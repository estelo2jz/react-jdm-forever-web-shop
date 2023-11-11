import React from "react";

import FindForm from './FindForm';

import FindV from "../../assets/images/findVehicle/findVehicle.jpg";
import FindV2 from "../../assets/images/findVehicle/findVehicle2.png";


import "./FindVehicle.sass";

const FindVehicle = () => {
  return (
    <div className="find-vehicle">
      <div className="find-vehicle__right">
        <div className="find-vehicle__left-bg">
          <img src={FindV} alt="" />
        </div>
        <div className="find-vehicle__left-container">
          <div className="find-vehicle__left-desc">
            <h3>FIND YOUR VEHICLE</h3>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            Looking for a car  that Toprank USA doesn't have in stock? Looking at a car that will be legal in the future? (How to Buy and Store an R34 GT-R in Japan until 2024 (http://toprankjdm.com/BuyR34 )We can help you find, buy, and legally import a vehicle to the USA. From Japan, to Australia, New Zealand, Europe, or anywhere else in the world.  Fill out the form below to get started, instructions are below. 
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            Toprank.Tokyo is an established Japanese car dealer and exporter, to make sourcing your imported vehicle easier and with more confidence than ever before. Topranks network covers Japan, Australia, Europe, and South America. With over 30 years experience in the import and export vehicle market our experts can globally source your dream car or assist you in finding the right car for you from our large inventory of imported vehicles already here in the US and ready for sale.
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            If the car is here in the US, we encourage potential buyers to come and inspect the vehicle, or send an inspector to examine the car before purchase. If the vehicle is overseas, we can arrange for an inspection, purchase, transport, and ship the vehicle to the US.  Before you buy some random, unknown, uninspected vehicle at auction, let us get it inspected for you. Not everything going though the Japanese auto auction, is something you want to purchase.  Many companies offering auction service are small, and don't have the ability to inspect both prior to purchase, and after purchase. Our PDI facility has the capability to both service and modifiy your newly auction, or private party purchased vehicle in Japan. 
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <h4 className="find-vehicle__left-desc-child">
            How to buy a car that is not in our USA inventory:
            </h4>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            1)     Pay $2,500 to access Japanese auctions going on every week. This $2500 fee applies to your first purchase.
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            2)     Fill out our vehicle request form..
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            3)     When you find a vehicle that you would like to purchase,  50% of your bid amount will be required to be transferred.
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            4)     When the vehicle is won, then the remaining balance will be due, before the car ships from Japan.
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            5)     Estimated total costs, in addition to the cost of the vehicle are $4500-$6500. 
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <h4 className="find-vehicle__left-desc-child">
            Cost Breakdown:
            </h4>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            1)     Cost of vehicle
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            2)     Auction fees (if purchased at auction)
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            3)     Inspection
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            4)     Local Japanese transportation
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            5)     Freight forwarder
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            6)     Customs broker
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            7)     2.5% tariff for cars, 25% for trucks
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            8)     Local transport in the US
            </p>
          </div>
          <div className="find-vehicle__left-desc">
            <p className="find-vehicle__left-desc-child">
            Please contact Toprank Importers at 844-523-2233 or sales@importavehicle.com with any additional questions.
            </p>
          </div>
        </div>
        <div className="find-vehicle__left-bg">
          <img src={FindV2} alt="" />
        </div>
      </div>
      <div className="find-vehicle__right">
        <div className="find-vehicle__right-container">
          <FindForm />
        </div>
      </div>
    </div>
  );
};

export default FindVehicle;
