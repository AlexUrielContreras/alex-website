import {
    Box,
    Button,
    Input,
    FormLabel,
    FormControl,
    Textarea,
    Alert,
    AlertIcon,
    AlertTitle,
    Heading
} from '@chakra-ui/react'
import Socials from '../componets/Socials'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import validateEmail from '../utils/helpers'


function Social() {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailSent, setEmailSent] = useState('');

/* Checks a email against a regex and returns true or false */
    function checkEmail({ target }) {
        const guestEmail = target.value
        const isValid = validateEmail(guestEmail)
        if (!isValid) {
            setErrorMessage('Please enter a valid email')
        } else {
            setErrorMessage('')
        }
    }

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_fhdd3oa', 'template_mnxafs6', e.target, '-nhEcniANIMHUuU0y')
            .then((response) => {
                console.log('SUCESS!', response.status, response.text)
                setEmailSent(`${response.status}: Your email has been sent`)
            }, (err) => {
                console.log('Failed', err)
                setEmailSent(err)
            })
        e.target.reset()
    }
    return (
        <>
        {/* Alert for when a successful email is sent */}
            {emailSent ? <Alert status='success' w='300px' position='absolute' right='20%' borderRadius='50'>
                <AlertIcon />
                <AlertTitle>{emailSent}</AlertTitle>
                </Alert> : null
            }
            <Heading mt={{base: '8vh'}} ml={{md: '9vw'}} as='h1'> Email Me </Heading>

            <Box border= '4px' borderRadius={35} p={6} m='auto' mt={{base: '4vh'}} w={{base: '80vw', lg: '60vw'}}>
            <form onSubmit={sendEmail}>
                <FormControl isRequired >
                    <FormLabel>Name</FormLabel>
                    <Input type='text' variant='filled' name='name' />
                </FormControl>

                <FormControl >
                    <FormLabel mt={5}>Subject</FormLabel>
                    <Input type='text' variant='filled' name='subject' />
                </FormControl>

                <FormControl isRequired >
                    <FormLabel mt={5}>Email address</FormLabel>
                    <Input type='text' variant='filled' name='email' onChange={checkEmail} />
                    {errorMessage}
                </FormControl>

                <FormControl isRequired >
                    <FormLabel mt={5}>Message</FormLabel>
                    <Textarea type='text' variant='filled' name='message' />
                </FormControl>
                {errorMessage === '' ?
                    <Button type='submit' variant='outline' mt={5}>Send</Button>
                    : null}
            </form>
            </Box>
            <Box py={{base: '9vh'}}>
                <Socials />
            </Box>

        </>
    )
};

export default Social;