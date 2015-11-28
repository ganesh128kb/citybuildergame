//var url = require('url') ;
module.exports = function(app,connection){		
/*-------- Home Page --------*/
	app.get('/',function(req,res){			
		res.render('game_management.html');
	})

	app.get('/city_management',function(req,res){			
		res.render('city_management.html');
	})	

	app.get('/counterValue',function(req,res){		
		var querySel = "select * from tblcounter";
		console.log(querySel)
			connection.query(querySel,function(err, rows, fields){
				if (err){
					console.log(err);
					throw err;
				}
				var finalresponse = JSON.stringify(rows);
				res.setHeader('Content-Type', 'application/json');
				res.send(finalresponse);		
			})
	})

	app.get('/counterParsing',function(req,res){		
		var reqCounter = req.query['countvalue'];
		var qqUpdate = "update tblcounter set txtCounter='"+reqCounter+"',date=NOW()";								
			connection.query(qqUpdate,function(err, rows, fields){
			if (err){
				console.log(err);
				throw err;
			}
			else{				
					res.send('success');
				}
		})
	})

	
	

	app.get('*',function(req,res){		
		res.send('404 Error !!!');
	})

	
}