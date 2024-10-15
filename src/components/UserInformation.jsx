import PersonalDetails from './PersonalDetails';
import Skills from './Skills';

const UserInformation = ({ info, setInfo }) => {
  return (
    <aside className="h-[calc(100vh-64px)] col-span-2 p-5 flex flex-col gap-6 overflow-auto">
      <PersonalDetails info={info} />
      <Skills info={info} setInfo={setInfo} />
    </aside>
  );
};

export default UserInformation;
