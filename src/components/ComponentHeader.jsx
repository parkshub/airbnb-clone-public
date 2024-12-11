import React from 'react'
import { Stack, Text } from '@chakra-ui/react'

export const ComponentHeader = ({text1, text2, pb='8rem'}) => {
  return (
    <Stack spacing='2' paddingBottom={pb}>
        <Text color='#3C9F58' fontSize={['1.6rem', '1.5rem', '3xl', '3xl', '3xl']} fontWeight='550'>{text1}</Text>
        <Text fontSize={['2.5rem', '3xl', '5xl', '5xl', '5xl']} as='b'>{text2}</Text>
        {/* <Text color='#3C9F58' fontSize='2xl' fontWeight='medium'>TESTIMONIALS</Text> */}
        {/* <Text fontSize='5xl' as='b'>What People Are Saying About Us</Text> */}
    </Stack>
  )
}