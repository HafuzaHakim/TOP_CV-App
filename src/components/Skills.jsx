import { useState } from 'react';
import { PiToolboxBold, PiPlusCircleBold, PiX } from 'react-icons/pi';

const Skills = ({ info, setInfo }) => {
  const [newSkill, setNewSkill] = useState('');

  function handleSubmit() {
    setInfo({ ...info, skills: [...info.skills, newSkill] });
    setNewSkill('');
  }

  function handleDelete(selected) {
    setInfo({
      ...info,
      skills: info.skills.filter((skill) => skill !== selected),
    });
  }

  return (
    <div className="card">
      <div className="flex gap-4 mb-4 items-center">
        <PiToolboxBold className="text-xl text-black" />
        <h2 className="text-2xl font-semibold">Skills</h2>
      </div>
      <form action="#" className="flex gap-1 mb-2" onSubmit={handleSubmit}>
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          type="text"
          placeholder="Insert your skills here"
          className="input flex-grow"
        />
        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400"
        >
          <PiPlusCircleBold className="text-2xl text-white" />
        </button>
      </form>
      {info.skills.length !== 0 && (
        <div className="flex gap-4 flex-wrap">
          {info.skills.map((skill) => {
            return (
              <div
                key={skill}
                id={skill}
                className="flex items-center gap-2 bg-teal-500 text-white font-light text-base px-2 py-1 rounded-xl"
              >
                <p>{skill}</p>
                <button
                  className="rounded-full p-[1px] hover:bg-teal-600"
                  onClick={() => handleDelete(skill)}
                >
                  <PiX className="text-sm" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Skills;
