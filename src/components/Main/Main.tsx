import { Title } from '../Title/Title'
import { Navbar } from '../Navbar/Navbar'
import { extendTheme, ChakraProvider, Container } from '@chakra-ui/react'
import { Hero } from '../Banner/Hero'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  yellow: {
    100: '#403900',
    200: '#807300',
    400: '#FFE400',
    500: '#E6CF00',
  },
}

const theme = extendTheme({ colors })

export const Main = () => {
  return (
    <ChakraProvider theme={theme}>
      <main>
        <Container maxWidth="1352px" centerContent>
          <Navbar />
          <Hero />
          <Title className="text-gradient" />
          <p className="instructions">
            To get started, open the directory <code>src/pages</code> in your
            project.
            <br />
            <strong>Code Challenge:</strong> Tweak the "Welcome to Astro"
            message above.
          </p>
        </Container>
      </main>
    </ChakraProvider>
  )
}
