// import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react';
import Rhelmet from '../../components/Helmet/Rhelmet';

export const Login = (props) => {
  return (
    <Fragment>
      <Rhelmet title="Signup" description="Signup Description" />
      <div>Login</div>
    </Fragment>
  )
}

// Login.propTypes = {
//   second: PropTypes.third
// }

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)