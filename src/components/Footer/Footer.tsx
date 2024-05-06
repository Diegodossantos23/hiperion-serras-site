import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from '@mui/icons-material/Mail'; // Importar o ícone de e-mail

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/', icon: <FacebookIcon /> },
    { name: 'Twitter', url: 'https://twitter.com/', icon: <TwitterIcon /> },
    { name: 'Instagram', url: 'https://www.instagram.com/', icon: <InstagramIcon /> },
    { name: 'E-mail', url: 'mailto:vendas@hiperionserras.com.br', icon: <MailIcon /> }, // Adicionar o ícone de e-mail
  ];

  const footerColumns = [
    {
      title: "Localização",
      content: [
        "Avenida Padre Arlindo Vieira 1719 Vila das Mercês - CEP 04166-001.",
        "São Paulo/SP",
      ],
    },
    {
      title: "Contato",
      content: ["vendas@hiperionserras.com.br", "(19) 9.9740-2223"],
    },
    {
      title: "Produtos",
      content: [
        "Serras Circulares",
        "Lãminas serra fita",
        "Máquinas e equipamentos",
        "Produtos e serviços",
      ],
    },
  ];

  const StyledFooter = styled(Box)({
    backgroundColor: "#222",
    padding: "2rem 0",
    width: "100%",
  });

  const StyledFooterContent = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    borderTop: "1px solid #6c757d",
    borderBottom: "1px solid #6c757d",
    padding: "1rem 0",
  });

  const StyledFooterColumn = styled(Box)({
    flex: 1,
    marginRight: "2rem",
    maxWidth: "300px",

    "& p": {
      color: "#fff",
      marginBottom: "0.5rem",
    },
  });

  const StyledFooterHeading = styled(Typography)({
    fontWeight: "bold",
    color: "#fff",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  });

  const StyledFooterLink = styled(Link)({
    color: "#fff",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  });

  return (
    <StyledFooter component="footer">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
          padding: "0 2rem",
        }}
      >
        <Typography variant="body1">
          © 2024 Hiperion Serras. Todos direitos reservados.
        </Typography>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Siga-nos:
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.url} className="socialLink">
                {React.cloneElement(link.icon, { sx: { color: "#fff" } })}{" "}
                {/* Definir a cor do ícone como branco */}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <StyledFooterContent>
        {footerColumns.map((column) => (
          <StyledFooterColumn key={column.title}>
            <StyledFooterHeading>{column.title}</StyledFooterHeading>
            {column.content.map((item, index) => (
              <Typography key={index} variant="body2">
                {item}
              </Typography>
            ))}
          </StyledFooterColumn>
        ))}
      </StyledFooterContent>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "0.8rem",
          color: "#ffff",
        }}
      >
        <Typography variant="body2">Criado por: Diego Rosa Sites</Typography>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
