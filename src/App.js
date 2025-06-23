import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "./logo.png";
import uc from "./uc.png";
import logo_sm from "./logo-sm.png";
import ex from "./ex.png";
import {
  FaAddressBook,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMotorcycle,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";

function Navigation() {
  const getActiveClass = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <nav>
      <NavLink to="/" end className={getActiveClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={getActiveClass}>
        About
      </NavLink>
      <NavLink to="/menu" className={getActiveClass}>
        Menu
      </NavLink>
      <NavLink to="/reservation" className={getActiveClass}>
        Reservations
      </NavLink>
      <NavLink to="/online" className={getActiveClass}>
        Order Online
      </NavLink>
      <NavLink to="/login" className={getActiveClass}>
        Login
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} alt="logo" className="logo" />
        <Navigation />
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<UC />} />
          <Route path="/menu" element={<UC />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/online" element={<UC />} />
          <Route path="/login" element={<UC />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

function Home() {
  const navigate = useNavigate();

  function handleMove() {
    navigate("/reservation");
  }

  return (
    <div className="wrapper">
      <div className="intro">
        <div className="wrapper-cover">
          <div className="info">
            <h1>Little Lemon</h1>
            <h2>New York</h2>
            <p>
              Welcome to Little Lemon, a charming boutique hotel where timeless
              comfort meets modern design, and every stay is infused with
              warmth, character, and a refreshing touch of citrus-inspired
              style.
            </p>
            <button onClick={handleMove}>Reserve a table</button>
          </div>
          <img src={ex} alt="sushi" />
        </div>
      </div>
      <div className="home-cover">
        <div className="first">
          <h2>This week specials!</h2>
          <ul>
            <li>
              <img src="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg" />
              <h5>
                <span>Strawberry Shortcake</span>
                <span>$9.99</span>
              </h5>
              <p>
                Strawberry Shortcake is a delightful dessert that layers sweet,
                juicy strawberries over fluffy shortcake biscuits, topped with a
                generous dollop of fresh whipped cream for a light and
                irresistible treat.
              </p>
              <button>
                Order a delivery <FaMotorcycle />
              </button>
            </li>
            <li>
              <img src="https://images.arla.com/recordid/E9373688-F4AD-4DD7-930AA101A8FBB9D0/grekisk-sallad.jpg?width=1200&height=630&mode=crop&format=jpg" />
              <h5>
                <span>Greek Salad</span>
                <span>$14.49</span>
              </h5>
              <p>
                Greek salad is a fresh and vibrant dish that combines juicy
                tomatoes, crisp cucumbers, red onions, olives, and creamy feta
                cheese, all drizzled with olive oil and sprinkled with oregano
                for a true taste of the Mediterranean.
              </p>
              <button>
                Order a delivery <FaMotorcycle />
              </button>
            </li>
            <li>
              <img src="https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg" />
              <h5>
                <span>Strawberry Shortcake</span>
                <span>$9.99</span>
              </h5>
              <p>
                Pizza is a beloved classic featuring a crispy, golden crust
                topped with rich tomato sauce, melted cheese, and your choice of
                flavorful toppings, baked to perfection for a warm, satisfying
                meal.
              </p>
              <button>
                Order a delivery <FaMotorcycle />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="second">
        <div className="second-content">
          <h2>What people say about us!</h2>
          <ul>
            <li>
              <img src="https://images.mykhel.com/webp/images/football/players/4/19054.jpg?v=4" />
              <h2>Lionel Messi</h2>
              <div>
                <Rating initialValue={5} size={15} />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  laboris nisi ut aliquip ex ea commodo consequat.""
                </p>
              </div>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IR2Q3szlNtzNx9t5MBa5jU_XFDRNr6Vg6Q&s" />
              <h2>Cristiano Ronaldo</h2>
              <div>
                <Rating initialValue={5} size={15} />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  laboris nisi ut aliquip ex ea commodo consequat.""
                </p>
              </div>
            </li>
            <li>
              <img src="https://astrolinked.com/media/avatars/126/resized/500/al126-1.jpg" />
              <h2>Michael Jackson</h2>
              <div>
                <Rating initialValue={5} size={15} />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  laboris nisi ut aliquip ex ea commodo consequat.""
                </p>
              </div>
            </li>
            <li>
              <img src="https://chartwellspeakers.b-cdn.net/wp-content/uploads/2024/08/roger-federer-2017-wimbledon.webp" />
              <h2>Roger Federer</h2>
              <div>
                <Rating initialValue={5} size={15} />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  laboris nisi ut aliquip ex ea commodo consequat.""
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="third">
        <div className="left">
          <h1>Little Lemon</h1>
          <h2>New York</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. There are
            many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If
            you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything embarrassing hidden in the middle of text. All
            the Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable.
          </p>
        </div>
        <div className="right">
          <img src="https://www.baker.edu/wp-content/uploads/famous-female-chefs.jpg" />
          <img src="https://colonialdomestics.com/wp-content/uploads/2023/03/a-successful-chef.jpg" />
        </div>
      </div>
    </div>
  );
}

function Reservation() {
  return (
    <div className="reserve">
      <h1>Reservations Page</h1>
      <BookingForm />
    </div>
  );
}

function UC() {
  return (
    <div className="uc">
      <img src={uc} alt="uc" />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="cover">
        <img src={logo_sm} alt="logo-sm" />
        <div className="site">
          <h5>SITEMAP</h5>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="contact">
          <h5>SITEMAP</h5>
          <ul>
            <li>
              <FaAddressBook />
              123 Meadowpaw Lane, NY 10203
            </li>
            <li>
              <FaPhoneAlt />
              (555) 983-2277
            </li>
            <li>
              <IoMdMail />
              contact@littlekemonlhottel.com
            </li>
          </ul>
        </div>
        <div className="connect">
          <h5>CONNECT WITH US</h5>
          <ul className="social">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const times = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const occasions = ["Birthday", "Anniversary", "Other"];

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests || formData.guests < 1 || formData.guests > 20)
      newErrors.guests = "Guests must be between 1 and 20";
    if (!formData.occasion) newErrors.occasion = "Occasion is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/confirmed-booking", { state: { fromForm: true } });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>

      <div>
        <label>Time:</label>
        <select name="time" value={formData.time} onChange={handleChange}>
          <option value="">Select time</option>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <span className="error">{errors.time}</span>}
      </div>

      <div>
        <label>Number of Guests:</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="20"
        />
        {errors.guests && <span className="error">{errors.guests}</span>}
      </div>

      <div>
        <label>Occasion:</label>
        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="">Select occasion</option>
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
        {errors.occasion && <span className="error">{errors.occasion}</span>}
      </div>

      <button type="submit">Make your reservation</button>
    </form>
  );
}

function ConfirmedBooking() {
  const location = useLocation();

  if (!location.state?.fromForm) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="confirmed">
      <h1>Your Reservation is Confirmed 🎉</h1>
      <p>You will receive an email with all the details</p>
    </div>
  );
}
