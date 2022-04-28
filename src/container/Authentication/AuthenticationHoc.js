import React, { Component, memo } from 'react'
import { createStructuredSelector } from 'reselect';
import makeSelectGlobal from '../../redux/redux/global/selectors';
import { connect } from 'react-redux';
import compose from '../../middleware/Authorization/Authorization';

export default function AuthenticationHoc(ComposedComponent) {
  class HOC extends Component {
    state = {
      loading: true,
    };
    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }



    renderLoading = () => {
      // if (this.state.loading) return <Spinners />;
      return <ComposedComponent {...this.props}  />;
    };
    // shouldComponentUpdate(nextProps, nextState) {
    //   const myProps = this.props !== nextProps;
    //   const myState = this.state !== nextState;
    //   return myProps || myState;
    // }
    render() {
      return <>{this.renderLoading()}</>;
    }
  }
  const mapStateToProps = createStructuredSelector({
    global: makeSelectGlobal(),
  });

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }

  const withConnect = connect(mapStateToProps, mapDispatchToProps);

  return compose(withConnect, memo)(HOC);
}
