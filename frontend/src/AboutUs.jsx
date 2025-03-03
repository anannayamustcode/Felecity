import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          Virtual Labs project is an initiative of Ministry of Education (MoE), Government of India under the aegis of National Mission on Education through Information and Communication Technology (NMEICT). This project is a consortium activity of twelve participating institutes and IIT Delhi is coordinating institute. It is a paradigm shift in ICT-based education. For the first time, such an initiative has been taken-up in remote‐experimentation. Under Virtual Labs project, over 100 Virtual Labs consisting of approximately 700+ web-enabled experiments were designed for remote-operation and viewing.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Intended Beneficiaries</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 pl-5">
          <li>All students and Faculty Members of Science and Engineering Colleges who do not have access to good lab‐facilities and/or instruments.</li>
          <li>High‐school students, whose inquisitiveness will be triggered, possibly motivating them to take up higher‐studies.</li>
          <li>Researchers in different institutes who can collaborate and share resources.</li>
          <li>Different engineering colleges who can benefit from the content and related teaching resources.</li>
        </ul>
        
        <p className="text-gray-600 leading-relaxed mt-4">
          Virtual Labs do not require any additional infrastructural setup for conducting experiments at user premises. The simulations-based experiments can be accessed remotely via internet.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;