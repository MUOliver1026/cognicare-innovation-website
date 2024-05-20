import React from 'react';
import FooterLogo from '../assets/FooterLogo.png';
import { SocialIcon } from 'react-social-icons';
import EmailIcon from '../assets/email.svg';
import AddressIcon from '../assets/location-pointer.svg';

const Footer = () => {
  return (
    <footer className="bg-footer-bg py-4 w-full">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-36">
          <div className="flex flex-col justify-center">
            <img src={FooterLogo} alt="Footer Logo" className="h-28 w-fit mx-auto" />
            <p className="text-white text-center py-4">
              Leading the Fight Against Alzheimer's <br />
              To build a healthier tomorrow
            </p>
            <div className="text-center flex justify-center gap-2 items-center">
              <div className="flex items-end space-y-1 gap-4">
                <SocialIcon url="https://www.facebook.com" style={{ height: 30, width: 30 }} bgColor="#436378" />
                <SocialIcon url="https://www.instagram.com" style={{ height: 30, width: 30 }} bgColor="#436378" />
                <SocialIcon url="https://www.linkedin.com" style={{ height: 30, width: 30 }} bgColor="#436378" />
                <SocialIcon url="https://www.youtube.com" style={{ height: 30, width: 30 }} bgColor="#436378" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-white mx-auto">
            <p className="text-2xl py-4 my-2">Contact Us</p>
            <div className="text-left">
              <p className="text-white flex items-center h-full mb-2">
                <img src={EmailIcon} alt="Email" className="h-4 w-6 inline mr-1 bg-white rounded-full" />
                Contact@cong.inc.com
              </p>
              <p className="text-white flex items-start h-full">
                <img src={AddressIcon} alt="Address" className="h-4 w-6 inline mr-1 bg-white rounded-full mt-1" />
                381 Royal Parade, <br />Parkville, VIC 3052, Australia
              </p>
            </div>
          </div>
        </div>
        <div className=" text-white text-center py-2 mt-4">
          © 2024 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
