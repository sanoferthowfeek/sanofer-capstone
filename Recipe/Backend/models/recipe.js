import mongoose,{mongo} from "mongoose";

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
    
}
});

const Recipe = mongoose.model("recipe",recipeSchema);
export {Recipe};