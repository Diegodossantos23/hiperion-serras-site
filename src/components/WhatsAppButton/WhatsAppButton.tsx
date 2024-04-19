import React from 'react';
import './WhatsAppButton.scss'; // Estilo do botão do WhatsApp
import './CatalogButton.scss'; // Estilo do botão do catálogo
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faWhatsapp); // Adiciona os ícones à biblioteca Font Awesome
export const WhatsAppButton = () => {
  const handleClick = () => {
    // Lógica para abrir o link do WhatsApp
    window.open('https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE', '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      {/* <i className="fab fa-whatsapp"></i> */}
      <img style={{width: '50px'}} src="https://static.wixstatic.com/media/ada100_07f9738fca10410f96511509adb98db9~mv2.png" alt="" />
    </button>
  );
};

export const CatalogButton = () => {
  const handleClick = () => {
    // Lógica para abrir o catálogo
    window.open('/catalog', '_blank');
  };

  return (
    <button className="catalog-button" onClick={handleClick}>
      Ver catálogo
    </button>
  );
};

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <WhatsAppButton />
      <CatalogButton />
    </div>
  );
};

export default FloatingButtons;
