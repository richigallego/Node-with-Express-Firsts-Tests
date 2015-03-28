var homeController = function(server){
	console.log('homeController listo');

	server.route('/')

		.get(function (req,res){
			//res.send('Hola Richi');
			res.render('index');
		});
};

module.exports = homeController;