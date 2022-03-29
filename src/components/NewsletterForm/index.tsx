import * as Yup from 'yup';
import React from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik';


interface FormValues {
    email: string;
}

const NewsletterForm: React.FC = () => {
    const InitialValuesForm: FormValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    });

    const formik = useFormik({
        initialValues: InitialValuesForm,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
    });


    return (
        <form onSubmit= {formik.handleSubmit}>
            <TextField
                id="email"
                name="email"
                label="Enter email"
                type="email"
                sx={{backgroundColor:'white'}}
              
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}

            ></TextField>
           <Button color="primary" variant="contained" type="submit"sx={{height:'54px', width:'150px'}}>
       SUBSCRIBE
        </Button>
        </form>
    );
}

export default NewsletterForm;

function resetForm() {
    throw new Error('Function not implemented.');
}
