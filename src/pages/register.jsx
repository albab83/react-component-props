import AuthLayouts from "../component/Layouts/AuthLayouts"
import FormRegister from "../component/Fragments/FormRegister"

const RegisterPage = () => {
    return (
        <AuthLayouts tittle="Register" type="register">
            <FormRegister/>
        </AuthLayouts>
    )
}

export default RegisterPage