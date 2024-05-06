import './WhatsAppButton.module.scss'; // Importe o arquivo de estilos corretamente

export const WhatsAppButton = () => {
  // const handleClick = () => {
  //   window.open('https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE', '_blank');
  // };

  return (
    <div className="cbh-phone cbh-green">
      <a href="https://wa.me/5521980619913" target="_blank" rel="noreferrer" className="phoneJs" title="">
        <div className="cbh-ph-circle"></div>
        <div className="cbh-ph-circle-fill"></div>
        <div className="cbh-ph-img-circle1"></div>
        <div className="kmacb__manager-border"></div>
        <div className="kmacb__manager-fill"></div>
        <div className="kmacb__manager-circle"></div>
      </a>
    </div>
  );
};
