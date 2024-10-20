const Preview = ({ info }) => {
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
          <div>
            {info.experience.length === 0 ? (
              <div>
                <div className="flex justify-between text-base mb-1">
                  <h6 className="font-normal">Company Name</h6>
                  <p className="font-extralight">City</p>
                </div>
                <div className="flex justify-between font-extralight mb-1 italic">
                  <h6>Work Title</h6>

                  <p>Time period</p>
                </div>
                <p className="font-extralight">Job responsibilities</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {info.experience.map((work) => {
                  const [startYear, startMonth] =
                    work.companyStartDate.split('-');

                  const [endYear, endMonth] = work.companyEndDate.split('-');

                  return (
                    <div className="text-black/85" key={work.companyName}>
                      <div className="flex justify-between text-base mb-1">
                        <h6 className="font-normal">{work.companyName}</h6>
                        <p className="font-extralight">{work.companyCity}</p>
                      </div>
                      <div className="flex justify-between font-extralight mb-1 italic">
                        <h6>{work.companyTitle}</h6>

                        <p>{`${getMonth(startMonth)} ${startYear} - ${
                          work.isPresent ? 'Present' : getMonth(endMonth)
                        } ${!work.isPresent ? '' : endYear}`}</p>
                      </div>
                      <p className="font-extralight">
                        {work.companyResponsibility}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <h5 className="preview-header">Education</h5>
          {info.education.length === 0 ? (
            <div>
              <div className="flex justify-between text-base mb-1">
                <h6 className="font-normal">School/University/College Name</h6>
                <p className="font-extralight">City</p>
              </div>
              <div className="flex justify-between font-extralight mb-1 italic">
                <h6>Field of study</h6>

                <p>Time period</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {info.education.map((school) => {
                const [startYear, startMonth] =
                  school.educationStartDate.split('-');

                const [endYear, endMonth] = school.educationEndDate.split('-');

                return (
                  <div className="text-black/85" key={school.educationName}>
                    <div className="flex justify-between text-base mb-1">
                      <h6 className="font-normal">{school.educationName}</h6>
                      <p className="font-extralight">{school.educationCity}</p>
                    </div>
                    <div className="flex justify-between font-extralight mb-1 italic">
                      <h6>{school.educationField}</h6>

                      <p>{`${getMonth(startMonth)} ${startYear} - ${
                        school.isPresent ? 'Present' : getMonth(endMonth)
                      } ${!school.isPresent ? '' : endYear}`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Preview;
