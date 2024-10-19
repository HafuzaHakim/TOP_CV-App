const Preview = ({ info, setInfo }) => {
  function getMonth(month) {
    switch (month) {
      case '01':
        return 'January';
      case '02':
        return 'February';
      case '03':
        return 'March';
      case '04':
        return 'April';
      case '05':
        return 'May';
      case '06':
        return 'June';
      case '07':
        return 'July';
      case '08':
        return 'August';
      case '09':
        return 'September';
      case '10':
        return 'October';
      case '11':
        return 'November';
      case '12':
        return 'December';
      default:
        return 'Invalid month'; // Handles invalid input
    }
  }

  return (
    <main className="col-span-4 p-5">
      <div className="bg-white p-12 h-full flex flex-col shadow-sm rounded-sm text-black/40 font-light text-sm">
        <div className="flex flex-col gap-1 mb-6">
          {info.personalInfo.fullName ? (
            <h3 className="text-3xl font-semibold text-center uppercase text-black">
              {info.personalInfo.fullName}
            </h3>
          ) : (
            <h3 className="text-3xl font-semibold text-center uppercase">
              Your name
            </h3>
          )}

          {info.personalInfo.role ? (
            <h4 className="text-base font-normal text-center text-black">
              {info.personalInfo.role}
            </h4>
          ) : (
            <h4 className="text-base font-normal text-center">
              The role you are applying for?
            </h4>
          )}

          <div className="flex gap-8 justify-center">
            {info.personalInfo.phone ? (
              <p className="text-black">{info.personalInfo.phone}</p>
            ) : (
              <p className="">Phone</p>
            )}
            {info.personalInfo.email ? (
              <p className="text-black">{info.personalInfo.email}</p>
            ) : (
              <p className="">Email</p>
            )}
            {info.personalInfo.city ? (
              <p className="text-black">{info.personalInfo.city}</p>
            ) : (
              <p className="">City</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <h5 className="preview-header">Skills</h5>
          {info.skills.length === 0 ? (
            <p>List of skills that will help you secure your dream job</p>
          ) : (
            <ul className="flex flex-wrap list-disc list-inside text-black text-base font-extralight mx-auto w-[90%]">
              {info.skills.map((skill) => (
                <li key={skill} className="basis-1/4">
                  {skill}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-6">
          <h5 className="preview-header">Experience</h5>
          {info.experience.length === 0 ? (
            <p>Start adding your previous work experience</p>
          ) : (
            <div>
              {info.experience.map((work) => {
                return (
                  <div className="" key={work.companyName}>
                    <div>
                      <h6>{work.companyName}</h6>
                      <p>{work.companyCity}</p>
                    </div>
                    <div>
                      <h6>{work.companyTitle}</h6>
                      <p>
                        {work.companyDate.start} - {work.companyDate.end}
                      </p>
                    </div>
                    <p>{work.companyResponsibility}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="">
          <h5 className="preview-header">Education</h5>
          {info.education.length === 0 ? (
            <p>Start adding your past education details</p>
          ) : (
            <div>{info.education.map((school) => {})}</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Preview;
