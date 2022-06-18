import { Button, 
    Box, 
    Input,  
    FormLabel,
    Textarea    
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import validateEmail from '../utils/helpers'


function Social() {
    const [errorMessage, setErrorMessage] = useState('')
    const [emailSent , setEmailSent] = useState('')

    function checkEmail(e) {
        const guestEmail = e.target.value
        const isValid = validateEmail(guestEmail)
        console.log(isValid)
        if (!isValid) {
            setErrorMessage('Please enter a valid email')
        }else{
            setErrorMessage('')
        }

    }

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_fhdd3oa', 'template_mnxafs6', e.target, '-nhEcniANIMHUuU0y')
            .then((response) => {
                console.log('SUCESS!', response.status, response.text)
                setEmailSent(response.status)
            }, (err) => {
                console.log('Failed', err)
                setEmailSent(err)
            })
            e.target.reset()
    }
    
    return (
        <>
        <form onSubmit={sendEmail} className='contact-form'>
            <FormLabel>Name</FormLabel>
            <Input type='text' variant='filled' name='name'/>
            <FormLabel mt={5}>Email address</FormLabel>
            <Input type='email' variant='filled' name='email' onBlur={checkEmail}/>
            {errorMessage}
            <FormLabel mt={5}>Subject</FormLabel>
            <Input type='text' variant='filled' name='subject'/>
            <FormLabel mt={5}>Message</FormLabel>
            <Textarea type='text' variant='filled' name='message'/>
            <Button type='submit' variant='outline' mt={5}>Send</Button>
        </form>
        {emailSent}
        {/*<Flex direction={{base: 'column'}} align={{base: 'center', md: 'start'}}  textAlign='center'>   
            <Flex m={5} direction='row'>
                <Link href='https://github.com/AlexUrielContreras' fontSize='3xl' mr={10}>Checkout my </Link>
                <Box  className='contact-selected'>GITHUB</Box>
            </Flex>
            <Flex m={5} direction='row'>
                <Link href='https://github.com/AlexUrielContreras' fontSize='3xl' mr={10}>Checkout my </Link>
                <Box className='contact-selected'>GITHUB</Box>
            </Flex>
            <Flex m={5} direction='row'>
                <Link href='https://github.com/AlexUrielContreras' fontSize='3xl' mr={10}>Checkout my </Link>
                <Box  className='contact-selected'>GITHUB</Box>
            </Flex>       
        </Flex>
    */}
        </>
    )
};

export default Social;