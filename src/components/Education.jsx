import { useState } from 'react';
import DatePicker from './DatePicker';
import { PiGraduationCapBold, PiPlusCircleBold } from 'react-icons/pi';

const Education = ({ info, setInfo }) => {
  const [showForm, setShowForm] = useState(true);
  const [date, setDate] = useState({ start: '', end: '' });

  return (
    <div className="card">
      <div className="flex gap-4 mb-4 items-center">
        <PiGraduationCapBold className="text-xl text-black" />
        <h2 className="text-2xl font-semibold">Education</h2>
        <button
          className="bg-green-500 px-2 py-1 rounded-lg hover:bg-green-400 ml-auto"
          onClick={() => setShowForm(true)}
        >
          <PiPlusCircleBold className="text-xl text-white" />
        </button>
      </div>
      {showForm && (
        <form>
          <div className="flex flex-col mb-2">
            <label htmlFor="school-name" className="label">
              School/College/University
            </label>
            <input
              id="school-name"
              type="text"
              className="input"
              placeholder="Far Far Away Imperial College"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="field-of-study" className="label">
              Field of study
            </label>
            <input
              id="field-of-study"
              type="text"
              className="input"
              placeholder="Bachelor of Swamp Raiding"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="school-location" className="label">
              Location
            </label>
            <input
              id="school-location"
              type="text"
              className="input"
              placeholder="Farquad,SH"
            />
          </div>
          <DatePicker date={date} setDate={setDate} />
          <div className="mt-4 flex justify-end">
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
          No education information added
        </p>
      )}
    </div>
  );
};

export default Education;
