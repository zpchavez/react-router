var React = require('react');
var Promise = require('es6-promise').Promise;

/**
 * A mixin for components that need to fetch data from the server.
 *
 * Example:
 *
 *   var Component = React.createClass({
 *     
 *     mixins: [ Router.DataProvider ],
 *
 *     statics: {
 *     
 *       // This hook is used to fetch data that will be used as the "data"
 *       // state variable. It may return a promise if it needs to fetch
 *       // data asynchronously (i.e. make a network request).
 *       getData: function (params, query) {
 *         return getUserFromTheServer(params.userID);
 *       }
 * 
 *     },
 *   
 *     render: function () {
 *       if (!this.state.data)
 *         return <div>Loading...</div>;
 *   
 *       return <div>Hello {this.state.data.username}</div>;
 *     }
 *   
 *   });
 */
var DataProvider = {

  statics: {

    _getData: function (params, query) {
      if (!this.getData)
        throw new Error('Router.DataProvider needs a getData static method');

      return Promise.resolve(this.getData(params, query));
    }

  },

  propTypes: {
    initialData: React.PropTypes.object
  },

  getInitialState: function () {
    return {
      data: this.props.initialData
    };
  },

  componentDidMount: function () {
    if (this.state.data == null)
      this.type._getData(this.props.params, this.props.query).then(this._updateData);
  },

  _updateData: function (data) {
    if (!this.isMounted())
      return;

    if (this.updateData) {
      this.updateData(data);
    } else {
      this.setState({ data: data });
    }
  }

};

module.exports = DataProvider;
