import './index.css';
// import React from 'react';
import Canvas from './canvascomponent';
import data from './data';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, [])
  return (
    <>
      <div className="w-full relative min-h-screen text-white">
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} />
        ))}

        <div className='w-full relative z-[1]  h-screen'>
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">thirtysixstudios</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer  w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2]">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>



          </div>
        </div>
      </div>





    </>

  );
}

export default App;

