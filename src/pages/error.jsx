import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold mb-2">Oops!</h1>
            <p className="text-slate-500">Sorry, an unexpected error has occurred.</p>
            <p className="text-slate-500">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage