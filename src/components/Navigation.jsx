'use client';
import React from 'react';
// import Link from 'next/link';
// import { Box, Flex, Image, Text, Icon } from '@chakra-ui/react';
import { Box, Flex, Text, Icon, Image, Button, Link } from '@chakra-ui/react';

// import Image from 'next/image'


import { StarIcon } from '@chakra-ui/icons';
import { HamburgerIcon } from '@chakra-ui/icons'
import { CloseIcon } from '@chakra-ui/icons'
import { usePathname } from 'next/navigation';

// comment this part out //
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
/////////////////////////

// break points 1440px 1280px 1024px 768px 480px 320px

function Navigation() {


  // comment this part out //
  const { status, data: session } = useSession()
  // const { data: session } = useSession()
  // // const [ data, setData ] = useState('')
  const user = session?.user
  // const user = 'someone'

  const signInUser = async () => {
    await signIn("google", {redirect: false })
  }
  // ////////////////////////////


  // get the current link
  const currentRoute = usePathname();
  // show and hide the menu in small screens
  const [showMenu, setShowMenu] = useState(false);
  // current logo based on the page

  const currentLogo = currentRoute !== "/" ? "/header-logo1.png" : "/white-logo1.png";
  const currentClass = currentRoute !== "/" ? "landing-page" : "not-landing"

  // const currentLogo = currentRoute !== "/" ? "header-logo.png" : "white-logo.png"
  // const currentLogo = currentRoute !== "/" ? "/header-logo.png" : "/white-logo.png"
  // const currentClass = currentRoute !== "/" ? "landing-page" : "not-landing"

  return (
    <Box 
      className={`header ${currentClass}`} 
      position={ currentRoute === '/' ? 'absolute' : 'relative'} 
      width={'100%'}
    >
      <Box className="container">
        {/* <div> */}
        <Flex height="8rem" alignItems="center">
          <div className="logo">
            <Link href='/'>
              <Image
                src={currentLogo}
                alt="website logo"
                height={{base:'20px', sm:'25px'}}
                width={{base:'150px', sm:'200px'}}
              />
            </Link>
          </div>
          {/* <nav className={`menu ${showMenu && 'show'}`} marginLeft="auto"> */}
          <nav className={`menu ${showMenu && 'show'} ${currentRoute === '/' && 'home'}`}>
            {/* <ul display="flex" justifyContent="center"> */}
            <ul display="flex">
              <li>
                <Link
                  href="/" className={currentRoute === '/' ? 'active' : ''}
                  onClick={() => setShowMenu(false)}
                >
                  {' '}
                  {/* if the link match / then add active className */}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={currentRoute === '/about' ? 'active' : ''}
                  onClick={() => setShowMenu(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={Boolean(currentRoute.match(/blog\/*.*/)) ? 'active' : ''}
                  onClick={() => setShowMenu(false)}
                >
                  Blog
                </Link>
              </li>
              
              {/* { !user
                ? 
                  <li>
                    <Link href='' onClick={signInUser}>
                      Admin Access
                    </Link>
                  </li>
                :
                  <>
                    <li>
                      <Link
                        href="/blogEditor"
                        className={currentRoute === '/blogEditor' ? 'active' : ''}
                        onClick={() => setShowMenu(false)}
                      >
                        Blog Editor
                      </Link>
                    </li>
                    <li>
                      <Link href='' onClick={() => signOut('google')}>
                        Sign Out
                      </Link>
                    </li>
                  </>
              } */}
            </ul>
          </nav>

          <Link href="mailto%3Apeculiarnest%40gmail.com">
            <button className="main-button">Contact Us</button>
          </Link>

          <button
            className={`hamburger-menu ${currentRoute === '/' && 'home'}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <Icon
                as={CloseIcon}
                className="close-icon menu-icon"
                w={'1.5rem'}
                aspectRatio={'1/1'}
              />
              ) : (
              <Icon
                as={HamburgerIcon}
                className="hamburger-icon menu-icon"
                w={'2.5rem'}
                aspectRatio={'1/1'}
              />
            )
            }
          </button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navigation;
