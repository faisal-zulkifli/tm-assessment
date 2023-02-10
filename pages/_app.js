import { ChakraProvider } from "@chakra-ui/react";
import FormInput from "./formInput";
// import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ChakraProvider>
    <Component {...pageProps} />
   
    <FormInput label="form" />
    
   
  </ChakraProvider>
}
