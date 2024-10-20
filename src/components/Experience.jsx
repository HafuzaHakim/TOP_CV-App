import { useState } from 'react';
import { PiBriefcaseBold, PiPlusCircleBold } from 'react-icons/pi';
import DatePicker from './DatePicker';

const Experience = ({ info, setInfo }) => {
  const [showForm, setShowForm] = useState(true);
  const [experience, setExperience] = useState({
    companyName: '',
    companyTitle: '',
    companyCity: '',
    companyStartDate: '',
    companyEndDate: '',
    companyResponsibility: '',
    isPresent: false,
  });

  function save(e) {
    e.preventDefault();
    setInfo({
      ...info,
      experience: [...info.experience, { ...experience }],
    });
    setExperience({
      companyName: '',
      companyTitle: '',
      companyCity: '',
      companyStartDate: '',
      companyEndDate: '',
      companyResponsibility: '',
      isPresent: false,
    });
    setShowForm(false);
  }

  function handleChange(e) {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  }

  function handleCheck() {
    setExperience({
      ...experience,
      companyEndDate: '',
      isPresent: !experience.isPresent,
    });
  }

  return (
    <div className="card">
      <div className="flex gap-4 mb-4 items-center">
        <PiBriefcaseBold className="text-xl text-black" />
        <h2 className="text-2xl font-semibold">Experience</h2>
        <button
          className="bg-green-500 px-2 py-1 rounded-lg hover:bg-green-400 ml-auto drop-shadow-md"
          onClick={() => setShowForm(true)}
        >
          <PiPlusCircleBold className="text-xl text-white" />
        </button>
      </div>
      {showForm && (
        <form action="#" onSubmit={save}>
          <div className="flex flex-col mb-2">
            <label htmlFor="company-name" className="label">
              Company Name
            </label>
            <input
              id="company-name"
              name="companyName"
              type="text"
              className="input"
              placeholder="Nexon Technology"
              value={experience.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="company-title" className="label">
              Title
            </label>
            <input
              id="company-title"
              name="companyTitle"
              type="text"
              className="input"
              placeholder="Senior Manager"
              value={experience.companyTitle}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="company-location" className="label">
              Location
            </label>
            <input
              id="company-location"
              name="companyCity"
              type="text"
              className="input"
              placeholder="Pacifica,CA"
              value={experience.companyCity}
              onChange={handleChange}
            />
          </div>

          <DatePicker
            date={experience}
            startDate={experience.companyStartDate}
            endDate={experience.companyEndDate}
            isPresent={experience.isPresent}
            setDate={setExperience}
            changeDate={handleChange}
            start="companyStartDate"
            end="companyEndDate"
            handleCheck={handleCheck}
          />

          <div className="flex flex-col">
            <label htmlFor="exp-desc" className="label">
              Responsibilities
            </label>
            <textarea
              name="companyResponsibility"
              id="exp-desc"
              className="input h-40"
              placeholder="Oversee complex inter-department communication ensuring alignment of interest"
              value={experience.companyResponsibility}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="btn-primary bg-green-500 hover:bg-green-400"
            >
              Add
            </button>
          </div>
        </form>
      )}
      {!showForm && (
        <p className="text-base font-extralight text-slate-400">
          No work experience added....yet
        </p>
      )}
    </div>
  );
};

export default Experience;
