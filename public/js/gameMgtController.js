(function(window)
{
	/* ---------------------------------- PROPERTIES ---------------------------------- */	
	var _this;
	var _clickHandler;
	var _listContainer;
	var _emrClickHandler;
	var _emrContainer;
	
	var _clickBlankCity;	
	/* ---------------------------------- CONSTRUCTOR ---------------------------------- */
	function gameMangeController(){
		_this = this;
		_clickHandler = $(".hrLink");
		_listContainer = $(".listCont");
		
		_emrClickHandler = $(".emrClick");
		_emrContainer = $(".BlankCity");		
		
		_this.initialAction = initialAction;		
	}	
	/* ---------------------------------- PUBLIC HANDLERS ---------------------------------- */
	function initialAction(){
		onHoverContainer();
		onClickEmerCity();		
	}
			
	function onHoverContainer(){
		_clickHandler.bind(hoverEvent,function(){
			$(this).find(_listContainer).stop().toggle(300);
		})
	}
	function onClickEmerCity(){
		_emrClickHandler.bind(clickEvent,function(){
			_emrContainer.fadeIn();
		})
	}	
	/* ---------------------------------- END ---------------------------------- */
	window.gameMangeController = gameMangeController;
}(window));
