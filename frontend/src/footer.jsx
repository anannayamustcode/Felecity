import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import QR from './assets/QR.png' ;
const Footer = () => {
  return (
    <footer className="bg-[#002b45] text-white py-6 text-center p-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-llg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lab Feedback Form</a></li>
            <li><a href="#" className="hover:underline">Lab Assessment Form</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Shakshat Portal</a></li>
          </ul>
        </div>

        {/* About VLAB Section */}
        <div>
          <h3 className="text-llg font-bold mb-3">About VLAB</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact & QR Code Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-llg font-bold mb-3">Get In Touch With Us</h3>
          <div className="mb-3 bg-white">
            <img src={QR} alt="QR Code" className="w-24 h-24 p-1" />
          </div>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-l" /> support@vlab.co.in
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-l" /> Phone(L) - 011-26582050
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-l" />
            Wireless Research Lab, Room No - 206/IIA, Bharti School of Telecom, IIT Delhi, Hauz Khas, New Delhi-110016
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
