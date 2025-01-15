import HeroImage from "../../assets/images/ai-generated-8718795_1280.png"


const Hero = () => (
    <div className="bg-gradient-to-r from-red-500 to-pink-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center animate-fadeIn">
          <h1 className="text-5xl font-bold text-white mb-4 max-w-md leading-tight">
            Otic Tech 
            Technologies 
            Limited
          </h1>
          <p className="text-white text-xl max-w-lg leading-relaxed">
            Software Development, ICT consultancy and ICT training at its peak. 
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img 
            src={HeroImage}
            alt="Technology illustration" 
            className="w-3/4 md:w-full max-h-96 object-contain animate-popOut"
            />
        </div>
      </div>
    </div>
  );


  export default Hero