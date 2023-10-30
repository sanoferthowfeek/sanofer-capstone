import React from 'react'
import Base from '../Base/Base.jsx';
import {useNavigate} from 'react-router-dom';
import {Button}from '@mui/material';

const About = () => {
  const navigate = useNavigate();

  return (
    <Base title={"Information About Recipe App"}> 
    <div>
      <Button variant="contained" color="success"
    onClick={() =>navigate("/")} >
  Back
</Button>
      </div>
    <h4> The Global Recipe Apps market is anticipated to rise at a considerable rate during the forecast period, between 2023 and 2030. In 2022, the market is growing at a steady rate and with the rising adoption of strategies by key players, the market is expected to rise over the projected horizon. </h4>
    <h4>The app allows the users to find recipes based on different criteria such as, course, cuisine, and type of food. It also provides a filtering system that can be used to filter the list of recipes based on the ingredients used in each recipe, the time it takes to make the food, and the number of servings.</h4>
    <h4>They teach us techniques, introduce us to new ingredients, encourage us to expand our palates, riff on old ways of doing things, and promise us new ways of doing things that with time will become old ways.</h4>
    <h4>Organize your Recipe Book (Website) Tags, Rating, and Categories help you organize and define your recipes. Course, Cuisine, Main Ingredient, and Tags can be customized to whatever you'd like! Add, edit, or remove any of the options in these categories and then add them to your recipes to organize your recipe book.</h4>
    <h4>Most are simply people who enjoy cooking at home and want to share with others. The organic and authentic aspect of this is why some prefer Cookpad to other cooking apps available. The global food industry continues to expand, with recipe-sharing apps bringing cuisine know-how into homes.</h4>
    <h4>Many food lovers are all-time high who uses cooking and recipe app for their regular uses. Around 23 million people across Australia, U.S, Canada, and India have asked Google for the food recipe and cooking mobile app.</h4>
    <h4>Farmer's book popularized the modern recipe format, and it was a fitting guide to food and home life in a modernizing country. Recipes today serve many purposes, from documenting cooking techniques, to showing off a creator's skills, to serving up leisure reading for the food-obsessed.</h4>
    <h4>Our Recipe Clipper allows you to gather all your recipes together in your digital recipe book and organize them how you like. The meal planning calendar lets you plan ahead for any length of time, save meal plans to reuse in the future and add notes to remind yourself of the other events and obligations in your life.</h4>
    <h4>One of the significant advantages of using an online food recipe website is that it saves time and effort. Users can simply browse through the website and find a recipe that fits their requirements instead of searching through cookbooks or the internet.</h4>
    <h4>A study of 2,000 adults found that 71 per cent of people have “gone digital” in the kitchen with 23 per cent getting their cooking ideas from Facebook and 21 per cent from Instagram.</h4>
    </Base>
  )
}

export default About