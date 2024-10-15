import PersonalDetails from './PersonalDetails';

const UserInformation = ({ info }) => {
  return (
    <aside className="h-[calc(100vh-64px)] col-span-2 p-5 flex flex-col gap-6 overflow-auto">
      <PersonalDetails info={info} />
    </aside>
  );
};

export default UserInformation;
