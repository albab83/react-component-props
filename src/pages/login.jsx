import React from "react"
import AuthLayouts from "../component/Layouts/AuthLayouts"
import FormLogin from "../component/Fragments/FormLogin"

const LoginPage = () => {
    return (
        <AuthLayouts title="Login " type="login">
            <FormLogin></FormLogin>
        </AuthLayouts>
    )
}

export default LoginPage