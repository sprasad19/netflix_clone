import React, { Fragment } from "react";
import { connect } from "react-redux";
import Rhelmet from "../../components/Helmet/Rhelmet";

export const Signup = (props) => {
  return (
    <Fragment>
      <Rhelmet title="Signup" description="Signup Description" />s
      <div>Signup</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
