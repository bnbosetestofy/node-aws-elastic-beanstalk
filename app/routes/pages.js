const router = require('express').Router()



router.get('/',function(req,res){
	res.render('index', {
		title:'Shopping Cart New'
	});
})



//Exports

module.exports = router;