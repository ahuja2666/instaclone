import "./landingpage.css"
import { Link } from "react-router-dom"

const LandingPage = () => {

  return (
    <div className="landing">
      <img className="landingimg" src="./download.png" alt="ppp" />
      <p className="routeheading">Sell All Posts</p>
      <Link to="/posts" className="routebutton">Enter</Link>
    </div>
  )
};

export default LandingPage;