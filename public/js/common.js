/* ------------------------- GLOBAL PROPERTIES ------------------------- */
var _body;
var _html;
var _window = $(window);
var _document = $(document);

var _windowWidth = _window.width();
var _windowHeight = _window.height();
var clickEvent = ((document.ontouchstart!==null)?'click':'touchstart');
var hoverEvent = ((document.ontouchstart!==null)?'hover':'touchstart');

_document.ready(documentReadyHandler);
_window.load(windowLoadHandler);
_window.resize(windowResizeHandler);

var _domainPath = "https://citybuildergame.herokuapp.com";
/* ------------------------- EVENT HANDLERS ------------------------- */
function documentReadyHandler(){
	_gameMangeController = new gameMangeController();
	_gameMangeController.initialAction();

	_cityMangeController = new cityMangeController();
	_cityMangeController.initialAction();		
}

function windowLoadHandler(){}
function windowResizeHandler(){}