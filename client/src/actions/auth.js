import React from 'react'
import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
try {
    /// log in user

    navigate('/')
} catch (error) {
    console.log(error)
}
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        /// sign up user
    
        navigate('/')
    } catch (error) {
        console.log(error)
    }
    }
