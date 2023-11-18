import mongoose from "mongoose";
import { ObjectId } from "bson";

const recipeSchema = new mongoose.Schema({
recipename:{
    type:String,
    required:true,
},
recipetype:{
    type:String,
    required:true,
},
timings:{
    type:String,
    required:true,
},
ingredients:{
    type:String,
    required:true,
},
steps:{
    type:String,
},
date:{
    type:String,
    required:true,
},
user:{
    type:ObjectId,
ref:"user",
},
imageUrl: {
    type:String,
},
comments:{
    type:String,
}
});

const Recipe = mongoose.model("recipe",recipeSchema);
export {Recipe};

