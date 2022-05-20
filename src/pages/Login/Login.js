import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {Form, Field, FormRow, ErrorMessage, FormWrapper} from "../../lib/style/generalStyles";
import {Formik} from "formik";
import * as Yup from "yup";
import {Button} from "../../lib/style/generalStyles";


const Login = () => {
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

            onSubmit={(values, actions) =>{
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                    actions.resetForm({                       
                        email: '',
                        password: '',
                     
                    })
                },1000)
            }}
            
            >
                {formik => (
                    <FormWrapper>
                        <Form isCentered >
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