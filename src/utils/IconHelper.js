import { MdEmail, MdEvent, MdLocalPhone, MdGroup } from 'react-icons/md';
import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from 'react-icons/ai';
import React from 'react';

function getIconByName(name, color, size = '1.5em') {
  switch (name) {
    case 'email':
      return <MdEmail size={size} color={color} />;
    case 'phone':
      return <MdLocalPhone size={size} color={color} />;
    case 'event':
      return <MdEvent size={size} color={color} />;
    case 'group':
      return <MdGroup size={size} color={color} />;
    case 'whatsapp':
      return <AiOutlineWhatsApp size={size} color={color} />;
    case 'facebook':
      return <AiFillFacebook size={size} color={color} />;
    case 'instagram':
      return <AiFillInstagram size={size} color={color} />;
    case 'twitter':
      return <AiOutlineTwitter size={size} color={color} />;
    case 'linkedin':
      return <AiFillLinkedin size={size} color={color} />;
    default:
      break;
  }
}

export default getIconByName;
