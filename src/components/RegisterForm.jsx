
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <section class="login">
            <Container>
                {/* <div
                    class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 offset-xl-0 d-flex align-items-center justify-content-start min-vh-50"
                >
                    <div
                        class="box-primary mt-5 mb-5 w-100 w-xl-75 min-vh-25 d-flex align-items-center flex-column"
                    > */}
                    <Col lg={6} className="d-flex align-items-center justify-content-start min-vh-50">
                        <div className="box-primary mt-5 mb-5 w-100 w-xl-75 min-vh-25 d-flex align-items-center flex-column"> 
                        <h2>Registrar-se</h2>

                        <Form>
                            <div class="row">

                                {/* <div class="col-12 mb-4"> */}
                                <Col md={12} className="mb-4">
                                    <p class="font-size-13">
                                        Obs: Os campos marcados com um asterisco (*) são de
                                        preenchimento obrigatório
                                    </p>
                                </Col>
                                {/* </div> */}

                                <div class="col-12 mb-4">
                                    <label class="d-block align-items-center"
                                    ><span class="pt-3 d-inline-block">Login SIGA *</span
                                    >
                                    <input
                                            required
                                            type="text"
                                            class="form-control float-end ms-4 ms-md-5 w-60 w-sm-70 w-md-50 w-lg-60 w-xl-70"
                                        /></label>
                                </div>

                                <div class="col-12 mt-4 mb-4">
                                    <label class="d-block align-items-center"
                                    ><span class="pt-3 d-inline-block">Senha SIGA *</span
                                    ><input
                                            required
                                            type="password"
                                            class="form-control float-end ms-4 ms-md-5 w-60 w-sm-70 w-md-50 w-lg-60 w-xl-70"
                                        /></label>
                                </div>

                                <hr class="mt-4 mb-4" />

                                <div class="col-12 mt-4 mb-4">
                                    <label class="d-block align-items-center"
                                    ><span class="pt-3 d-inline-block">CPF *</span
                                    ><input
                                            type="text"
                                            required
                                            class="form-control cpf float-end ms-4 ms-md-5 w-60 w-sm-70 w-md-50 w-lg-60 w-xl-70"
                                        /></label>
                                </div>

                                <div class="col-12 mt-4 mb-4">
                                    <label class="d-block align-items-center"
                                    ><span class="pt-3 d-inline-block">E-mail *</span
                                    ><input
                                            type="email"
                                            required
                                            class="form-control email float-end ms-4 ms-md-5 w-60 w-sm-70 w-md-50 w-lg-60 w-xl-70"
                                        /></label>
                                </div>

                                <div class="col-12 mt-4 mb-4">
                                    <label class="d-block align-items-center"
                                    ><span class="d-inline-block"
                                    >E-mail *<br />(confirmação)</span
                                        ><input
                                            type="email"
                                            required
                                            class="form-control email float-end ms-4 ms-md-5 w-60 w-sm-70 w-md-50 w-lg-60 w-xl-70"
                                        /></label>
                                </div>

                                <div class="col-6 mt-5">
                                    <button
                                        type="submit"
                                        class="button-primary w-100 d-flex justify-content-center"
                                    >
                                        Registrar-se
                                    </button>
                                </div>

                                <div class="col-6 mt-5">
                                    <button
                                        type="button"
                                        class="button-secondary w-100 d-flex justify-content-center"
                                        onclick="history.back();"
                                    >
                                        Voltar
                                    </button>
                                </div>
                            </div>
                        </Form>
                    {/* </div>
                </div> */}
                    </div>
                </Col>
            </Container>
        </section>
    );
};

export default RegisterForm