import { Navbar } from '../Navbar/Navbar'
import { extendTheme, ChakraProvider, Container } from '@chakra-ui/react'
import { Hero } from '../Hero/Hero'
import { SponsorBanner } from '../SponsorBanner/SponsorBanner'
import { Events } from '../Events/Events'
import { SpeakerBanner } from '../SpeakerBanner/SpeakerBanner'
import { Organizers } from '../Organizers/Organizers'
import { Footer } from '../Footer/Footer'

import "@fontsource/roboto"

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
        <Container width="100vw" maxWidth="1352px" centerContent>
          <Navbar />
          <Hero />
        </Container>
        <SponsorBanner />
        <Container width="100vw" maxWidth="1352px" centerContent>
          <Events />
          <SpeakerBanner />
          <Organizers />
        </Container>
        <Footer />
      </main>
    </ChakraProvider>
  )
}
