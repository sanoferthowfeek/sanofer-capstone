import express from "express";
import { getAllRecipe,getUserRecipe,postNewRecipe,updatedRecipe,deletedRecipe} from "../controllers/recipe.js";

const router = express.Router();

// get all recipes
router.get("/all", async (req,res) =>{
try {
    const recipes = await getAllRecipe();
    if(!recipes || recipes.length <= 0 ) {
        return res.status(404).json({
            error: "No content available",
        });
    }

    res.status(200).json({
        data:recipes,
    });
} catch (error) {
    console.log(error);
    res.status(500).json({error:"Internal Server"});
}
});

// get all  user recipes
router.get("/user/all", async (req,res) =>{
    try {
        const recipes = await getUserRecipe(req);
    if(!recipes || recipes.length <= 0 ) {
        return res.status(404).json({
            error: "No content available",
        });
    }

    res.status(200).json({
        data:recipes,
    });
    } catch (error) {
        console.log(error);
    res.status(500).json({error:"Internal Server"});
    }
    });

    // add new user recipes
router.post("/user/add", async (req,res) =>{
  
    try {
        const newpost = await postNewRecipe(req);
        if(!newpost) {
            return res.status(400).json({
                error:"Error occured while uploading"
            });
        }
        res.status(201).json({
            message:"Successfully Uploaded",
            data:newpost,
        });
    } catch (error) {
        console.log(error);
    res.status(500).json({error:"Internal Server"});
    }
    });

    // edit user recipes
router.put("/user/edit/:id", async (req,res) =>{
    try {
        const editRecipe = await updatedRecipe(req);
        if(!updatedRecipe) {
            return res.status(400).json({
                error:"Error occured while updating"
            });
        }
        res.status(201).json({
            message:"Successfully Uploaded",
            data:editRecipe,
        });
    } catch (error) {
        console.log(error);
    res.status(500).json({error:"Internal Server"});
    }
    });


    // delete user recipes
router.delete("/user/delete/:id", async (req,res) =>{
    try {
        const deleteRecipe = await deletedRecipe(req);
        if(!deleteRecipe) {
            return res.status(400).json({
                error:"Error occured while deleting"
            });
        }
        res.status(201).json({
            message:"Successfully Deleted",
        });
    } catch (error) {
        console.log(error);
    res.status(500).json({error:"Internal Server"});
    }
    });

    const recipeRouter = router;

export {recipeRouter};