import { loginFailure, loginStart, loginSuccess, loginOut, loginRemoveError } from "./userRedux"
import { publicReq } from "../requestMethods"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicReq.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}
export const logout = async (dispatch) => {
    dispatch(loginOut());
}
export const register = async (dispatch, user) => {
    try {
        await publicReq.post("/auth/register", user);
        const { email, ...newUser} = user;
        login(dispatch, newUser);
    } catch (err) {
        dispatch(loginFailure());
        console.log(err);
    }
}
export const removeError = async (dispatch) => {
    dispatch(loginRemoveError());
}