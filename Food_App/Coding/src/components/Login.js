import React from "react";
// import { useFormik } from "formik";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const validate = values => {
//     const errors = {};
//     if (!values.name){
//         errors.name = "Required";
//     } else if (values.name.length > 15) {
//         errors.name = "Must be 15 characters or less"
//     }

//     if (!values.email){
//         errors.email = "Required";

//     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = "Invalid email address"
//     }

//     if(!values.phoneNumber){
//         errors.phoneNumber = "Required";
//     }else if(values.phoneNumber.length>10 || values.phoneNumber.length<10){
//         errors.phoneNumber = "Please enter a valid mobile number"
//     }
    
//     return errors;
// }

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: { name: "", email: "", phoneNumber: "" },
    // validationSchema: Yup.object({
    //     name: Yup.string().max(15,'Must be 15 characters or less').required('Required'),
    //     email: Yup.string().email('Invalid email address').required("Required"),
    //     phoneNumber: Yup.string().length(9,"Invalid phone number").required('Required')
    // }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     }
//   });
//   return (
    // <form onSubmit={formik.handleSubmit}>
    //   <label htmlFor="name">Name
    //   </label>
    //   <input id="name" name="name" type="name" 
    //   onChange={formik.handleChange}
    //   onBlur={formik.handleBlur}
    //   value={formik.values.name}>
    //   </input>
    //   {formik.touched.name && formik.errors.name? <div>{formik.errors.name}</div>: <div>null</div>}
      
    //   <label htmlFor="email">Email Address</label>
    //   <input
    //     id="email"
    //     name="email"
    //     type="email"
    //     onChange={formik.handleChange}
    //     onBlur={formik.handleBlur}
    //     value={formik.values.email}
    //   />
    //   {formik.touched.email && formik.errors.email? <div>{formik.errors.email}</div>: <div>null</div>}

    //   <label htmlFor="phoneNumber">Mobile Number</label>
    //   <input
    //   id="phoneNumber"
    //   name="phoneNumber"
    //   type="phoneNumber"
    //   onChange={formik.handleChange}
    //   onBlur={formik.handleBlur}
    //   value={formik.values.phoneNumber}>
    //   </input>
    //   {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div>: <div>null</div>}

    //   <button type="submit">Submit</button>
    // </form>
//   );
// };

const Login = () => {
    return(
    <div className="m-5 p-5">
        <div className="text-center text-lg font-bold">Login</div>
        <Formik
        initialValues= {{ name: "", email: "", phoneNumber: "" }}
        validationSchema= {Yup.object({
            name: Yup.string().max(15,'Must be 15 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required("Required"),
            phoneNumber: Yup.string().length(9,"Invalid phone number").required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
            {formik => (
                <form className="m-5" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name
                </label>
                <Field id="name" name="name" type="name" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}>
                </Field>
                {/* {formik.touched.name && formik.errors.name? <div>{formik.errors.name}</div>: <div>null</div>} */}
                <ErrorMessage name="name"></ErrorMessage>
                
                <label htmlFor="email">Email Address</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {/* {formik.touched.email && formik.errors.email? <div>{formik.errors.email}</div>: <div>null</div>} */}
                <ErrorMessage name="email"></ErrorMessage>
          
                <label htmlFor="phoneNumber">Mobile Number</label>
                <Field
                id="phoneNumber"
                name="phoneNumber"
                type="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}>
                </Field>
                {/* {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div>: <div>null</div>} */}
                <ErrorMessage name="phoneNumber"></ErrorMessage>
          
                <button type="submit">Submit</button>
              </form>
            )}
        </Formik>
        </div>
    )
}

// add css to the form and built the logic for onclick for login button in header js file
export default Login;

