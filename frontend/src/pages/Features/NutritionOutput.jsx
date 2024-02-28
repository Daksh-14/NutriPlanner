import React from 'react'
import { useLocation } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

export const NutritionOutput = () => {
    const location = useLocation();
    const output = location.state.output;
  return (
    <div>
        <BackButton />
        {output}
    </div>
  )
}
