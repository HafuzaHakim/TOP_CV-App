import { useState } from 'react';
import { PiUserBold } from 'react-icons/pi';

const PersonalDetails = ({ info, setInfo }) => {
  const [isEditable, setIsEditable] = useState(true);
  const [personalDetail, setPersonalDetail] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    role: '',
  });

  function edit() {
    setIsEditable(true);
  }

  function save() {
    setInfo({
      ...info,
      personalInfo: { ...personalDetail },
    });
    setIsEditable(false);
  }

  function handleChange(e) {
    setPersonalDetail({ ...personalDetail, [e.target.name]: e.target.value });
  }

  return (
    <div className="card">
      <div className="flex gap-4 items-center mb-4">
        <PiUserBold className="text-xl text-black" />
        <h2 className="text-2xl font-semibold">Personal Details</h2>
      </div>

      {/* Name */}
      <div className="flex flex-col mb-2">
        <label htmlFor="fullName" className="label">
          Full name
        </label>
        {isEditable ? (
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            className="input"
            value={personalDetail.fullName}
            onChange={handleChange}
          />
        ) : (
          <p className="data">{info.personalInfo.fullName}</p>
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
            value={personalDetail.email}
            onChange={handleChange}
          />
        ) : (
          <p className="data">{info.personalInfo.email}</p>
        )}
      </div>
      {/* Phone */}
      <div className="flex flex-col mb-2">
        <label htmlFor="phone" className="label">
          Phone number
        </label>
        {isEditable ? (
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+60123456789"
            className="input"
            value={personalDetail.phone}
            onChange={handleChange}
          />
        ) : (
          <p className="data">{info.personalInfo.phone}</p>
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
            value={personalDetail.city}
            onChange={handleChange}
          />
        ) : (
          <p className="data">{info.personalInfo.city}</p>
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
            value={personalDetail.role}
            onChange={handleChange}
          />
        ) : (
          <p className="data">{info.personalInfo.role}</p>
        )}
      </div>

      <div className="flex gap-4 justify-end mt-8">
        {isEditable ? (
          <button
            onClick={save}
            className="btn-primary bg-green-500 hover:bg-green-400"
          >
            Save
          </button>
        ) : (
          <button
            onClick={edit}
            className="btn-primary bg-blue-500 hover:bg-blue-400"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
