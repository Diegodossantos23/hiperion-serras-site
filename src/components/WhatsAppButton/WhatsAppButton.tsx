import React from 'react';
import styles from './WhatsAppButton.module.scss'; 
// import OtherStyles from './CatalogButton.module.scss'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faWhatsapp); 
export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE', '_blank');
  };

  return (
    <button className={styles.whatsappButton} onClick={handleClick}>
      <img style={{width: '50px'}} src="https://static.wixstatic.com/media/ada100_07f9738fca10410f96511509adb98db9~mv2.png" alt="" />
    </button>
  );
};

// export const CatalogButton = () => {
//   const handleClick = () => {
//     // Lógica para abrir o catálogo
//     window.open('/catalog', '_blank');
//   };

//   return (
//     <button className={OtherStyles.catalogButton} onClick={handleClick}>
//       Ver catálogo
//     </button>
//   );
// };

const FloatingButtons = () => {
  return (
    <div >
      <WhatsAppButton />
      {/* <CatalogButton /> */}
    </div>
  );
};

export default FloatingButtons;
