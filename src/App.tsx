import React, { ReactElement } from 'react';
import { DestinationCard } from './components/DestinationCard';
import { data } from './data/data';
import logo from './assets/workcation_logo.svg';
import heroImage from './assets/beach-work.jpg';

const App = (): ReactElement | null => {
  return (
    <div>
      <div className="App grid lg:grid-cols-2 bg-bluegray-100 2xl:grid-cols-5">
        <div className="max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10 mt-6" src={logo} alt="Workcation" />
            <img
              className="object-center mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
              src={heroImage}
              alt="Human workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold font-bold text-gray-700 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhre. <span className="text-indigo-500 lg:block">Take advantage of it.</span>
            </h1>

            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather
              even when you're not on vacation.
            </p>

            <div className="mt-4 sm:mt-6 space-x-2">
              <a className="shadow-lg btn btn-primary hover:-translate-y-1 transition transform" href="#">
                Book your escape
              </a>
              <a className="btn btn-secondary" href="#">
                Learn More
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
      <div className="max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
        <h2 className="text-xl text-gray-900">Popular destination</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {data.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
