import bannerImage from "../assets/studio.webp";

const Banner = () => {
  return (
    <div
      className="min-h-screen bg-red-300 flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl px-4 md:px-6 lg:px-8 py-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 drop-shadow-2xl mb-6">
          Book Your Studio. <br /> Create Without Limits.
        </h2>
        <p className="text-white text-lg text-justify">
          Find the perfect studio space for your next project with ease. Whether
          you're a photographer, musician, podcaster, or filmmaker, our seamless
          booking platform connects you with top-tier studios tailored to your
          creative needs. No hassle, no delays—just a smooth experience that
          lets you focus on what truly matters: bringing your vision to life.
          Start creating today!
        </p>
      </div>
    </div>
  );
};

export default Banner;
