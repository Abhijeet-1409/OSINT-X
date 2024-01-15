import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Feature from "../components/Feature";
import Features from "./Features";
import Footer from "../components/Footer";

function Home({}) {
  return (
    <>
      <div
        className="image-container"
        style={{
          display: "flex",
          color: "white",
          backgroundColor: "black",
          padding: " 5rem 15rem",
        }}
      >
        <div
          className="heading-text"
          style={{ padding: "0px 100px 10px 0px", width: "800px" }}
        >
          <h1>
            <span
              style={{
                color: "#efefef",
                fontSize: "3rem",
                fontWeight: "700",
              }}
            >
              Search Engine for the Internet of Everything
            </span>
          </h1>
          <h2>
            <span
              style={{
                color: "#bababa",
                fontSize: "1.5rem",
                fontWeight: "300",
              }}
            >
              OSINT-X is a search engine for Internet-connected
              devices. Discover how Internet intelligence can help you make
              better decisions.
            </span>
          </h2>
        </div>
        <div
          className="image"
          style={{ padding: "0 8rem 0 0", height: "360px", width: "760px" }}
        >
          <img
            src="https://www.shodan.io/static/img/pingmap-955f4777.png"
            alt=""
          />
        </div>
      </div>
      {/* <div className="home">
        <h1 className="main-title">Osintx</h1>
        <p>
          Open Source Intelligence, commonly known as OSINT, refers to the
          process of collecting and analyzing information from publicly
          available sources to gather insights and make informed decisions. In
          an era dominated by vast amounts of digital data, OSINT has become a
          crucial tool for individuals, organizations, and governments alike. It
          encompasses a wide range of sources, including social media platforms,
          websites, public records, and news articles. OSINT is not only used
          for security and intelligence purposes but also plays a significant
          role in cybersecurity, business intelligence, and investigative
          journalism. The strength of OSINT lies in its ability to provide
          real-time and relevant information, offering a comprehensive
          understanding of various subjects. However, the ethical and legal
          considerations of OSINT are paramount, as practitioners must navigate
          the fine line between accessing publicly available information and
          respecting privacy boundaries. As technology continues to advance, the
          importance of OSINT in shaping strategic decisions and mitigating
          risks is likely to grow, making it an indispensable component of the
          information landscape.
        </p>
      </div> */}
        <div className="section">
          <div className="info">
            <h2>PDF Analysis Made Easy</h2>
            <p>
              Within 5 minutes of using Shodan Monitor you will see what you
              currently have connected to the Internet within your network range
              and be setup with real-time notifications when something
              unexpected shows up.
            </p>
          </div>
          <div className="img">
            <img
              src="https://www.shodan.io/static/img/dashboard-d88e750b.png"
              alt=""
            />
          </div>
        </div>

        <div className="section">
          <div className="img">
            <img
              src="https://www.shodan.io/static/img/dashboard-d88e750b.png"
              alt=""
            />
          </div>
          <div className="info">
            <h2>Username Checker</h2>
            <p>
              Within 5 minutes of using Shodan Monitor you will see what you
              currently have connected to the Internet within your network range
              and be setup with real-time notifications when something
              unexpected shows up.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="info">
            <h2>URL Validator</h2>
            <p>
              Within 5 minutes of using Shodan Monitor you will see what you
              currently have connected to the Internet within your network range
              and be setup with real-time notifications when something
              unexpected shows up.
            </p>
          </div>
          <div className="img">
            <img
              src="https://www.shodan.io/static/img/dashboard-d88e750b.png"
              alt=""
            />
          </div>
        </div>
    
      <div className=""style={{alignItems:"center" ,textAlign:"center",marginTop:"70px"}}>
        <div className="">
          <h2 style={{backgroundColor:"#222",color:"#fff",fontWeight:"700",padding:"6px 5px",margin:" 0 600px"}}>Comphrensive Ip Locator</h2>
          <p>
            Within 5 minutes of using Shodan Monitor you will see what you
            currently have connected to the Internet within your network range
            and be setup with real-time notifications when something unexpected
            shows up. Within 5 minutes of using Shodan Monitor you will see what you
            currently have connected to the Internet within your network range
            and be setup with real-time notifications when something unexpected
            shows up. Within 5 minutes of using Shodan Monitor you will see what you
            currently have connected to the Internet within your network range
            and be setup with real-time notifications when something unexpected
            shows up. Within 5 minutes of using Shodan Monitor you will see what you
            currently have connected to the Internet within your network range
            and be setup with real-time notifications when something unexpected
            shows up. Within 5 minutes of using Shodan Monitor you will see what you
            currently have connected to the Internet within your network range
            and be setup with real-time notifications when something unexpected
            shows up.
          </p>
        </div>
        <div className="">
          <img
            src="https://www.shodan.io/static/img/dashboard-d88e750b.png"
            alt=""
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
