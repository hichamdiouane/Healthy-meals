"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Home() {
  // const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);


  let foods = [
    {
      id: 1,
      name: "⚡️Healthy Smoothie",
      ingredients: ["100g Oat", "banana 🍌", "1 Perly", "30g Nuts", "3 pieces black choklate", "500ml milk 🥛"],
      macros: { protein: 41, carbs: 169, fat: 31 , Total: 1284},
      imageUrl: "/images/Healthy_Smoothie.png"
    },
    {
      id: 2,
      name: "⚡️High Protein Sandwich",
      ingredients: ["1 Baguette 🥖", "4 Eggs 🐣", "100g Thon 🐟", "1 Perly mssous", "4 pieces 🧀", " 30g olive 🫒"],
      macros: { protein: 88, carbs: 97, fat: 59 , Total: 1262},
      imageUrl: "/images/high_protein_sandwich.png"
    },
    {
      id: 3,
      name: "⚡️Bulking Smoothi",
      ingredients: ["80g Oat ", "2 Banana 🍌", "500ml Milk 🥛", "30g Nuts 🥜", "3 Spoon 🥄 Honey 🍯", "2 Spoon 🥄 peanut butter", "30g Shea", "3 Tamrat"],
      macros: { protein: 47, carbs: 233, fat: 55 , Total: 1577},
      imageUrl: "/images/Bulking_Smoothi.png"
    },
    {
      id: 4,
      name: "⚡️Healty Meal",
      ingredients: ["300g l7m 🥩 ", "400g btata 7lowa🍠", "20g zitoun🫒", "1 bsla🧅", "2 korjit 🥒",],
      macros: { protein: 75, carbs: 80, fat: 29 , Total: 905},
      imageUrl: "/images/Healty_Meal.png"
    },
    {
      id: 5,
      name: "⚡️2 Healty Meals",
      ingredients: ["300g 🐓 ", "thon 🐟", "200g 🍚", "2 🐣", "1 btata 🥔", "1 khyara🥒"],
      macros: { protein: 126, carbs: 228, fat: 19 , Total: 1627},
      imageUrl: "/images/Healty_Meal2.png"
    },
    {
      id: 6,
      name: "🔥khobza Healthy",
      ingredients: ["Khobza complet", "200g kefta", "2 🐣", "20g zitoun🫒 ", "1 bsla🧅",  "2 🧀"],
      macros: { protein: 76, carbs: NaN, fat: NaN , Total: 804},
      imageUrl: "/images/khobza_Healthy.png"
    },
    {
      id: 71,
      name: "🔥Pancakes🥞",
      ingredients: ["100g chofan", "3 🐣", "1 🥛", "1 perly", "4 🍫",  " 2 🍌", "🥄 9arfa"],
      macros: { protein: 49, carbs: NaN, fat: NaN , Total: 1094},
      imageUrl: "/images/Pancakes.png"
    },
  ];


  // useEffect(() => {
  //   fetchFoods();
  // }, []);

  // const fetchFoods = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/foods');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch foods');
  //     }
  //     const data = await response.json();
  //     setFoods(data);
  //   } catch (error) {
  //     console.error('Error fetching foods:', error);
  //   }
  // };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Healthy Food Options</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {foods.map((food) => (
            <div key={food.id} className="border p-4 rounded-lg shadow mb-4 cursor-pointer" onClick={() => handleFoodClick(food)}>
              <h2 className="text-xl font-semibold">{food.name}</h2>
              <p>{food.macros.Total}Kcal</p>
            </div>
          ))}
        </div>
        <div>
          {selectedFood && (
            <div className="border p-4 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-2">{selectedFood.name}</h2>
              <Image
                src={selectedFood.imageUrl}
                alt={selectedFood.name}
                width={200}
                height={10}
                className="my-3"
              />
              <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
              <ul className="list-disc list-inside">
                {selectedFood.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4">Macros:</h3>
              <p>Protein: {selectedFood.macros.protein}g</p>
              <p>Carbs: {selectedFood.macros.carbs}g</p>
              <p>Fat: {selectedFood.macros.fat}g</p>
              <p>Total: {selectedFood.macros.Total} Kcal</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}