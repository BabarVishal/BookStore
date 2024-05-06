import React from 'react'
import './Home.css'
function Home() {
  return (
  <>
 <div className="home-page ">
            <div className="right">
                <h1>Hello, Welcome here to learn something <span>new everyday!!!</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus, vitae nobis ipsum nam molestias corrupti sed? Aspernatur illo delectus rem nemo.</p>
                <input type="text" placeholder="Search..." />
                <br />
                <button>Search</button>
            </div>
            <div className="left">
                <img src="https://www.freepnglogos.com/uploads/book-png/big-open-book-outline-transparent-34.png" alt="Left Image" />
            </div>
        
        </div>
  </>
  )
}

export default Home
