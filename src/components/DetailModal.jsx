'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure, TableContainer, Table, Thead, Tr, Th, Td, Tbody, Center, Text, Textarea } from '@chakra-ui/react'

// after development you can get rid of the reset function, it's only for development
// you can also get rid of testobj
// make sure to get rid of testobj in properties.jsx

const DetailModal = ({ propertyInfo, setPropertyInfo, testObj }) => {

    // console.log('this the data from detail modal', propertyInfo, setPropertyInfo, testObj)

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)

    const [ formData, setFormData ] = useState(propertyInfo)

    const onCloseModal = () => {
        setFormData(propertyInfo)
        onClose()
    }


    // console.log('this is formdata', formData)



    // console.log('this is propertyInfo', propertyInfo)

    const onChangeForm = (e) => {
        const property = e.target.parentNode.parentNode.id
        const attribute = e.target.name
        const value = e.target.value

        // console.log('this is value', value)

        setFormData(prev => ({
            ...prev,
            [property]: {
                ...prev[property],
                [attribute]: value
            }
        }))
    }

    const onUpdate = async() => {
        await axios.put('/api/detail', formData)
        setPropertyInfo(formData)
    }

    // YOU DONT NEED THIS RESET FUNCTION, IT'S ONLY FOR DEVELOPMENT
    const onReset = async() => {
        // dont need this function anymore, just here to reset things
        const response = await axios.post('/api/detail', testObj)
        onClose()
      }
  
    return (
      <>
        <Button onClick={ onOpen }>Change Info</Button>

        <Modal
          initialFocusRef={ initialRef }
          isOpen={ isOpen }
          onClose={ onCloseModal }
          size='6xl'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                Change Info
                <Text fontSize={'lg'} fontWeight={'bold'}>
                    *leave blank to keep current values
                </Text>
            </ModalHeader>
            
            <ModalBody pb={ 6 }>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>
                                    Property
                                </Th>
                                <Th>
                                    New Price 
                                </Th>
                                <Th>
                                    New Rating
                                </Th>
                                <Th>
                                    New Reviews
                                </Th>
                                <Th>
                                    New Description
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {   
                                Object.keys(propertyInfo).map(key => {
                                    return (
                                        <Tr id={key} key={key}>
                                            <Td>
                                                { key }
                                            </Td>
                                            <Td>
                                                <Input 
                                                    name='price'
                                                    variant='filled' 
                                                    width='50%' 
                                                    onChange={ onChangeForm }
                                                />
                                            </Td>
                                            <Td>
                                                <Input 
                                                    name='rating'
                                                    variant='filled' 
                                                    width='50%' 
                                                    onChange={ onChangeForm }

                                                />
                                            </Td>
                                            <Td>
                                                <Input 
                                                    name='reviews'
                                                    variant='filled' 
                                                    width='50%' 
                                                    onChange={ onChangeForm }

                                                />
                                            </Td>
                                            <Td>
                                                <Input 
                                                    name='desc'
                                                    variant='filled' 
                                                    width='90%' 
                                                    onChange={ onChangeForm }
                                                />
                                            </Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </ModalBody>
                
  
            <ModalFooter>
                <Button colorScheme='blue' mr={ 3 } onClick={ onUpdate }>
                    Update
                </Button>
                {/* <Button colorScheme='blue' mr={ 3 } onClick={ onReset }> */}
                    {/* Reset */}
                {/* </Button> */}
                <Button onClick={ onCloseModal }>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
      </>
    )
  }

export default DetailModal