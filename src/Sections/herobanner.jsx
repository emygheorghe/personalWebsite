import OutlinedFigure from '../Assets/OutlinedFigure';

const HeroBanner = ({ className = '', ...props }) => {
  return (
    <section className={`pb-4 pt-4 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-white text-">Hello, I'm Emil Gheorghe</h1>
          <p className=" text-white mb-6">
            I'm a frontend developer crafting beautiful, fast, and accessible
            websites.
          </p>
        </div>

        {/* Right: SVG Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <OutlinedFigure />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
