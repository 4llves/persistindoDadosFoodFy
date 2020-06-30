const Recipe = require('../../models/Recipe')
const { date } = require('../../lib/utils')

module.exports = {
    index(req, res) {

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
                return res.render("admin/recipes/index", { recipes, pagination, filter })                
            }
        }

        Recipe.paginate(params)      
    },
    create(req, res) {
        
        Recipe.chefsSelectOptions(function(options){
            return res.render('admin/recipes/create', { chefOptions: options })            
          })
    },
    post(req, res) {                
        const keys = Object.keys(req.body)        
        for (key of keys) {            
            if (req.body[key] == "") {
                console.log(req.body)
                return res.send('Please, fill all fields!')
            }
        }      

        Recipe.create(req.body, function(recipe){
            return res.redirect(`/admin/recipes/index/${recipe.id}`)            
        })
    },
    show(req, res) {
        
        Recipe.find(req.params.id, function(recipe){
            if (!recipe) return res.send("Recipe not found!")            

            recipe.created_at = date(recipe.created_at).format
            
            return res.render('admin/recipes/show', { recipe })
            
        })
    },
    edit(req, res) {
        
        Recipe.find(req.params.id, function(recipe){
            if (!recipe) return res.send("Recipe not found!")            

            recipe.created_at = date(recipe.created_at).format
            
            Recipe.chefsSelectOptions(function(options){
                return res.render('admin/recipes/edit', { recipe, chefOptions: options })                
            })
        })
    },
    put(req, res) {
        
        Recipe.update(req.body, function(){
            return res.redirect(`/admin/recipes/index/${req.body.id}`)
        })
    },
    delete(req, res) {

        Recipe.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes/index`)
        })        
    }
}