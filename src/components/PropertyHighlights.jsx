import React from 'react';
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Image,
  Button,
} from '@chakra-ui/react';

function PropertyHighlights() {
  return (
    <Box>
      <Grid
        p={{ base: '2rem 0rem' }}
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        justifyItems="center"
        alignItems="center"
        columnGap="4rem"
      >
        <GridItem p={{ base: '2rem 0rem', md: '0rem', lg: '0rem' }}>
          <Text color="#2B2B2B" fontWeight="700" fontSize="4rem">
            Origin and Founding
          </Text>
          <Text color="#808080" fontSize="1.6rem" py="2rem" lineHeight="1.8">
            Our adventure begins with the extraordinary tale of two resilient
            teenagers, hailing from the picturesque landscapes of South Korea,
            who found a new home under the sunny skies of California. Their love
            story flourished amidst the grounds of UC Berkeley, laying the
            foundation for a vibrant family life that stretched from the Golden
            State to the Lone Star State of Texas.
          </Text>
        </GridItem>

        <GridItem p={{ base: '2rem 0rem', md: '0rem', lg: '0rem' }}>
          <Image borderRadius="20px" src="Images\aboutUs\main-image-1.webp" alt=""/>
        </GridItem>
      </Grid>

      <Grid
        p={{ base: '2rem 0rem' }}
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        justifyItems="center"
        alignItems="center"
        columnGap="4rem"
      >
        <GridItem p={{ base: '2rem 0rem', md: '0rem', lg: '0rem' }}>
          <Image borderRadius="20px" src="Images\aboutUs\main-image-2.webp" alt=""/>
        </GridItem>

        <GridItem p={{ base: '2rem 0rem', md: '0rem', lg: '0rem' }}>
          <Text color="#2B2B2B" fontWeight="700" fontSize="4rem">
            Transformation and Welcoming
          </Text>
          <Text color="#808080" fontSize="1.6rem" py="2rem" lineHeight="1.8">
            Over time, the family grew, each child embarking on their unique
            journey of discovery. Their paths branched out from the familial
            nest, leading to the urban jungles of New York City, the quirky
            vibes of Austin, Texas, and the charming streets of Hoboken, New
            Jersey. With the world as their canvas, the siblings set off, armed
            with the values, love, and support nurtured at home.
          </Text>
        </GridItem>
      </Grid>

      <Grid
        p={{ base: '2rem 0rem' }}
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        justifyItems="center"
        alignItems="center"
        columnGap="4rem"
      >
        <GridItem p={{ base: '2rem 0rem', md: '0rem', lg: '0rem' }}>
          <Text color="#2B2B2B" fontWeight="700" fontSize="4rem">
            Unveiling the Peculiar Nest
          </Text>
          <Text color="#808080" fontSize="1.6rem" py="2rem" lineHeight="1.8">
            Now, the homely abode that once buzzed with the delightful chaos of
            a thriving family has transformed into the Peculiar Nest - a
            tranquil haven for voyagers, nature enthusiasts, and avian admirers.
            The once bustling household in the southernmost tip of Texas now
            warmly welcomes a new kind of family - those brought together by
            wanderlust, the love for nature, and the pursuit of connections
            beyond their own backyards. Join us as we uncover the myriad
            stories, unforgettable experiences, and the vibrant life of this
            uniquely intriguing nest.
          </Text>
        </GridItem>

        <GridItem p={{ base: '2rem 0rem', md: '0rem', lg: '0rem' }}>
          <Image borderRadius="20px" src="Images\aboutUs\main-image-3.webp" alt=""/>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default PropertyHighlights;