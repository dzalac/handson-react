import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {Form, Field, FormRow, ErrorMessage, FormWrapper, FormSuccessMessage} from "../../lib/style/generalStyles";
import {Formik} from "formik";
import * as Yup from "yup";
import {Button} from "../../lib/style/generalStyles";
import { getAllUsers, loginUser } from "../../api/users";
import { useState } from "react";

const Login = () => {
    const [successMessage, setSuccessMessage] = useState(null);

    return(
        <>
        <Header isSecondary={true} />
        <Section title={"Sign In"} isMainSection isCentered={true} >

            <Formik initialValues={{
                email: '',
                password: ''
            }}
            
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email adress')
                    .required('Email is required'),
                password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required')
            })}

            onSubmit={async(values, actions) =>{
                try{
                    const res = await loginUser(values);
                    const users = await getAllUsers(res.access_token);
                    const user = users.find(user => user.email === values.email);
                    localStorage.setItem('accessToken', res.access_token);
                    actions.setSubmitting(false)
                    actions.resetForm({                       
                        email: '',
                        password: '',
                     
                    })
                    setSuccessMessage({
                        error: false,
                        message: `Hi ${user.first_name + ' ' + user.last_name}, login was successful.`
                    });

                    setTimeout(() => {
                        setSuccessMessage(null);
                    },3000);
                }catch(err){
                    actions.setSubmitting(false);
                    setSuccessMessage({
                        error: true,
                        message: 'User login failed'
                    });
                }                        
            }}
            
            >
                {formik => (
                    <FormWrapper isCentered>
                        <Form>
                            { successMessage &&
                            <FormRow>
                                <FormSuccessMessage isError={successMessage.error}>{successMessage.message}</FormSuccessMessage>
                            </FormRow>
                            }
                            <FormRow>
                                <Field type='email' name='email' placeholder='Email...' disabled={formik.isSubmitting} />
                                <ErrorMessage component={'div'} name='email' />
                            </FormRow>
                            <FormRow>
                                <Field type='password' name='password' placeholder='Password...' disabled={formik.isSubmitting} />
                                <ErrorMessage component={'div'} name='password' />                        
                            </FormRow>
                            <FormRow>
                                <Button isOutlined  isForm disabled={formik.isSubmitting} >
                                    {
                                        formik.isSubmitting ? 'Processing...' : 'Sign In'
                                    }
                                </Button>
                            </FormRow>
                        </Form>
                    </FormWrapper>
                )}
            </Formik>
        </Section>
        </>
    )
}

export default Login;