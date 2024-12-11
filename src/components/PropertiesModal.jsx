import React from 'react'
import { Modal, ModalOverlay, ModalHeader, ModalContent, ModalBody, ModalFooter, Button, Text, Image, Link } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropertySlide from './PropertySlide'

export default function PropertiesModal({isOpen, onClose, property, propertyId}) {

    const onClick = (e) => {
      // e.preventDefault()
      // console.log(`https://www.airbnb.com/rooms/${propertyId}`)
    }

    return (
        <>
        {/* <Modal onClose={ onClose } isOpen={ isOpen } size={'xl'} width> */}
        <Modal 
          onClose={ onClose } 
          isOpen={ isOpen } 
          size={'5xl'}
          isCentered
        >
          <ModalOverlay backdropFilter='blur(10px)'/>
          <ModalContent 
              backgroundColor={'transparent'} 
          >

            <ModalBody px={'5rem'} userSelect={'none'}>
              <PropertySlide property={property}/>
            </ModalBody>
            <ModalFooter display={'flex'} flexDirection={'column'} gap={'1rem'}>
              <Link href={`https://www.airbnb.com/rooms/${propertyId}`} isExternal width={'100%'}>
                <Button 
                    width={'100%'} 
                    backgroundColor={'#ccffda'}
                    color={'#0d4734'}
                    onClick={onClick}
                  >
                    Book a Stay at {property}
                  </Button>
                </Link>
                <Button 
                  width={'100%'} 
                  onClick={ onClose } 
                  backgroundColor={''} 
                  position={'relative'}
                >
                  Close
                </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
