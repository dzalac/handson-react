import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {Form, Field, FormRow, Select, Option, ErrorMessage, FormWrapper, Headline} from "../../lib/style/generalStyles";
import {Formik} from "formik";
import * as Yup from "yup";
import {Button} from "../../lib/style/generalStyles";
import { useState } from "react";


const Profile = () => {
    const [profile, setProfile] = useState(false);
    return(
        <>
        <Header isSecondary={true} />
        <Section title={'My profile'}  buttonText={'Edit'} onClick={e => setProfile(!profile) } >
       

        <Formik initialValues={{
                firstName: 'Dino',
                lastName: 'Žalac',
                email: 'dzalac@foi.hr',
                password: '12345678',
                passwordConfirmed: '12345678',
                githubUsername: 'dzalac',
                zeplinUsername: 'dzalac',
                activeFacultyYear: '4',
                isAdmin: false
            }}
            
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required('First Name is required'),
                lastName: Yup.string()
                    .required('Last Name is required'),
                email: Yup.string()
                    .email('Invalid email adress')
                    .required('Email is required'),
                password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
                passwordConfirmed: Yup.string().test('password-match','Password must match', function(value) {
                    return this.parent.password === value
                }),
                githubUsername: Yup.string()
                    .required('Github username is required'),
                zeplinUsername: Yup.string()
                    .required('Zeplin username is required'),
                activeFacultyYear: Yup.string()
                    .required('Active afculty year is required')               
            })}   
            
    
            
            >
                {formik => (
                    <FormWrapper>
                        <Form disabled={formik.isSubmitting} >
                            <FormRow>
                                <Headline>First name</Headline>
                                <Field type='text' name='firstName' placeholder='First name...' disabled={!profile} />
                                <ErrorMessage component={'div'} name='firstName' />
                            </FormRow>
                            <FormRow>
                                <Headline>Last name</Headline>
                                <Field type='text' name='lastName' placeholder='Last name...' disabled={!profile}/>
                                <ErrorMessage component={'div'} name='lastName' />
                            </FormRow>
                            <FormRow>
                                <Headline>Email</Headline>
                                <Field type='email' name='email' placeholder='Email...' disabled={!profile} />
                                <ErrorMessage component={'div'} name='email' />
                            </FormRow>
                            <FormRow>
                                <Headline>Github username</Headline>
                                <Field type='text' name='githubUsername' placeholder='Github username...' disabled={!profile} />
                                <ErrorMessage component={'div'} name='githubUsername' />
                            </FormRow>
                            <FormRow>
                            <Headline>Zeplin username</Headline>                             
                                <Field type='text' name='zeplinUsername' placeholder='Zeplin username...' disabled={!profile}/>
                                <ErrorMessage component={'div'} name='zeplinUsername' /> 
                            </FormRow>
                            <FormRow>
                            <Headline>Active faculty year</Headline>
                                <Select id='activeFacultyYear' {...formik.getFieldProps('activeFacultyYear')} disabled={!profile} >
                                    <Option value="" disabled hidden>Choose an Active faculty year</Option>
                                    <Option value='0'>Not a student</Option>
                                    <Option value='1'>1st faculty year</Option>
                                    <Option value='2'>2nd faculty year</Option>
                                    <Option value='3'>3rd faculty year</Option>
                                    <Option value='4'>4th faculty year</Option>
                                    <Option value='5'>5th faculty year</Option>
                                </Select>
                                <ErrorMessage component={'div'} name='activeFacultyYear' /> 
                            </FormRow>
                        </Form>
                    </FormWrapper>
                )}
            </Formik>

            {profile && 
            <>
            <Button isOutlined >Update</Button>
                 <Formik initialValues={{
                    password: '12345678',
                    passwordConfirmed: '12345678',
                }}
                
                validationSchema={Yup.object({                   
                    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
                    passwordConfirmed: Yup.string().test('password-match','Password must match', function(value) {
                        return this.parent.password === value
                    })                             
                })}                 
                >
                    {formik => (
                        <FormWrapper>
                            <Form disabled={formik.isSubmitting} >
                            <FormRow>
                            <Field type='password' name='password' placeholder='Password...' disabled={formik.isSubmitting} />
                                <ErrorMessage component={'div'} name='password' />
                            </FormRow>
                            <FormRow>
                                <Field type='password' name='passwordConfirmed' placeholder='Confirm password...' disabled={formik.isSubmitting} />
                                <ErrorMessage component={'div'} name='passwordConfirmed' />
                            </FormRow>
                            </Form>
                        </FormWrapper>
                    )}
                </Formik>
                </>
            }
        </Section>  
        </>
    )
}

export default Profile;