import PhysicianImage1 from '/src/assets/Paige Venables_Yeatman Photography__003.jpg'; // replace with actual image path

const physicians = [
  {
    name: 'Paige Venables MSPAS PA-C',
    image: PhysicianImage1,
    description1: `
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
    `,
    description2: `
    
    `,
  },
  

];

const Physicians = () => {
  return (
    <div className="bg-bg-main h-auto flex flex-col gap-5  items-center p-2 md:p-8">
      {physicians.map((physician, index) => (
        <div
          key={index}
          className="flex flex-col w-full lg:w-[72%] border-b-2 p-5 gap-8 shadow-md bg-white"
        >
          <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <img src={physician.image} className="w-[100%]  lg:w-[22%] shadow-lg" alt={physician.name} />
            <div className="w-full lg:w-3/4  text-left">
              <h2 className="text-xl lg:text-2xl font-bold mb-4 text-tertiary">{physician.name}</h2>
              <p className="text-md leading-relaxed text-primary mb-4">
                {physician.description1}
              </p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Physicians;
