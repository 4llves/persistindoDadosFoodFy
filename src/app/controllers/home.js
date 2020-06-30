const Recipe = require('../../models/Recipe')
const Chef = require('../../models/Chef')

module.exports = {
    index(req, res) {        
        const { filter } = req.query
        
        if ( filter ) {
            Recipe.findBy(filter, function(recipes){
                // console.log(recipes)
                return res.render("site/recipes", { recipes })
            })
        } else {
            Recipe.all(function(recipes) {
                let recipesFiltered = []

                for(let i = 0; i < 6; i++) {                    
                    const obj = recipes[i]
                    obj.index = i
                    recipesFiltered.push(obj)
                }

                return res.render("site/index", { recipes: recipesFiltered })
            })
        }  
    },
    indexChef(req, res) {

        Chef.all(function(chefs) {
            return res.render("site/chefs", { chefs })
        })        
    },
    indexRecipe(req, res) {
        // const { filter } = req.query

        // if ( filter ) {
        //     Recipe.findBy(filter, function(recipes){
        //         // console.log(recipes)
        //         return res.render("site/recipes", { recipes })
        //     })
        // } else {
        //     Recipe.all(function(recipes) {
        //         return res.render("site/recipes", { recipes })
        //     })
        // }

        let { filter, page, limit } = req.query
        console.log(page)

        page = page || 1
        limit = limit || 6
        let offset = limit * (page -1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(recipes) {          
                const pagination = {                    
                    total: Math.ceil(recipes[0].total / limit),
                    page
                }
                return res.render("site/recipes", { recipes, pagination, filter })                
            }
        }

        Recipe.paginate(params)
    },
    showRecipes(req, res) {
        Recipe.find(req.params.id, function(recipe){
            if (!recipe) return res.send("Recipe not found!")

            return res.render('site/show', { recipe })            
        })
    }
}