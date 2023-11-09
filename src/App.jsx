import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/our-product" element={<OurProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/about">About Us</a>
          </li>

          <li>
            <a href="/our-product">Our Product</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  )
}

function AboutUs() {
  return (
    <div>
      <Header />
      <h1>About Us</h1>
    </div>
  )
}

function OurProduct() {
  return (
    <div>
      <Header />
      <h1>Our Product</h1>
    </div>
  )
}
