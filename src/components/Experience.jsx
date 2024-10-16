import { useState } from 'react';
import { PiBriefcaseBold, PiPlusCircleBold } from 'react-icons/pi';
import DatePicker from './DatePicker';

const Experience = ({ info, setInfo }) => {
  const [showForm, setShowForm] = useState(true);
  const [date, setDate] = useState({ start: '', end: '' });

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
        <form action="#">
          <div className="flex flex-col mb-2">
            <label htmlFor="company-name" className="label">
              Company Name
            </label>
            <input
              id="company-name"
              type="text"
              className="input"
              placeholder="Nexon Technology"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="company-title" className="label">
              Title
            </label>
            <input
              id="company-title"
              type="text"
              className="input"
              placeholder="Senior Manager"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="company-location" className="label">
              Location
            </label>
            <input
              id="company-location"
              type="text"
              className="input"
              placeholder="Pacifica,CA"
            />
          </div>
          <DatePicker date={date} setDate={setDate} />
          <div className="flex flex-col">
            <label htmlFor="exp-desc" className="label">
              Responsibilities
            </label>
            <textarea
              name="experience-description"
              id="exp-desc"
              className="input h-40"
              placeholder="Oversee complex inter-department communication ensuring alignment of interest"
            ></textarea>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="btn-primary bg-green-500 hover:bg-green-400"
            >
              Save
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
