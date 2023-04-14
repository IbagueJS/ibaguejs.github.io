import { Navbar } from '../Navbar/Navbar'
import { extendTheme, ChakraProvider, Container } from '@chakra-ui/react'
import { Hero } from '../Hero/Hero'
import { SponsorBanner } from '../SponsorBanner/SponsorBanner'
import { Events } from '../Events/Events'
import "@fontsource/roboto"
import { SpeakerBanner } from '../SpeakerBanner/SpeakerBanner'

const colors = {
  yellow: {
    100: '#403900',
    200: '#807300',
    400: '#FFE400',
    500: '#E6CF00',
  },
}

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
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
        <Container maxWidth="1352px" centerContent>
          <Events />
          <SpeakerBanner />
        </Container>
      </main>
    </ChakraProvider>
  )
}
