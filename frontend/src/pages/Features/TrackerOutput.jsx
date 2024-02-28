import React from 'react'
import { useLocation } from 'react-router-dom'
import { BackButton } from '../../components/BackButton';

export const TrackerOutput = () => {
    const location = useLocation();
    console.log(location);

  return (
    <div>
        <BackButton />
        <h1>TrackerOutput</h1>
    </div>
  )
}
