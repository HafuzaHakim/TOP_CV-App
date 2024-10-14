import { useState } from 'react';

const PersonalDetails = ({ info }) => {
  const [isEditable, setIsEditable] = useState(true);

  function edit() {
    setIsEditable(true);
  }

  function save() {
    setIsEditable(false);
  }

  return (
    <div className="bg-white p-4 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
      {/* Name */}
      <div className="flex flex-col mb-2">
        <label htmlFor="fullName" className="label">
          Full Name
        </label>
        {isEditable ? (
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            className="input"
          />
        ) : (
          <p className="data">Text test</p>
        )}
      </div>
      {/* Email */}
      <div className="flex flex-col mb-2">
        <label htmlFor="email" className="label">
          Email
        </label>
        {isEditable ? (
          <input
            type="text"
            name="email"
            id="email"
            placeholder="yourname@mail.com"
            className="input"
          />
        ) : (
          <p className="data"></p>
        )}
      </div>
      {/* Phone */}
      <div className="flex flex-col mb-2">
        <label htmlFor="phone" className="label">
          Phone Number
        </label>
        {isEditable ? (
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+60123456789"
            className="input"
          />
        ) : (
          <p className="data"></p>
        )}
      </div>
      {/* City */}
      <div className="flex flex-col mb-2">
        <label htmlFor="city" className="label">
          City
        </label>
        {isEditable ? (
          <input
            type="text"
            name="city"
            id="city"
            placeholder="New York"
            className="input"
          />
        ) : (
          <p className="data"></p>
        )}
      </div>
      {/* Role */}
      <div className="flex flex-col mb-2">
        <label htmlFor="role" className="label">
          Role
        </label>
        {isEditable ? (
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Doctor"
            className="input"
          />
        ) : (
          <p className="data"></p>
        )}
      </div>

      <div className="flex gap-4 justify-end mt-8">
        <button
          onClick={edit}
          className="btn-primary bg-blue-600 hover:bg-blue-500"
        >
          Edit
        </button>
        <button
          onClick={save}
          className="btn-primary bg-green-600 hover:bg-green-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
