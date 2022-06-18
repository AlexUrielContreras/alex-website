import {
    Flex,
    Box,
    Link,
    Button,
    Input,
    FormLabel,
    FormControl,
    Textarea,
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import validateEmail from '../utils/helpers'


function Social() {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailSent, setEmailSent] = useState('');

    function checkEmail({ target }) {
        const guestEmail = target.value
        const isValid = validateEmail(guestEmail)
        console.log(isValid)
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
        {emailSent ? <Alert status='success'>
            <AlertIcon/>
            <AlertTitle>{emailSent}</AlertTitle>
        </Alert>: null }
            <form onSubmit={sendEmail} className='contact-form'>
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
                {errorMessage === ''? 
                <Button type='submit' variant='outline' mt={5}>Send</Button>
                : null }
            </form>
            <Box>
            <Flex align={{base: 'center', md: 'start'}}  textAlign='center'>   
            <Flex m={5} direction='row'>
                <Box  className='contact-selected'>GITHUB</Box>
            </Flex>
            <Flex m={5} direction='row'>
                <Box className='contact-selected'>GITHUB</Box>
            </Flex>
            <Flex m={5} direction='row'>
                <Box  className='contact-selected'>GITHUB</Box>
            </Flex>       
        </Flex>
        </Box>
    
        </>
    )
};

export default Social;