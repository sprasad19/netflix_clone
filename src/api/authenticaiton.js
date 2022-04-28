import axios from "../utils/axios";

export function loginApi(userDetails) {
  return axios.post("/login", userDetails);
}
export function signupApi(userDetails) {
  return axios.post("/signup", userDetails);
}
export function reloginApi(authData) {
  return axios.post("/re-login", authData);
}
export function emailVerificationApi(emailVerificationData) {
  return axios.post("/email-verification", emailVerificationData);
}
export function otpVerificationApi(details) {
  return axios.post("/otp-verification", details);
}
export function mobileLogin(details) {
  return axios.post("/mobile-verification", details);
}
