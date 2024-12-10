import React from 'react';
import './RKSBanner.scss';
import RKSLogo from '../../../images/rks_vpn_logo.png';

const RKSBanner = () => {
  return (
    <a className="rks-banner"
       target="_blank"
       rel="noopener noreferrer"
       href="https://storage.googleapis.com/plmrph/ee5cbfj0">
      <div className="rks-banner__logo-container">
        <img src={RKSLogo} alt="RKS VPN" className="rks-banner__logo" />
      </div>
      <div className="rks-banner__content">
        <div className="rks-banner__title-container">
          <h1 className="rks-banner__title">RKS VPN</h1>
          <span className="rks-banner__feature">Наша разработка</span>
        </div>
        <p className="rks-banner__price">
          <span className="rks-banner__old-price">от $4.00</span> от $2.50
        </p>
      </div>
    </a>
  );
};

export default RKSBanner;
