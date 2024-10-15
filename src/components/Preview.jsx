const Preview = ({ info }) => {
  return (
    <main className="col-span-4 p-5">
      <div className="bg-white p-12 h-full flex flex-col shadow-sm rounded-sm text-black/40 font-light text-sm">
        <div className="flex flex-col gap-1 mb-6">
          {info.personalInfo.fullName ? (
            <h3 className="">{''}</h3>
          ) : (
            <h3 className="text-3xl font-semibold text-center uppercase">
              Your name
            </h3>
          )}

          {info.personalInfo.role ? (
            <h4 className="">{}</h4>
          ) : (
            <h4 className="text-base font-normal text-center">
              The role you are applying for?
            </h4>
          )}

          <div className="flex gap-6 justify-center">
            {info.personalInfo.phone ? (
              <p className="">{}</p>
            ) : (
              <p className="">Phone</p>
            )}
            {info.personalInfo.email ? (
              <p className="">{}</p>
            ) : (
              <p className="">Email</p>
            )}
            {info.personalInfo.city ? (
              <p className="">{}</p>
            ) : (
              <p className="">City</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <h5 className="preview-header">Skills</h5>
          {info.skills.length === 0 ? <p>List of skills that will help you secure your dream job</p> : <ul className="grid"></ul>}
        </div>
        <div className="mb-6">
          <h5 className="preview-header">Experience</h5>
        </div>
        <div className="">
          <h5 className="preview-header">Education</h5>
        </div>
      </div>
    </main>
  );
};

export default Preview;
