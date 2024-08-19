/* eslint-disable react/prop-types */
function CvDisplay({ cvInput}) {
  const { fName, lName, phone, email, hobbies, skills, work } = cvInput;

  return (
    <>
      <div className="bg-slate-200 min-h-[100vh] animate-pop">
        <header className="flex justify-center flex-col bg-hero-pattern bg-no-repeat bg-contain h-[33vw] text-slate-900 mb-10">
          {fName && lName && (
            <h1 className="text-center text-3xl font-bold">
              <span className="text-2xl text-slate-700">Name </span>
              {fName} {lName}
            </h1>
          )}

          {phone && (
            <h1 className="text-center text-3xl font-bold">
              <span className="text-2xl text-slate-700">Phone </span>
              {phone}
            </h1>
          )}

          {email && (
            <h1 className="text-center text-3xl font-bold">
              <span className="text-2xl text-slate-700">Email </span>
              {email}
            </h1>
          )}
        </header>
        <div className="max-w-[1020px] m-auto pb-10">
          <div className="pl-3 pr-3 mb-40">
            {work.length > 0 && (
              <>
                <h1 className="text-slate-900 text-3xl text-center">
                  Work experience
                </h1>
                <ul className="bg-slate-950 p-2 rounded mt-4 border-b-2">
                  {work.map((work) => (
                    <div
                      key={work.title + work.description}
                      className="text-slate-100 pl-3 pr-3"
                    >
                      <h1 className="text-2xl text mb-2">{work.title}</h1>
                      <p className="text-slate-300">{work.description}</p>
                    </div>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div>
            <div className="p-3 mt-2">
              {skills.length > 0 && (
                <>
                  <h1 className="text-slate-900 text-3xl text-center">
                    Skills
                  </h1>
                  <ul className="text-xl w-[70%] m-auto p-2 text-slate-200">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded text-center border-b-2 p-2"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="p-3 mt-2">
            {hobbies.length > 0 && (
              <>
                <h1 className="text-slate-900 text-3xl text-center">Hobbies</h1>
                <ul className="text-xl w-[70%] m-auto p-2 text-slate-200">
                  {hobbies.map((hobby) => (
                    <li
                      key={hobby}
                      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded text-center border-b-2 p-2"
                    >
                      {hobby}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CvDisplay;
