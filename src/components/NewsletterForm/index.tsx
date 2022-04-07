import * as Yup from 'yup';
import React from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';

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



const NewsletterForm: React.FC = () => {
    const InitialValuesForm: FormValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required')

    });

    const formik = useFormik({
        initialValues: InitialValuesForm,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
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
    );
}

export default NewsletterForm;


