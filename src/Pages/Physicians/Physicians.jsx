import { useState } from 'react';
import PhysicianImage from '/src/assets/Paige Venables_Yeatman Photography__003.jpg'; // replace with actual image path

const Physicians = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (fullDescription) => {
    const shortDesc = fullDescription.split(' ').slice(0, 40).join(' ');
    return shortDesc.length < fullDescription.length ? `${shortDesc}...` : shortDesc;
  };

  const name = 'Paige Venables MSPAS PA-C';
  const fullDescription = `
    Paige Venables is a board-certified Physician Assistant who graduated with honors in 2017 from Alderson Broaddus University 
    with a Master of Science in Physician Assistant Studies. She completed her undergraduate study with a Bachelor of Science in 
    Psychology from the University of Richmond where she graduated cum laude and was a member of the women’s NCAA Division I varsity 
    field hockey team.
    She is nationally certified by the NCCPA and is a member of the American Academy of Physician Assistants. She is also a 
    Diplomate Fellow with the Society of Dermatology Physician Assistants and serves on the Delaware Academy of Physician Assistants’ 
    board.
    Paige is a Delaware native and enjoys serving her home community’s dermatologic needs. She focuses on medical and surgical 
    dermatology and has a special interest in detecting and treating skin cancers and acne treatment. Mrs. Venables’ postgraduate 
    experience also includes orthopedics and urgent care medicine.
    Paige enjoys reading, exercising, spending time with family, and exploring the outdoors in her spare time. She currently lives 
    with her husband Will in Lewes, DE.
  `;

  return (
    <div className="bg-bg-main min-h-[85vh] flex flex-col lg:flex-row gap-5 p-8 justify-center items-center">
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-5 lg:mb-0">
        <img src={PhysicianImage} className="w-[75%] lg:w-full rounded-lg shadow-lg" alt={name} />
      </div>
      <div className="w-full lg:w-2/3 p-5 lg:p-0">
        <h2 className="text-3xl font-bold mb-4 text-tertiary">{name}</h2>
        <p className="text-lg text-left md:text-justify leading-relaxed text-primary">
          {isExpanded ? fullDescription : getShortDescription(fullDescription)}
        </p>
        <button onClick={toggleReadMore} className="text-secondary-green hover:text-tertiary mt-2 underline">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Physicians;
