import { Recipe } from "../models/recipe.js"

export function getAllRecipe(){
    return Recipe.find().populate("user","username");
}

export function getUserRecipe(req){
    return Recipe.find({user: req.user._id}).populate("user","username email");
}

export function postNewRecipe(req){
    const updatedDate = new Date().toJSON().slice(0.10);
    return  new Recipe({
        ...req.body,
        date:updatedDate,
        user: req.user._id,
        
    }).save();
}

export function updatedRecipe(req){
    return Recipe.findOneAndUpdate(
       {_id:req.params.id},
       {$set: req.body},
       {new:true},
    );
}

export function deletedRecipe(req){
    return Recipe.findByIdAndDelete({
        _id:req.params.id,
    }); 
}