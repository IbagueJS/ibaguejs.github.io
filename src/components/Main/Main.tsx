import { Navbar } from '../Navbar/Navbar'
import { extendTheme, ChakraProvider, Container } from '@chakra-ui/react'
import { Hero } from '../Hero/Hero'
import { SponsorBanner } from '../SponsorBanner/SponsorBanner'

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
        </Container>
        <SponsorBanner />
      </main>
    </ChakraProvider>
  )
}
