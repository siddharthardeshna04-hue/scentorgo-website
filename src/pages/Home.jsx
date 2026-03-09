const Home = () => {
  return (
    // Change min-h-[60vh] to min-h-[80vh]
    <section
      id="home"
      className="relative min-h-[90vh] pt-20 flex flex-col justify-center items-center text-center px-6 bg-[url('/scentorgo.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Dark overlay to make the text readable against the busy image */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Added relative and z-10 to bring the content above the overlay */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Adjusted text color to a lighter green and added a drop shadow */}
        <p className="font-serif text-2xl md:text-3xl text-green-400 font-bold tracking-widest uppercase mb-4 drop-shadow-md">
          Welcome to Scentorgo Overseas
        </p>

        {/* Changed main text to white for high contrast */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Live Naturally, <br />
          <span className="text-green-400">Live Herbal</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="bg-green-700 hover:bg-green-600 transition px-8 py-3.5 rounded-full text-white font-semibold shadow-lg shadow-green-900/50"
          >
            Explore Products ➔
          </a>

          {/* Updated this button with a modern "glass" effect for background images */}
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/50 transition px-8 py-3.5 rounded-full text-white font-semibold shadow-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
