import express from "express";
const router = express.Router();

// get all recipes
router.get("/all", (req,res) =>{
try {
    
} catch (error) {
    
}
});

// get all  user recipes
router.get("/user/all", (req,res) =>{
    try {
        
    } catch (error) {
        
    }
    });

    // add new user recipes
router.post("/user/add", (req,res) =>{
    try {
        
    } catch (error) {
        
    }
    });

    // edit user recipes
router.put("/user/edit/:id", (req,res) =>{
    try {
        
    } catch (error) {
        
    }
    });


    // delete user recipes
router.delete("/user/delete/:id", (req,res) =>{
    try {
        
    } catch (error) {
        
    }
    });

    const recipeRouter = router;

export {recipeRouter};