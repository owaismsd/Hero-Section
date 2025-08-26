import React from "react";
import Navbar from "./components/Navbar";
import women from "./assets/she.jpg";
function App() {
  return (
    <>
      <Navbar />

      <div className="containers">
        <div className="left">
          <div className="left-content">
            <div className="left-span-1">
              <span>👍</span>
              <span>🎁</span>
              <span>🎨</span>
              <span>🎟</span>
            </div>

            <h1 className="text-secondary display-4">
              What is the next
              <span className="adventure">
                <br /> adventure
              </span>
            </h1>
            <span className="slashes text-secondary">
              //////////////////////
            </span>

            <p className="text-secondary mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              magnam necessitatibus sunt dicta. Amet ullam quibusdam modi
              perferendis adipisci molestiae, molestias fugiat laboriosam. Aut
              totam perspiciatis dolorum. Corporis, sunt quis!
            </p>

            <button className="btn">MORE INFO</button>

            <div className="left-end-span mt-5">
              <span className="text-secondary">Lorem Ipsum dolor sit</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={women} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
