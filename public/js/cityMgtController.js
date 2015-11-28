(function(window)
{
	/* ---------------------------------- PROPERTIES ---------------------------------- */	
	var _this;
	var _oneMinInterval;
	//var _flag;
	var _countValue;	
	/* ---------------------------------- CONSTRUCTOR ---------------------------------- */
	function cityMangeController(){
		_this = this;

		_oneMinInterval = 60*1000;
		//_flag = false;	
		
		_countSel = $(".countClass");
		_this.initialAction = initialAction;
		_this.getCounterResVal = getCounterResVal;			
	}	
	/* ---------------------------------- PUBLIC HANDLERS ---------------------------------- */
	function initialAction(){		
		getCounterValue();
	}	
	function getCounterValue(){		
		_jsonParseController = new jsonParseController();
		_jsonParseController.initialAction();
	}
	function getCounterResVal(_counterValue){
		_countSel.text(_counterValue);
		setInterval(countDownHandler,_oneMinInterval);

		function countDownHandler(){
			_counterValue +=1;
			_countSel.text(_counterValue);
			_jsonParseController.counterValueParsing(_counterValue);			
		}
	}
	
	
	/* ---------------------------------- END ---------------------------------- */
	window.cityMangeController = cityMangeController;
}(window));
