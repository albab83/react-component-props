import FormLogin from './component/Fragments/FormLogin';

function App() {


  return (
    <div className="flex justify-center min-h-screen items-center gap-3">
      <div className='w-full max-w-xs'>
        <h1 className='text-3xl font-bold mb-2  text-blue-500 '>Login</h1>
        <p className='font-medium text-slate-500 mb-8 '>
          Welcome, please enter your details 
        </p>
        <FormLogin />
      </div>
    </div>
  );
}

export default App;