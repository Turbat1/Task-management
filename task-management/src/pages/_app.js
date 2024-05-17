import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Check if the current route is the homepage
  const isHomePage = router.pathname === '/';

  return (
    <div>
      {/* Display the navbar on all pages except the homepage */}
      {!isHomePage && <Navbar />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
