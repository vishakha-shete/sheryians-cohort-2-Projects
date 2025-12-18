
function Navbar() {
  return (
    <main>
      <logo>
        <h5><i class="ri-circle-fill"></i> <i class="ri-circle-fill"></i> <i class="ri-circle-fill"></i></h5>
        <ul>

          <li><i class="ri-terminal-box-line"></i></li>
          <li><i class="ri-skip-left-fill"></i></li>
          <li><i class="ri-skip-right-fill"></i></li>
          <li><i class="ri-mobile-download-fill"></i></li>
          <li><i class="ri-reset-right-line"></i></li>

        </ul>

        <button></button>
        <button><i class="ri-battery-share-line"></i> <i class="ri-add-line"></i> <i class="ri-file-line"></i></button>
      </logo>
      <nav>
        <h2><i class="ri-service-fill"></i></h2>
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>

        <button>Book a Call ↗</button>
      </nav>
    </main>

  )
}

function Hero() {
  return (
    <main>
      <div className="hero-wrapper">

        {/* BACKGROUND TEXT */}
        <h1 className="bg-text">Personal Portfolio</h1>
        <div className="hero">

          <div className="left">
            <div className="stats">
              <div>
                <h3>+200</h3>
                <p>Project completed</p>
              </div>
              <div>
                <h3>+50</h3>
                <p>Startup raised</p>
              </div>
            </div>

            <h1>Hello</h1>
            <span>It's D.Nova a design wizard</span>
          </div>

          <div className="right">
            <img src="https://i.pinimg.com/736x/9a/a0/bc/9aa0bc99645d66f1949ddefa3f700d0f.jpg" />
          </div>
        </div>

      </div>
    </main>

  )
}

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
