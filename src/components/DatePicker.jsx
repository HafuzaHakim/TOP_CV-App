import { useState } from 'react';

const DatePicker = ({ date, setDate }) => {
  const [isPresent, setIsPresent] = useState(false);

  function getStartDate(e) {
    setDate({
      ...date,
      companyStartDate: e.target.value,
    });
  }

  function getEndDate(e) {
    setDate({
      ...date,
      companyEndDate: e.target.value,
    });
  }

  function handleCheck() {
    setDate({
      ...date,
      isPresent: !date.isPresent,
    });
  }

  return (
    <div className="mb-2">
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="startDate" className="label">
            Start Date
          </label>
          <input
            id="startDate"
            type="month"
            className="input cursor-pointer hover:bg-slate-200"
            name="start"
            value={date.companyStartDate}
            onChange={getStartDate}
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="endDate" className="label">
            End Date
          </label>
          <input
            id="endDate"
            type="month"
            disabled={date.isPresent}
            className="input cursor-pointer disabled:border-slate-500/40 hover:bg-slate-200 disabled:cursor-default hover:disabled:bg-slate-100"
            name="end"
            value={date.companyEndDate}
            onChange={getEndDate}
          />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <input
          id="checkPresent"
          type="checkbox"
          className="scale-125 ml-1"
          onChange={handleCheck}
        />
        <label htmlFor="checkPresent" className="text-base font-light">
          My current organization
        </label>
      </div>
    </div>
  );
};

export default DatePicker;
