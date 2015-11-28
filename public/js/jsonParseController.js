(function(window)
{
	/* ---------------------------------- PROPERTIES ---------------------------------- */	
	var _this;
	var _counterPost;
	/* ---------------------------------- CONSTRUCTOR ---------------------------------- */
	function jsonParseController(){
		_this = this;
		_this.initialAction = initialAction;		
		_this.counterValueParsing = counterValueParsing;
	}	
	/* ---------------------------------- PUBLIC HANDLERS ---------------------------------- */
	function initialAction(){		
		_countQuery = _domainPath+'/counterValue';
			$.ajax({
				url:_countQuery,
				type:'GET',
				success: function(response){
					$.each(response, function(index, value){					
						var _counterValue =  JSON.parse(value.txtCounter);							
						_cityMangeController.getCounterResVal(_counterValue);

					})
					},error: function(error){
						console.log(error)				
				}
			});	
	}
	function counterValueParsing(_counterValue){
		_countQuery = _domainPath+'/counterParsing?countvalue='+_counterValue;
			$.ajax({
				url:_countQuery,
				type:'GET',
				success: function(response){
						console.log('Success');
					},error: function(error){
						console.log(error)				
				}
			});
	}
	
	/* ---------------------------------- END ---------------------------------- */
	window.jsonParseController = jsonParseController;
}(window));
