import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpfCnpj: '',
        product: ''
    });
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        cpfCnpj: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'email') {
            setErrors({ ...errors, email: validateEmail(value) ? '' : 'Email inválido' });
        } else if (name === 'cpfCnpj') {
            setErrors({ ...errors, cpfCnpj: validateCPF(value) ? '' : 'CPF inválido' });
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Se houver erros de validação, não enviar o formulário
            if (errors.email || errors.cpfCnpj) return;

            // Código de envio do formulário...

            setMessage('Formulário enviado com sucesso!');
            // Limpar o formulário após o envio bem-sucedido
            setFormData({
                name: '',
                email: '',
                cpfCnpj: '',
                product: ''
            });
            console.log(formData);
            
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            setMessage('Erro ao enviar email');
        }
    };

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validateCPF = (cpf: string) => {
        const re = /^[0-9]{11}$/;
        return re.test(cpf);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 8, mb: 8 }}>
                <Typography variant="h4" color="#696969"  fontSize={30} fontWeight={600} fontFamily="Montserrat" align="center" sx={{ mb: 4 }}>Faça uma cotação</Typography>
                <Grid container spacing={3} justifyContent="center"> {/* Adicionado justifyContent para centralizar */}
                    <Grid item xs={12} sm={12} md={6}>
                        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                label="Nome"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                sx={{ mb: 2 }}
                                InputProps={{ sx: { '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: '#F2BF27' } } }}
                            />
                            <TextField
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                error={!!errors.email}
                                helperText={errors.email}
                                sx={{ mb: 2 }}
                                InputProps={{ sx: { '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: '#F2BF27' } } }}
                            />
                            <TextField
                                label="CPF/CNPJ"
                                id="cpfCnpj"
                                name="cpfCnpj"
                                value={formData.cpfCnpj}
                                onChange={handleChange}
                                required
                                error={!!errors.cpfCnpj}
                                helperText={errors.cpfCnpj}
                                sx={{ mb: 2 }}
                                InputProps={{ sx: { '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: '#F2BF27' } } }}
                            />
                            <TextField
                                label="Produto"
                                id="product"
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                                required
                                sx={{ mb: 2 }}
                                InputProps={{ sx: { '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: '#F2BF27' } } }}
                            />
                            <Button variant="contained" type="submit" sx={{ backgroundColor: '#F2BF27', color: '#fff', '&:hover': { backgroundColor: '#F2BF27' } }}>Enviar</Button>
                        </Box>
                        {message && <Typography marginTop={5} variant="body1" color="#57e843">{message}</Typography>}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ContactForm;
