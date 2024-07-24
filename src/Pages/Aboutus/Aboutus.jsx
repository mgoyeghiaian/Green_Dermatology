import { Helmet } from 'react-helmet';
import AboutUSImage from '/src/assets/Aboutuss.jpg';

const Aboutus = () => {
  return (
    <div className="bg-bg-main min-h-[85vh] flex flex-col lg:flex-row gap-4 p-5 justify-center items-center">
      <Helmet>
        <title>About Us - Green Dermatology</title>
        <meta name="description" content="Welcome to Green Dermatology, where compassionate care meets expertise. Our clinic is more than just a medical facility; we're your second family in the journey towards healthy, radiant skin." />
        <meta name="keywords" content="Green Dermatology, dermatology clinic, skin care, Delaware Dermatology, dermatologists" />
        <link rel="canonical" href="https://greendermatology.net/aboutus" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Green Dermatology",
              "url": "https://greendermatology.net/aboutus",
              "logo": "https://greendermatology.net/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-459-5010",
                "contactType": "Customer Service",
                "email": "kris@greenclinics.net"
              },
              "department": {
                "@type": "MedicalOrganization",
                "name": "Dermatology Department"
              },
              "description": "Welcome to Green Dermatology, where compassionate care meets expertise. Our clinic is more than just a medical facility; we're your second family in the journey towards healthy, radiant skin."
            }
          `}
        </script>
      </Helmet>
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-5 lg:mb-0">
        <img src={AboutUSImage} className="w-[80%] sm:w-[65%] lg:block hidden rounded-sm shadow-lg" alt="About Us" />
      </div>
      <div className="text-left gap-5 w-full lg:w-1/2 p-5 lg:p-0">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-tertiary">About Us</h1>
        <p className="text-base sm:text-lg mb-4 text-justify">Welcome to Delaware Dermatology, where compassionate care meets expertise. Nestled in the heart of Delaware, our clinic is more than just a medical facility; we&apos;re your second family in the journey towards healthy, radiant skin.</p>
        <p className="text-base sm:text-lg mb-4 text-justify">At Delaware Dermatology, our mission is simple: to provide unparalleled dermatological care tailored to individuals of all ages. Led by a team of board-certified doctors, each member of our staff is dedicated to delivering the highest standard of medical excellence while fostering an environment of warmth and understanding.</p>
        <p className="text-base sm:text-lg mb-4 text-justify">From routine check-ups to specialized treatments, we understand that every skin concern is unique. That&apos;s why we take the time to listen, educate, and empower our patients to make informed decisions about their skin health. Whether you&apos;re battling acne, seeking anti-aging solutions, or managing a chronic condition, we&apos;re here to support you every step of the way.</p>
        <p className="text-base sm:text-lg mb-4 text-justify">Beyond our expertise, what truly sets us apart is our commitment to building lasting relationships with our patients. From the moment you step through our doors, you&apos;ll be greeted with a genuine smile and welcomed into our caring community. We believe in treating not just the condition, but the person behind it, with respect, dignity, and compassion.</p>
        <p className="text-base sm:text-lg mb-4 text-justify">At Delaware Dermatology, you&apos;re not just another appointment – you&apos;re part of our family. Together, let&apos;s embark on a journey towards healthier, happier skin and a brighter tomorrow.</p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-10 text-tertiary">Our Physicians</h1>
        <p className="text-base sm:text-lg mb-4 text-justify">Meet the skilled hands and compassionate hearts behind Delaware Dermatology. Our team of board-certified physicians brings together a wealth of experience and expertise in dermatological care. With a shared dedication to excellence, they strive to provide personalized treatments tailored to your unique needs. Trust in our doctors to guide you on your journey to healthier, more beautiful skin, and experience the difference that true expertise and genuine care can make.</p>
      </div>
    </div>
  );
}

export default Aboutus;
