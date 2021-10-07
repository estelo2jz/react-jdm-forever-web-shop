import React, { useContext, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { DataContext } from '../../components/DataProvider';
import DescThumb from './DescThumb';
import MaintenanceThumb from './MaintenanceThumb';
import ToBeImportedThumb from './ToBeImportedThumb';
import AboutThumb from './AboutThumb';

import '../Details/DetailsTab.scss'

const DetailsTab = () => {
  const { id } = useParams();
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

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
            <div className="tabbed">
              <input type="radio" name="tabs" id="tab_one" checked />
              <label for="tab_one" >DESCRIPTION</label>
              <input type="radio" name="tabs" id="tab_two" checked />
              <label for="tab_two" >SPECS AND OPTIONS</label>
              <input type="radio" name="tabs" id="tab_three" checked />
              <label for="tab_three" >VIDEO</label>
              {/* <input type="radio" name="tabs" id="tab_four" checked />
              <label for="tab_four" >Watched Deals</label> */}
              <div className="tabs">
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
                      {/* <span>miles</span> */}
                    </div>

                    <div className="details__mod-list">
                      <div className="details__mod-list-heading">
                        MOD LIST
                      </div>
                      <DescThumb modList={product.modList} setIndex={setIndex} />
                    </div>

                    <div className="details__main-service">
                      <div className="details__main-service-heading">
                        <p>MAINTENANCE&SERVICE</p>
                      </div>
                        <MaintenanceThumb maintenanceService={product.maintenanceService} setIndex={setIndex} />
                    </div>
                    <div className="details-about">
                      <AboutThumb aboutUs={product.aboutUs} setIndex={setIndex} />
                    </div>
                    <div className="details__imported">
                      <div className="details__imported-heading">
                        <p>WHEN DO THESE JDM VEHICLES START TO TURN 25 YEARS OLD?</p>
                      </div>
                      <div className="details__imported-one">
                        {product.toBeImportedOne}
                      </div>
                      <ToBeImportedThumb toBeImported={product.toBeImported} setIndex={setIndex} />
                      <div className="details__imported-one">
                        {product.toBeImportedTwo}
                      </div>
                    </div>
                  </div>
                </div>


                <div className="tabs-template__outer-container">
                  <div className="tabs-template__upcoming">
                    spec and option
                  </div>
                </div>
                <div className="tabs-template__outer-container">
                  <div className="tabs-template__container">
                    video
                  </div>
                </div>
                {/* <div className="tabs-template__outer-container">
              <div className="tabs-template__container">
                Watched Deal
              </div>
            </div> */}
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default DetailsTab
