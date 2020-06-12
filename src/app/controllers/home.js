const Recipe = require('../../models/Recipe')
const Chef = require('../../models/Chef')

module.exports = {
    index(req, res) {

        Recipe.all(function(recipes) {
            return res.render("site/index", { recipes })
        })        
    },
    indexChef(req, res) {

        Chef.all(function(chefs) {
            return res.render("site/chefs", { chefs })
        })        
    },
    indexRecipe(req, res) {

        Recipe.all(function(recipes) {
            return res.render("site/recipes", { recipes })
        })        
    }
}