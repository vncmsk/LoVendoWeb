import React from 'react'
import { useUser } from '../../context/usercontext';

const PrivateComp = ({ roleList, children }) => {
  const { userData } = useUser();
  
  if (roleList.includes(userData.rol)) {
    return children;
  }
  return <></>;
};

export default PrivateComp
