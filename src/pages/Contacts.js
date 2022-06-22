import {
    Flex,
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
                <AlertIcon />
                <AlertTitle>{emailSent}</AlertTitle>
            </Alert> : null}
            <Box border='2px' p={5} m='auto' mt={10} w={{base: '80vw', lg: '60vw'}}>
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
            <Box textAlign='center' mt={10}>
                <Heading as='h2' fontSize='3xl'>Check out my Socials</Heading>
                <Flex align={{ base: 'center', md: 'start' }} justifyContent='center'>
                   <Socials />
                </Flex>
            </Box>

        </>
    )
};

export default Social;