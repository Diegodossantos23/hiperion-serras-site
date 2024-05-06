import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo/hiperion-logo.svg'; // Importando a imagem da logo
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Tipando explicitamente o estado como HTMLElement

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = () => { // Removendo o parâmetro event
    setAnchorEl(document.getElementById('servicesButton'));
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = ['Inicio', 'Sobre', 'Produtos e Serviços', 'Testemunhas', 'Blog'];
  const servicesSubItems = ['Serras circulares', 'Lâminas serra fita', 'Máquinas e equipamentos', 'Produtos e serviços']; // Subitens para "Produtos e Serviços"

  return (
    <AppBar position="static" sx={{ backgroundColor: "#222" }}> {/* Ajustando o tom do background */}
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleMenu}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
          <img src={logo} alt="Logo" style={{ height: '80px' }} /> 
        </Typography>
        <Drawer
          anchor="left"
          open={menuOpen}
          onClose={closeMenu}
          sx={{ '& .MuiDrawer-paper': { width: '240px' } }}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} onClick={closeMenu}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item, index) => (
            <div key={index} onMouseEnter={item === 'Produtos e Serviços' ? handleMenuClick : undefined}>
              <Button color="inherit" id={item === 'Produtos e Serviços' ? 'servicesButton' : undefined}>
                {item}
              </Button>
              {/* Adicionando menu de subitens para "Produtos e Serviços" */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && item === 'Produtos e Serviços'}
                onClose={handleMenuClose}
              >
                {servicesSubItems.map((subItem, subIndex) => (
                  <MenuItem key={subIndex} onClick={handleMenuClose}>{subItem}</MenuItem>
                ))}
              </Menu>
            </div>
          ))}
        </Toolbar>
        <Button color="inherit" sx={{ backgroundColor: '#F2BF27', '&:hover': { backgroundColor: '#F2BF27' } }}>Fale conosco  <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }} /></Button> {/* Definindo a cor do botão Contato e removendo o estilo de hover padrão */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
