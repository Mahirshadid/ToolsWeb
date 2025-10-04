import React from 'react'

const Finalpage = () => {
  return (
     <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col mt-14 text-center">
        <div className="card w-4/5 lg:card-side bg-base-100 shadow-sm">
          <figure className="w-full lg:w-3xs">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Connecting React Frontend with NodeJS Backend
            </h2>
            <ul className="text-left list-inside list-disc">
              <li>Create a server with Express</li>
              <li>Connecting front-end with back-end</li>
              <li>
                Creating a backend API for inserting data into database with
                Express and check with Postman
              </li>
              <li>
                Creating a backend API for deleting data from database with
                Express and check with Postman
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Source</button>
            </div>
          </div>
        </div>

        <div className="card w-4/5 lg:card-side bg-base-100 shadow-sm">
          <figure className="w-full lg:w-3xs">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Implement full Stack final project (Backend)
            </h2>
            <ul className="text-left list-inside list-disc">
              <li>Creating a server using Express</li>
              <li>Implement Error handling and validation mechanism</li>
              <li>Connecting with server and database</li>
              <li>Creating DOT.ENV file for responsive data</li>
              <li>Creating Rest API for insert and read Data</li>
              <li>
                Creating Rest API for Update and Delete Data from database
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Source</button>
            </div>
          </div>
        </div>

        <div className="card w-4/5 lg:card-side bg-base-100 shadow-sm">
          <figure className="w-full lg:w-3xs">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Implement full Stack final project (Front-end)
            </h2>
            <ul className="text-left list-inside list-disc">
              <li>Creating a React Project with Vite</li>
              <li>Initiate React Router DOM</li>
              <li>
                Create Multiple Page like Navigation, Home, Registration and
                Login Page, Products, Services, Reviews, Upcoming Product,
                Contact, and Footer
              </li>
              <li>
                Design Navigation page using Tailwind and React Router DOM
              </li>
              <li>Design Home, Reviews, Contact, and Footer page</li>
              <li>Design Registration and Login Page with Firebase</li>
              <li>Design a form for inserting Data and send data to server</li>
              <li>Design Products Page and fetching Data from server</li>
              <li>
                Design a Page for single product and fetching single product
              </li>
              <li>
                Implement delete operation for deleting data from database
              </li>
              <li>Design a Page for updating products</li>
              <li>Design an Order Page</li>
              <li>Deploy project in Vercel</li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Source</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finalpage