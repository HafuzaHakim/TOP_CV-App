const DatePicker = ({
  startDate,
  endDate,
  isPresent,
  changeDate,
  start,
  end,
  handleCheck,
}) => {
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
            name={start}
            value={startDate}
            onChange={changeDate}
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="endDate" className="label">
            End Date
          </label>
          <input
            id="endDate"
            type="month"
            disabled={isPresent}
            className="input cursor-pointer disabled:border-slate-500/40 hover:bg-slate-200 disabled:cursor-default hover:disabled:bg-slate-100"
            name={end}
            value={endDate}
            onChange={changeDate}
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
