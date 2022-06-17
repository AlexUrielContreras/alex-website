import { Button, 
    Flex , 
    Box, 
    Link, 
    Input,  
    FormControl,
    FormLabel,
    Textarea    
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser';


function Social() {

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_fhdd3oa', 'template_mnxafs6', e.target, '-nhEcniANIMHUuU0y')
            .then((response) => {
                console.log('SUCESS!', response.status, response.text)
            }, (err) => {
                console.log('Failed', err)
            })
            e.target.reset()
    }
    
    return (
        <>
        <Box border='1px' p={6} >
        <form onSubmit={sendEmail}>
            <FormLabel>Name</FormLabel>
            <Input type='text' variant='filled' name='name'/>
            <FormLabel mt={5}>Email address</FormLabel>
            <Input type='email' variant='filled' name='email'/>
            <FormLabel mt={5}>Subject</FormLabel>
            <Input type='text' variant='filled' name='subject'/>
            <FormLabel mt={5}>Message</FormLabel>
            <Textarea type='text' variant='filled' name='message'/>
            <Button type='submit' variant='outline' mt={5}>Send</Button>
        </form>
        </Box>
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