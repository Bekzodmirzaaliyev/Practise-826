import React, { useEffect, useState } from "react";
import { IoIosTime } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

const Recipes = () => {
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [clickedRecipe, setClickedRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  const handleComponentSwitch = () => {
    setShowFirstComponent(false);
  };

  const handleBackToRecipes = () => {
    setShowFirstComponent(true);
  };

  const RecipeClick = (id) => {
    const clickedRecipeData = recipes[id];
    console.log("Clicked Recipe Info:", clickedRecipeData);
    setClickedRecipe(clickedRecipeData); // Set the clicked recipe data
    handleComponentSwitch(); // Switch to the second component
  };

  return (
    <div>
      {showFirstComponent ? (
        <Component1 recipes={recipes} RecipeClick={RecipeClick} />
      ) : (
        <Component2 clickedRecipe={clickedRecipe} onBackClick={handleBackToRecipes} />
      )}
    </div>
  );
};


const Component1 = ({ recipes, RecipeClick }) => {
  return (
    <div className="flex flex-wrap w-[90%] mx-auto justify-around gap-[30px]">
      {recipes.map((recipe, id) => (
        <div
          key={id}
          className="flex bg-slate-800 w-[300px] h-[540px] flex-col rounded-xl pb-3 shadow-xl shadow-slate-500 text-white "
          onClick={() => RecipeClick(id)}
        >
          <img
            src={recipe.image}
            alt=""
            className="w-full max-h-[300px] rounded-t-lg"
          />
          <div className="flex flex-col text-center justify-center py-[10px] gap-5 px-[10px]">
            <p className="font-bold text-[20px]">{recipe.name}</p>
            <p className="flex gap-1 items-center">
              <IoFastFood /> Calories: {recipe.caloriesPerServing}
            </p>
            <p className="flex gap-1 items-center">
              <IoIosTime />
              Cooking Time: {recipe.cookTimeMinutes}
            </p>
            <p className="flex gap-1 items-center">
              <FaStar />
              Rating: {recipe.rating}
            </p>
            <div className="flex justify-between">
              <p className="flex gap-1 items-center">
                <IoEye />
                Viewed: {recipe.reviewCount}
              </p>
              <p className="flex gap-1 items-center">
                <MdOutlineDownloadDone /> Servings: {recipe.servings}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Component2 = ({ clickedRecipe, onBackClick }) => {
  return (
    
    <div className="max-w-[80%] mx-auto">
      <button onClick={onBackClick} className="bg-emerald-500 px-[30px] hover:bg-emerald-400 transition duration-300 active:scale-95 py-[10px] text-white rounded-sm flex items-center gap-2"><FaArrowLeft />Back to Recipes</button>

      {clickedRecipe && (
        <>
          <div className=''>
      <h1 className='text-[30px] font-semibold leading-[36px] text-center pt-[15px]'>{clickedRecipe.name}</h1>
      <p className='text-center text-[#292929] text-[16px] font-[400] leading-[22px]'>3 товара / 1030 руб.</p>
      <div className='flex justify-center gap-[30px] mt-[35px]'>
        <div className='bg-transparent border rounded-xl px-[20px] py-[15px] flex items-center justify-center'>
          <img src={clickedRecipe.image} className="h-[430px] w-[500px] rounded-lg" alt="" />
        </div>
        <div className='border border-white rounded-xl text-white- h-[460px] w-[480px] p-8'>
          <h3 className='text-[18px] font-semibold leading-[22px] mb-[10px]'>Recipe Information</h3>
          <div className='flex justify-around items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px] w-[150px]'>Cuisine</p>
            <hr className='w-full' />
            <p>{clickedRecipe.cuisine}</p>
          </div>
          <div className='flex justify-around items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px] w-[150px]'>Calories</p>
            <hr className='w-full' />
            <p>{clickedRecipe.caloriesPerServing}</p>
          </div>
          <div className='flex justify-around items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px] w-[150px]'>Cooking time</p>
            <hr className='w-full' />
            <p> {clickedRecipe.cookTimeMinutes}</p>
          </div>  
          <div className='flex justify-around items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px]'>Reviews</p>
            <hr className='w-full' />
            <p>{clickedRecipe.reviewCount}</p>
          </div>

          <div className='flex justify-around items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px]'>Servings</p>
            <hr className='w-full' />
            <p>{clickedRecipe.servings}</p>
          </div>

          <div className='flex items-baseline flex-col text-center justify-center'>
            <p className='text-[16px] font-[400] leading-[22px] mx-auto'>Ingredients:</p>
            <div><p>{clickedRecipe.ingredients}</p> </div>
          </div>

          <hr className='mt-[20px] mb-[15px]' />
          <div className='flex justify-between items-baseline'>
            <p className='text-[20px] font-[500] leading-[22px]'>Overall Rating:</p>
            <div className='text-[18px] font-[600] leading-[22px] flex items-center gap-1'>{clickedRecipe.rating}<IoIosStar /></div>
          </div>
          <div className="flex items-center my-auto justify-center h-[100px] pt-[10px]"><button className="bg-emerald-500 px-[30px] hover:bg-emerald-400 transition duration-300 active:scale-95 py-[10px] text-white rounded-sm">View instructions</button></div>
        </div>
      </div>
    </div>
        </>
      )}
    </div>
  );
};

export default Recipes;