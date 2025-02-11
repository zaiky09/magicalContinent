"use client";  
import React from "react";  
import { FaWhatsapp } from "react-icons/fa";  

const WhatsappChat = () => {  
  const phoneNumber = "+254714837324"; // Replace with your WhatsApp number

  return (  
    <a  
      href={`https://wa.me/${phoneNumber}`}  
      target="_blank"  
      rel="noopener noreferrer"  
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >  
      <FaWhatsapp size={30} />  
    </a>  
  );  
};  

export default WhatsappChat;
