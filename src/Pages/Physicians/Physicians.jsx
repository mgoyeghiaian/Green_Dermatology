import { Helmet } from 'react-helmet';
import PhysicianImage1 from '/src/assets/Paige Venables_Yeatman Photography__003.jpg'; // replace with actual image path

const physicians = [
  {
    name: 'Paige Venables MSPAS PA-C',
    image: PhysicianImage1,
    description1: `
      <div>
        <strong>Education and Background</strong><br/>
        Paige Venables, a board-certified Physician Assistant, graduated with honors in 2017 from Alderson Broaddus University with a Master of Science in Physician Assistant Studies. She completed her undergraduate study at the University of Richmond, earning a Bachelor of Science in Psychology, graduating cum laude, and participating in the women’s NCAA Division I varsity field hockey team.
      </div>
      <div style="margin-top: 10px;">
        <strong>Professional Experience</strong><br/>
        With 6 years of dermatology experience, Paige holds national certification by the NCCPA and is a member of the American Academy of Physician Assistants. Also a Diplomate Fellow with the Society of Dermatology Physician Assistants, Paige serves on the Delaware Academy of Physician Assistants’ board.
      </div>
      <div style="margin-top: 10px;">
        <strong>Specialties and Interests</strong><br/>
        As a Delaware native, Paige serves the home community’s dermatologic needs, focusing on medical and surgical dermatology with a special interest in detecting and treating skin cancers and acne treatment. Postgraduate experience includes orthopedics and urgent care medicine.
      </div>
      <div style="margin-top: 10px;">
        <strong>Personal Interests</strong><br/>
        Reading, exercising, spending time with family, and exploring the outdoors are favorite pastimes. Residing with her husband Will in Lewes, DE, she cherishes the community.
      </div>
    `
  }
];

const physicianNames = physicians.map(physician => physician.name).join(', ');

const Physicians = () => {
  return (
    <div className="bg-bg-main h-auto flex flex-col gap-5 items-center p-2 md:p-8">
      <Helmet>
        <title>Providers - Green Dermatology</title>
        <meta name="description" content="Meet our team of expert dermatologists in Sussex County Delaware. We specialize in pediatric dermatology, skin cancer treatment, and more." />
        <meta name="keywords" content={`${physicianNames}, best dermatologist near me, pediatric dermatology near me, dermatology clinic in Sussex County Delaware, skin specialist Sussex County Delaware`} />
        <link rel="canonical" href="https://greendermatology.net/physicians" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Green Dermatology",
              "url": "https://greendermatology.net/physicians",
              "logo": "https://greendermatology.net/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-459-5010",
                "contactType": "Customer Service",
                "email": "info@greendermatology.net"
              },
              "department": {
                "@type": "MedicalOrganization",
                "name": "Dermatology Department"
              }
            }
          `}
        </script>
      </Helmet>
      {physicians.map((physician, index) => (
        <div
          key={index}
          className="flex flex-col w-full lg:w-[72%] border-b-2 p-5 gap-8 shadow-md bg-white"
        >
          <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <img src={physician.image} className="w-[100%] lg:w-[22%] shadow-lg" alt={physician.name} />
            <div className="w-full lg:w-3/4 text-left">
              <h2 className="text-xl lg:text-2xl font-bold mb-4 text-tertiary">{physician.name}</h2>
              <p className="text-md leading-relaxed text-primary mb-4" dangerouslySetInnerHTML={{ __html: physician.description1 }}>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Physicians;
