import React from "react";

class Button extends React.Component {
  render() {
    return <div>
       <button
    type="button"
    className={`inline-block rounded ${this.props.varian} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}>
    {this.props.children}
  </button>

    </div>
  }
}
function App() {
  return (
    <div className="flex justify-center bg-green-700 min-h-screen items-center gap-3">
      <Button varian="bg-slate-700">login</Button>
      <Button varian="bg-red-700">logout</Button>
      <Button varian="bg-blue-700">buy now</Button>
      <Button varian="bg-yellow-700">add to cart</Button>
    </div>
  );
}

export default App;
