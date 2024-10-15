import Header from './components/Header';
import UserInformation from './components/UserInformation';
import Preview from './components/Preview';
import { useState } from 'react';

const initialBio = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    city: '',
    role: '',
  },
  experience: [],
  education: [],
  skills: [],
};

const App = () => {
  const [bio, setBio] = useState(initialBio);

  return (
    <div className="min-h-screen grid grid-cols-6 container mx-auto auto-rows-min">
      <Header />
      <UserInformation info={bio} />
      <Preview info={bio} />
    </div>
  );
};

export default App;
