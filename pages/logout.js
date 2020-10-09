import React, { useEffect,useState,useContext } from "react";
import { useRouter } from 'next/router';
// import Custom Components

import { AuthContext } from '../utils/auth';

const index = () => {
  const router=useRouter();
  const { logout } = useContext(AuthContext);
 
  useEffect(() => {
    logout();
    router.push('/login');
  });

  return (
    <div>
      
    </div>
  );
};

export default index;
