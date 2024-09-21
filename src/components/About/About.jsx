import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Hey! everyone, Amit Gulia there  
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Seeking an entry level position in the field of Computer Science to leverage my technical skills and contribute to innovative projects. To Work in an environment where my skill and knowledge reflects the growth of the company and enhance my knowledge as well as experience.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Looking forward to work with an organization that offers ample 
                    opportunity to explore and utilize my technical skills while making meaningful 
                    contributions towards achieving organizational goals.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
