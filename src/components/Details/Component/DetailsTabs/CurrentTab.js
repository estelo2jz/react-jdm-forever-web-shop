import React, { useContext, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { CurrentDataContext } from '../../../Data/Current/CurrentInventory';
import DescThumb from '../../DescThumb';
import MaintenanceThumb from '../../MaintenanceThumb';
import ToBeImportedThumb from '../../ToBeImportedThumb';

import './styles/main.scss';

const CurrentTab = () => {
  const { id } = useParams();
  const value = useContext(CurrentDataContext);
  const [products] = value.products

  const [index, setIndex] = useState(0)
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id
  })


  return (
    <>
      {
        details.map(product => (
          <div className="details-tab__container">
            <div className="tabs-template__outer-container">
              <div className="tabs-template__specs">
                <div className="tabs-template__specs-engine">
                  <p>ENGINE</p>
                  <div className="tabs-template__specs-engine-container">
                    <div className="tabs-template__specs-engine-children">
                      <span>ENGINE TYPE</span>
                      <span>{product.none}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>ENGINE SIZE</span>
                      <span>{product.engineSize}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>FUEL SPECIFICATION</span>
                      <span>{product.none}</span>
                    </div>
                  </div>
                </div>
                <div className="tabs-template__specs-body">
                  <p>BODY</p>
                  <div className="tabs-template__specs-engine-container">
                    <div className="tabs-template__specs-engine-children">
                      <span>BODY COLOR</span>
                      <span>{product.bodyColor}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>BODY STYLE</span>
                      <span>{product.engineSize}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>DOORS</span>
                      <span>{product.none}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>PAINT TYPE</span>
                      <span>{product.none}</span>
                    </div>
                  </div>
                </div>
                <div className="tabs-template__specs-basic">
                  <p>BASIC</p>
                  <div className="tabs-template__specs-engine-container">
                    <div className="tabs-template__specs-engine-children">
                      <span>YEAR</span>
                      <span>{product.year}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>MAKE</span>
                      <span>{product.make}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>MODEL</span>
                      <span>{product.model}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>KM</span>
                      <span>{product.miles}</span>
                    </div>
                  </div>
                </div>
                <div className="tabs-template__specs-interior">
                  <p>INTERIOR</p>
                  <div className="tabs-template__specs-engine-container">
                    <div className="tabs-template__specs-engine-children">
                      <span>INTERIOR COLOR</span>
                      <span>{product.bodyColor}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>SOCONDARY INTERIOR COLOR</span>
                      <span>{product.none}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>SEATING TYPE</span>
                      <span>{product.none}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>SEAT MATERIAL</span>
                      <span>{product.none}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>SHIFTER TYPE</span>
                      <span>{product.none}</span>
                    </div>
                    <div className="tabs-template__specs-engine-children">
                      <span>CENTER CONSOLE</span>
                      <span>{product.none}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs-template__outer-container">
              <div className="tabs-template__container">
                <div className="tabs-template__fullname">
                  <p>{product.fullNameWithAddress}</p>
                </div>
                <div className="tabs-template__by">
                  <span>
                    Built by
                  </span>
                  <span>{product.builtBy}</span>
                </div>

                <div className="tabs-template__mileage">
                  <span>
                    Mileage
                  </span>
                  <span>{product.mileage}</span>
                </div>

                <div className="details__mod-list">
                  <div className="details__mod-list-heading">
                    MOD LIST
                  </div>
                  <div className="details__mod-list-container">
                    <DescThumb modList={product.modList} setIndex={setIndex} />
                  </div>
                </div>

                <div className="details__main-service">
                  <div className="details__main-service-heading">
                    <p>MAINTENANCE & SERVICE</p>
                  </div>
                  <MaintenanceThumb maintenanceService={product.maintenanceService} setIndex={setIndex} />
                </div>
              </div>
              <div className="details__imported">
                <div className="details__imported-heading">
                  <p>WHEN DO THESE JDM VEHICLES START TO TURN 25 YEARS OLD?</p>
                </div>
                <ToBeImportedThumb toBeImported={product.toBeImported} setIndex={setIndex} />
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default CurrentTab
