import * as Yup from 'yup';
import React, { useState } from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';
import Modal from '../Modal';
import Backdrop from '../Backdrop';

interface FormValues {
    email: string;
}

const SubmitButton = styled(Button)(({ theme }) => ({
    height: '54px',
    width: '150px',
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.light,
        boxShadow: 'none',
        color: theme.palette.text.primary,
    }
}))


const NewsletterForm = () => {
    const InitialValuesForm: FormValues = {
        email: '',
    };

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    const showModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .email('Enter a valid email')
            .required('Email is required')

    });

    const formik = useFormik({
        initialValues: InitialValuesForm,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            showModal()
            values.email = ""
        },
    });


    return (
        <section>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="email"
                    name="email"
                    label="Enter email"
                    type="email"
                    sx={{ backgroundColor: 'white' }}

                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}

                ></TextField>
                <SubmitButton color="primary" variant="contained" type="submit">
                    SUBSCRIBE
                </SubmitButton>
            </form>
            {modalIsOpen && <Modal email={formik.values.email} show={modalIsOpen} closed={closeModal} />}
            {modalIsOpen && <Backdrop show={modalIsOpen} />}
        </section>
    );
}

export default NewsletterForm;


