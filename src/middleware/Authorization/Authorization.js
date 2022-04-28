import React, { memo } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { setLogout } from "../../redux/redux/global/action";
import {
    makeSelectAccessToken,
    makeSelectUserDetails
} from "../../redux/redux/global/selectors";
import { checkToken } from "../../utils/axios";
function Authorization({
  token,
  dispatch,
  accessRoles = [],
  Component,
  history,
  ...props
}) {
  const match = useParams();
  
  

  if (!checkToken(token)) {
    dispatch(setLogout());
    return <Redirect to="/" />;
  }
  return (
    <Component
      {...props}
      history={history}
      match={match}
      location={history.location}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectAccessToken(),
  user: makeSelectUserDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRouter, memo)(Authorization);
