import { Text, Stack, Image, Heading, Box } from '@chakra-ui/react';

export const detailObject = {
    Ethereal: 
      { detail: [
        [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">2 Beds</Text></>],
        [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text >1 Bathroom</Text></>],
        [<><Image src="/properties/icons/room.svg" alt="room icon" /><Text >1 Room</Text></>]

      ],
      tag: 
        <>
          <Image
            src="/properties/icons/luxury.svg"
            alt="sparkle icon denoting luxury property"
            width={{base: "12px", md:"16px"}}
          /><Text >Luxury</Text>
        </>,
      image: "/properties/peculair_nest.png",
      propertyId: '47567583'
      },

    Biophilia: 
      { detail: [
        [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">1 Queen Bed</Text></>],
        [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Private Bathroom</Text></>]
      ],
      tag:         
        <>
          <Image
            src="/properties/icons/economy.svg"
            alt="leaf icon denoting eco property"
            width={{base: "12px", md:"16px"}}
          /><Text >Eco</Text>
        </>,
      image: "/properties/BiophiliaPrivat.png",
      propertyId: '632893977610099509'
      }, 
      
    Bohemia: 
      { 
        detail: [
          [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">1 Queen Bed</Text></>],
          [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Private Bathroom</Text></>]
        ],
        tag: 
          <>
            <Image
              src="/properties/icons/icon_fire_.svg"
              alt="fire icon denoting popular property"
              width={{base: "12px", md:"16px"}}
            /><Text >Popular</Text>
          </>,
        image: "/properties/Room_in_farm.png",
        propertyId: '52427533'

      },
    Sublime: 
      { 
        detail: [
          [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">2 Beds</Text></>],
          [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Bathroom</Text></>],
          [<><Image src="/properties/icons/room.svg" alt="room icon" /><Text >1 Room</Text></>]
        ],
        tag: 
          <>
            <Image
              src="/properties/icons/icon_fire_.svg"
              alt="fire icon denoting popular property"
              width={{base: "12px", md:"16px"}}
            /><Text >Popular</Text>
          </>,
        image: "/properties/Sublime.png",
        propertyId: '48404830'

      },
    Dreamy: 
      { 
        detail: [
          [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">2 Beds</Text></>],
          [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Bathroom</Text></>],
          [<><Image src="/properties/icons/room.svg" alt="room icon" /><Text >1 Room</Text></>],
          // [<><Image src="/properties/icons/guest.svg" width={'inherit'} alt="wifi icon" /><Text >4 Guests</Text></>]
          // add another one for 4 guests
        ],
        tag: 
          <>
            <Image
              src="/properties/icons/icon_fire_.svg"
              alt="fire icon denoting popular property"
              width={{base: "12px", md:"16px"}}
            /><Text >Popular</Text>
          </>,
        image: "/properties/grand_estate.png",
        propertyId: '48120269'

      },

    Hermitage: 
      { 
        detail: [
          [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">1 Bed</Text></>],
          [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Private Bathroom</Text></>]
        ], 
        tag:         
          <>
            <Image
              src="/properties/icons/economy.svg"
              alt="leaf icon denoting eco property"
              width={{base: "12px", md:"16px"}}
            /><Text >Eco</Text>
          </>,
        image: "/properties/Hermitage.png",
        propertyId: '759483143926530683'
      }

  }