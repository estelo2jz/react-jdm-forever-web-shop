import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../components/DataProvider';
import ToBeImportedThumb from './ToBeImportedThumb';

import '../Details/DetailsTab.scss';

const DetailsTab = () => {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;

  const details = products?.filter((product) => product._id === id);

  if (!details?.length) return <p className="details-tab__loading">Loading vehicle details...</p>;

  return (
    <>
      {details.map((product) => (
        <div className="details-tab__container" key={product._id}>
          {/* SPECS SECTION */}
          <div className="details-tab__specs">
            {["ENGINE", "BODY", "BASIC", "INTERIOR"].map((section) => (
              <div className={`specs-section specs-section--${section.toLowerCase()}`} key={section}>
                <p className="specs-section__title">{section}</p>
                <div className="specs-section__items">
                  {section === "ENGINE" && (
                    <>
                      <div><span>ENGINE TYPE</span><span>{product.none}</span></div>
                      <div><span>ENGINE SIZE</span><span>{product.engineSize}</span></div>
                      <div><span>FUEL SPECIFICATION</span><span>{product.none}</span></div>
                    </>
                  )}
                  {section === "BODY" && (
                    <>
                      <div><span>BODY COLOR</span><span>{product.bodyColor}</span></div>
                      <div><span>BODY STYLE</span><span>{product.engineSize}</span></div>
                      <div><span>DOORS</span><span>{product.none}</span></div>
                      <div><span>PAINT TYPE</span><span>{product.none}</span></div>
                    </>
                  )}
                  {section === "BASIC" && (
                    <>
                      <div><span>YEAR</span><span>{product.year}</span></div>
                      <div><span>MAKE</span><span>{product.make}</span></div>
                      <div><span>MODEL</span><span>{product.model}</span></div>
                      <div><span>KM</span><span>{product.miles}</span></div>
                    </>
                  )}
                  {section === "INTERIOR" && (
                    <>
                      <div><span>INTERIOR COLOR</span><span>{product.bodyColor}</span></div>
                      <div><span>SECONDARY COLOR</span><span>{product.none}</span></div>
                      <div><span>SEATING TYPE</span><span>{product.none}</span></div>
                      <div><span>SEAT MATERIAL</span><span>{product.none}</span></div>
                      <div><span>SHIFTER TYPE</span><span>{product.none}</span></div>
                      <div><span>CENTER CONSOLE</span><span>{product.none}</span></div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* DETAILS SECTION */}
          <div className="details-tab__overview">
            <div className="overview__info">
              <p className="overview__title">{product.fullNameWithAddress}</p>
              <div className="overview__row"><span>Built By</span><span>{product.builtBy}</span></div>
              <div className="overview__row"><span>Mileage</span><span>{product.mileage}</span></div>
            </div>

            <div className="overview__imported">
              <p className="overview__heading">WHEN DO THESE JDM VEHICLES START TO TURN 25 YEARS OLD?</p>
              <ToBeImportedThumb toBeImported={product.toBeImported} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailsTab;
