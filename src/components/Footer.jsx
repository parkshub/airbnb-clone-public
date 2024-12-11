import Link from 'next/link'
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Box } from '@chakra-ui/react';

export default function Footer() {
  const router = useRouter()
  return (
    <footer className='footer'
    // marginTop={'10rem'} /* remove this if not needed later */
    // paddingTop={'5rem'}
    // paddingBottom={'8rem'}
    // backgroundColor={'#4361ee14'}
    >
      <div className="container">
        {/* <Link className='logo' href="/"> */}
          <Image
            src="/footer-logo1.png"
            alt="footer logo"
            // width="180px"
            // height="65"
            height={{base:'50px', sm:'60px'}}
            width={{base:'150px', sm:'180px'}}
            mx={'auto'}
            _hover={{
              cursor:'pointer'
            }}
            onClick={() => router.push('/')}
          />
        {/* </Link> */}
        <p>MAKING OUR HOME IN SOUTH TEXAS</p>
        <div className="social-media">
          {/* <Link target="_blank" href="https://facebook.com">
            <Image
              src="/SocialMedia/facebook-icon.png"
              alt="facebook icon"
              width="22"
              height="22"
            />
          </Link> */}
          <Link target="_blank" href="https://www.instagram.com/Peculiarnest/">
            <Image
              src="/SocialMedia/instagram-icon.png"
              alt="instagram icon"
              width="22"
              height="22"
            />
          </Link>
          {/* <Link target="_blank" href="https://twitter.com">
            <Image
              src="/SocialMedia/x-icon.png"
              alt="x icon"
              width="22"
              height="22"
            />
          </Link> */}
          {/* <Link target="_blank" href="https://linkedin.com">
            <Image
              src="/SocialMedia/linkedIn-icon.png"
              alt="linkedIn icon"
              width="22"
              height="22"
            />
          </Link> */}
        </div>
        <hr />
        <div className="footer-n">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <span>|</span>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            {/* <span>|</span> */}
            {/* <li>
              <Link href="/properties">Properties</Link>
            </li> */}
            {/* <span>|</span> */}
            {/* <li>
              <Link href="/testimonials">Testimonials</Link>
            </li> */}
            <span>|</span>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
