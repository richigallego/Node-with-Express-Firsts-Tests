var homeController = function(server){
	console.log('homeController listo');

	server.route('/')

		.get(function (req,res){
			res.send('Hola Richi');
		});
};

module.exports = homeController;