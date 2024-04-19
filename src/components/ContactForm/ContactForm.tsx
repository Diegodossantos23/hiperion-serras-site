import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpfCnpj: '',
        product: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Aqui você pode enviar os dados do formulário para o servidor
        console.log(formData);
        // Limpar os campos do formulário após o envio
        setFormData({
            name: '',
            email: '',
            cpfCnpj: '',
            product: ''
        });
    };

    return (
        <div className={styles.contactForm}>
                <h2>Entre em contato</h2>
            <div className={styles.formContainer}>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cpfCnpj">CPF/CNPJ:</label>
                        <input
                            type="text"
                            id="cpfCnpj"
                            name="cpfCnpj"
                            value={formData.cpfCnpj}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="product">Produto:</label>
                        <input
                            type="text"
                            id="product"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>

                <img src="" alt="" />
            </div>
        </div>
    );
};

export default ContactForm;
