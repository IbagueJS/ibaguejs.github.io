import { Title } from '../Title/Title';
import { Navbar } from '../Navbar/Navbar';
import { Button, Container, Input, useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useRef } from 'react';

export const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <main>
      <Container centerContent paddingX='164px'>

        <Navbar />
        <Title className="text-gradient" />
        <p className="instructions">
          To get started, open the directory <code>src/pages</code> in your project.<br />
          <strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
        </p>
        <Button colorScheme='blue'>Button</Button>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Container>
    </main>
  )
}
