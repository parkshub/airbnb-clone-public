'use client';
import SecondPageHeader from '@/components/SecondPageHeader';
import PropertyHighlights from '@/components/PropertyHighlights';
import { Image } from '@chakra-ui/react';



function About() {
  return (
    <main>
      <section className="section hero">
        <div className="container">
          <SecondPageHeader
            mainTitle="About US"
            subTitle="The Peculiar Nest: Where Family, Nature, and Wanderlust Converge"
          />
          <Image
            className="big-image"
            src="/large_lake_image.png"
            alt="large lake image"
            width="1200"
            height="424"
          />
        </div>
      </section>

      <section className="section about-us-content">
        <div className="container">
          <PropertyHighlights />
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <h2 className="gallery-title">Gallery</h2>
          <div className="gallery-grid">
            <Image
              src="Images/gallery/image1.png"
              alt="font view of house"
              w="100%"
              h="100%"
              className="small gallery-img middle-hide"
              objectFit={'cover'}
            />
            <Image
              src="Images/gallery/image2.png"
              alt="white bird"
              // width="330"
              // height="320"
              className="small gallery-img"
              objectFit={'cover'}
            />
            <Image
              src="Images/gallery/image3.png"
              alt="yard view"
              // width="473"
              // height="320"
              className="mid gallery-img"
              objectFit={'cover'}
            />
            <Image
              src="Images/gallery/image4.png"
              alt="night fire place"
              // width="455"
              // height="320"
              className="mid-xl gallery-img middle-hide"
              objectFit={'cover'}
            />
            <Image
              src="Images/gallery/image5.png"
              alt="lake and nature view"
              // width="730"
              // height="320"
              className="big gallery-img"
              objectFit={'cover'}
            />
            <Image
              src="Images/gallery/image6.png"
              alt="property from the lake view"
              // width="473"
              // height="320"
              className="mid gallery-img small-hide"
              objectFit={'cover'}
            />
            <Image
              src="Images/gallery/image7.png"
              alt="from inside the property"
              // width="330"
              // height="320"
              className="small gallery-img middle-hide"
              objectFit={'cover'}
            />
            <Image
              src="Images/gallery/image8.png"
              alt="Peacock image"
              // width="330"
              // height="320"
              className="small gallery-img small-hide"
              objectFit={'cover'}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
