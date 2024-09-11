import img from './assets/picture/ITL-3.jpg'

function Hero() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img})`
        }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              We Build Stable Software Product
            </h1>
            <p className="mb-5">
              ITLogiko is an professional IT company providing website,
              software, web application, mobile application and value added
              services that endeavor on high proficiency, on-time delivery and
              cost effectiveness. We create things, that works.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
