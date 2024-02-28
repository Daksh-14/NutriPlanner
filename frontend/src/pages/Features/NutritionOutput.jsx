import React from 'react'
import { useLocation } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

export const NutritionOutput = () => {
    const location = useLocation();
    const output = location.state.output;
    const cards = output.map((obj)=>{
      return(
        <React.Fragment key={obj.RecipeId}>
          <img src={obj.image_link} alt="Food Item" />
          <h1>Name - {obj.Name}</h1>
          <ul>
            <li>
              Calories - {obj.Calories}  
              FatContent - {obj.FatContent} 
              SaturatedFatContent - {obj.SaturatedFatContent}
            </li>
            <li>
              CholesterolContent - {obj.CholesterolContent}  
              CarbohydrateContent - {obj.CarbohydrateContent} 
              SodiumContent - {obj.SodiumContent}
            </li>
            <li>
              ProteinContent - {obj.ProteinContent}  
              SugarContent - {obj.SugarContent} 
              FiberContent - {obj.FiberContent}
            </li>
          </ul>
          return (
            <p>Ingredients - </p>
            obj.RecipeIngredientParts.map(function (ingr,ind){
                <React.Fragment key={ind}>
                  <p>{ingr}</p>
                </React.Fragment>
              }
            )
          )
        </React.Fragment>
      )
    })
  return (
    <div>
        <BackButton />
        {cards}
    </div>
  )
}
