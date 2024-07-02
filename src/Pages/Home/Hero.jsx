const Hero = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen h-[85vh] flex items-center flex-col justify-center text-primary bg-hero-background p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-4">GREEN DERMATOLOGY</h1>
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-center mb-4">CONFIDENCE THROUGH HEALTHY SKIN</h3>
      <div className="flex justify-center items-center flex-col space-y-2 text-center">
        <h6 className="text-lg md:text-xl lg:text-2xl">Resolving dermatological concerns and prioritizing</h6>
        <h6 className="text-lg md:text-xl lg:text-2xl">the overall well-being and self-assurance of our patients</h6>
      </div>
    </div>
  )
}

export default Hero
