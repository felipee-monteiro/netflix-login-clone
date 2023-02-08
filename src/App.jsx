import React from 'react';
import {
  Box,
  Button,
  Input,
  Image,
  Card,
  CardHeader,
  CardFooter,
  Checkbox,
  FormErrorMessage,
  FormControl,
  CardBody,
  VStack,
  Center,
  Select,
  Text,
  Flex,
  Link,
  Heading
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function App () {
  const {
    register,
    handleSubmit,
    isSubmitting,
    formState: { errors }
  } = useForm();

  return (
    <>
      <Box h='100vh'>
        <Box>
          <Flex h='52rem' w='100%' bg='blackAlpha.900' pos='relative' top='0'>
            <Image
              src='https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/4ad43b3f-0afb-44fb-87af-b17cad5d6fb6/BR-pt-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg'
              htmlWidth='2000'
              opacity={0.5}
              fit='cover'
            />
          </Flex>
          <Flex w='100%' h={16} top='0' pos='absolute'>
            <Link href='https://netflix.com/pt'>
              <img src='nt.png' width={180} />
            </Link>
          </Flex>
          <Center w='100%'>
            <Card
              p='14'
              bg='blackAlpha.900'
              h='2xl'
              mt={6}
              pos='absolute'
              top='16'
            >
              <CardHeader>
                <Heading as='h2' size='lg' color='white'>
                  Entrar
                </Heading>
              </CardHeader>
              <CardBody>
                <form onSubmit={handleSubmit} action='#'>
                  <FormControl isInvalid={errors.email || errors.password}>
                    <VStack spacing={50}>
                      <VStack spacing={3.5} w='80' align=''>
                        <Input
                          type='email'
                          id='email'
                          autoComplete='off'
                          placeholder='E-mail ou número de telefone'
                          bg='gray.700'
                          autoFocus={true}
                          size='lg'
                          color='white'
                          errorBorderColor='orange.500'
                          focusBorderColor='orange.500'
                          border='Background'
                          {...register('email', {
                            required:
                              'Informe um email ou número de telefone válido.'
                          })}
                        />
                        <FormErrorMessage>
                          <Text color='orange.500'>
                            {errors.email && errors.email.message}
                          </Text>
                        </FormErrorMessage>
                        <Input
                          type='password'
                          placeholder='Senha'
                          size='lg'
                          bg='gray.700'
                          id='password'
                          color='white'
                          errorBorderColor='orange.500'
                          focusBorderColor='orange.500'
                          border='Background'
                          {...register('password', {
                            minLength: 4,
                            required:
                              'A senha deve ter entre 4 e 60 caracteres.',
                            maxLength: 60
                          })}
                        />
                        <FormErrorMessage>
                          <Text color='orange.500'>
                            {errors.password && errors.password.message}
                          </Text>
                        </FormErrorMessage>
                      </VStack>
                      <VStack spacing={2} align='' w='80'>
                        <Button
                          w='100%'
                          size='lg'
                          bg='red.500'
                          colorScheme='red'
                          color='white'
                          type='submit'
                          isLoading={isSubmitting}
                        >
                          Entrar
                        </Button>
                        <Flex justify='space-between'>
                          <Checkbox
                            defaultChecked
                            colorScheme='gray'
                            iconColor='black'
                          >
                            <Text color='gray.400' fontSize='sm'>
                              Lembre-se de mim
                            </Text>
                          </Checkbox>
                          <Link
                            color='gray.400'
                            target='_self'
                            fontSize='sm'
                            href='https://www.netflix.com/br/'
                          >
                            Precisa de ajuda?
                          </Link>
                        </Flex>
                      </VStack>
                    </VStack>
                  </FormControl>
                </form>
              </CardBody>
              <CardFooter>
                <VStack spacing={2} align='' w='80'>
                  <Text color='gray.500'>
                    Novo por aqui?{' '}
                    <Link
                      color='white'
                      target='_self'
                      href='https://www.netflix.com/br/'
                    >
                      Assine agora
                    </Link>
                  </Text>
                  <Text color='gray.500' fontSize='xs'>
                    Esta página é protegida pelo Google reCAPTCHA para garantir
                    que você não é um robô.{' '}
                    <Link color='blue'>Saiba mais.</Link>
                  </Text>
                </VStack>
              </CardFooter>
            </Card>
          </Center>
        </Box>
        <Box bg='blackAlpha.900'>
          <Center w='100%'>
            <VStack p={8} align='' spacing={6} w='60rem'>
              <Box>
                <Text color='gray.500'>
                  Dúvidas? Ligue <Link color='gray.500'>0800 591 8942</Link>{' '}
                </Text>
              </Box>
              <Flex gap='1rem 7rem' wrap='wrap'>
                <Link color='gray.500' fontSize={14}>
                  Perguntas frequentes
                </Link>
                <Link color='gray.500' fontSize={14}>
                  Central de Ajuda
                </Link>
                <Link color='gray.500' fontSize={14}>
                  Termos de Uso
                </Link>
                <Link color='gray.500' fontSize={14}>
                  Privacidade
                </Link>
                <Link color='gray.500' fontSize={14}>
                  Preferência de cookies
                </Link>
                <Link color='gray.500' fontSize={14}>
                  Informações corporativas
                </Link>
              </Flex>
              <Select
                color='gray.500'
                w='8rem'
                iconColor='gray.500'
                borderColor='gray.500'
              >
                <option value='portuguese'>Português</option>
                <option value='english'>Inglês</option>
              </Select>
            </VStack>
          </Center>
        </Box>
      </Box>
    </>
  );
}

export default App;
