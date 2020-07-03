import {
  MdEmail,
  MdEvent,
  MdLocalPhone,
  MdGroup,
  MdPlace,
} from 'react-icons/md';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

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
      return <FaWhatsapp size={size} color={color} />;
    case 'facebook':
      return <AiFillFacebook size={size} color={color} />;
    case 'instagram':
      return <AiFillInstagram size={size} color={color} />;
    case 'twitter':
      return <AiOutlineTwitter size={size} color={color} />;
    case 'linkedin':
      return <AiFillLinkedin size={size} color={color} />;
    case 'place':
      return <MdPlace size={size} color={color} />;
    default:
      break;
  }
}

export default getIconByName;
