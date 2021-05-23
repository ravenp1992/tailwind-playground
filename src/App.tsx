import React from 'react';

const App = () => {
  return (
    <div className="App grid lg:grid-cols-2 bg-bluegray-100 2xl:grid-cols-5">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img className="h-10 mt-6" src="assets/workcation_logo.svg" alt="Workcation" />
          <img
            className="object-center mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
            src="assets/beach-work.jpeg"
            alt="Human workcationing on the beach"
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-700 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhre. <span className="text-indigo-500 lg:block">Take advantage of it.</span>
          </h1>

          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather
            even when you're not on vacation.
          </p>

          <div className="mt-4 sm:mt-6">
            <a
              className="px-5 py-3 mt-3 text-sm font-semibold tracking-wider uppercase bg-indigo-600 rounded shadow-lg text-indigo-50 hover:bg-indigo-500 transform hover:-translate-y-1 transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 divide-indigo-600"
              href="#"
            >
              Book your escape
            </a>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block 2xl:col-span-3">
        <img
          className="absolute inset-0 object-cover object-center w-full h-full"
          src="assets/beach-work.jpeg"
          alt="Human workcationing on the beach"
        />
      </div>
    </div>
  );
};

export default App;
