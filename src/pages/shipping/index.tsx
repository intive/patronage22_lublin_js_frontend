import {
  FormControl,
  FormLabel,
  Input,
} from "@mui/material";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress} from "../../actions/cartActions";
import { useRouter } from "next/router";
import CheckoutWizard from "../../components/CheckoutWizard";
import MainButton from "../../components/MainButton";

interface MyFormValues {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

function ShippingPage() {
  const initialValuesForm: MyFormValues = {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  };

  const dispatch = useDispatch();
  const router = useRouter();


  const cart = useSelector((state: any) => state.cart);
  const { shippingAddress, userInfo, loading} = cart;

//   useEffect(() => {
//     if (!shippingAddress) {
      
//      router.push('/login?redirect=/shipping');
//     }
   
//     setFieldValue('fullName', shippingAddress.fullName);
//     setFieldValue('address', shippingAddress.address);
//     setFieldValue('city', shippingAddress.city);
//     setFieldValue('postalCode', shippingAddress.postalCode);
//     setFieldValue('country', shippingAddress.country);

// }, []);


  const validationSchema = Yup.object().shape({
    fullName: Yup.string().max(255).required("Full Name is required"),
    address: Yup.string().max(255).required("Address is required"),
    city: Yup.string().max(255).required("City is required"),
    postalCode: Yup.string().max(255).required("Postal Code is required"),
    country: Yup.string().max(255).required("Country is required"),
  });

  const formik = useFormik({
    initialValues: initialValuesForm,

    onSubmit(values) {
      const payload = { ...values };
      console.log(payload);
      dispatch(saveShippingAddress(values.fullName, values.address, values.city, values.postalCode, values.country));
   router.push('/payment')
    },
    validationSchema,
  });

  const { handleSubmit, getFieldProps, setFieldValue, errors,} = formik;

  return (
    <section className="container">
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit} className="form">
        <h1>Shipping Address</h1>
        
        <FormControl>
          <FormLabel htmlFor="Full Name">Full Name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter Full Name"
            {...getFieldProps("fullName")}
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </FormControl>
       
       <FormControl>
          <FormLabel htmlFor="Address">Address</FormLabel>
          <Input
            id="address"
            type="text"
            placeholder="Enter Address"
            {...getFieldProps("address")}
            required
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="city">City</FormLabel>
          <Input
            id="city"
            type="text"
            placeholder="Enter City"
            {...getFieldProps("city")}
            required
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </FormControl>
       
        <FormControl>
          <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
          <Input
            id="postalCode"
            type="text"
            placeholder="Enter Postal Code"
            {...getFieldProps("postalCode")}
            required
          />
          {errors.postalCode && <p className="error">{errors.postalCode}</p>}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Input
            id="country"
            type="text"
            placeholder="Enter Country"
            {...getFieldProps("country")}
            required
          />
          {errors.country && <p className="error">{errors.country}</p>}
        </FormControl>
       
        <FormControl>
          <MainButton  onClick={handleSubmit} type="submit">
            {
            // loading ? "Loading..." : 
            "CONTINUE"}</MainButton>
        </FormControl>
        {/* {error && <p className="error">{error}</p>} */}
        {loading && <p>Loading...</p>}
      </form>
    </section>
  );
}

export default ShippingPage;