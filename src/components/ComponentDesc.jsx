import React from 'react'
import { Text } from '@chakra-ui/react'

export const ComponentDesc = ({text ,mb='0'}) => {
  return (
    <Text 
    // className="section__paragraph" 
      maxW={'580px'}
      fontSize={['1.3em', '1.2rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem']}
      // lineHeight={['2rem', '1.6rem', '1.8rem', '2rem', '2rem', '2rem']}
      lineHeight={'2rem'}
      color={'#808080'}
      mb={mb}
  >
          {/* Today, the Peculiar Nest proudly offers six distinctive
          properties across the US, inviting you to experience the essence
          of each location. From bustling cityscapes to serene natural
          havens, join us to explore a world of stories, experiences, and
          a uniquely intriguing nest. */}
          {text}
  </Text>
  )
}
