webpackJsonp([9],{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	var React = __webpack_require__(6);
	var ReactRouter = __webpack_require__(1);
	var Link = ReactRouter.Link;
	
	var Dashboard = React.createClass({displayName: 'Dashboard',
	
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        React.DOM.h1(null, "Dashboard!"),
	        React.DOM.ul(null, 
	          React.DOM.li(null, Link( {to:"inbox"}, "Inbox"))
	        ),
	        this.props.activeRoute
	      )
	    );
	  }
	});
	
	module.exports = Dashboard;


/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXhhbXBsZXMvcGFydGlhbC1hcHAtbG9hZGluZy9kYXNoYm9hcmQuanMgLi9+L2pzeC1sb2FkZXIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdFJvdXRlciA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvbWFpbicpO1xudmFyIExpbmsgPSBSZWFjdFJvdXRlci5MaW5rO1xuXG52YXIgRGFzaGJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRGFzaGJvYXJkJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgXCJEYXNoYm9hcmQhXCIpLFxuICAgICAgICBSZWFjdC5ET00udWwobnVsbCwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIExpbmsoIHt0bzpcImluYm94XCJ9LCBcIkluYm94XCIpKVxuICAgICAgICApLFxuICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZVJvdXRlXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGFzaGJvYXJkO1xuIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrLW1vZHVsZTovLyJ9