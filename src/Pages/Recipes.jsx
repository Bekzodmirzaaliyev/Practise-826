import React, { useEffect, useState } from "react";
import { IoIosTime } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []); // Empty dependency array to run effect only once

  const handleRecipeClick = (id) => {
    const clickedRecipe = recipes[id];
    console.log("Clicked Recipe Info:");
    console.log("Name:", clickedRecipe.name);
    console.log("Calories per Serving:", clickedRecipe.caloriesPerServing);
    console.log("Cooking Time:", clickedRecipe.cookTimeMinutes);
    console.log("Rating:", clickedRecipe.rating);
    console.log("Viewed:", clickedRecipe.reviewCount);
    console.log("Servings:", clickedRecipe.servings);
    // Add more fields as needed
  };

  return (
    <>
      <div className="flex flex-wrap w-[90%] mx-auto justify-around gap-[30px]">
        {recipes.map((recipe, id) => (
          <div
            key={id}
            className="flex bg-slate-800 w-[300px] h-[540px] flex-col rounded-xl pb-3 shadow-xl shadow-slate-500 text-white "
            onClick={() => handleRecipeClick(id)}
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
    </>
  );
};

export default Recipes;
  