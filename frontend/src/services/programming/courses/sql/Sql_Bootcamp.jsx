import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaCertificate, FaPlayCircle } from "react-icons/fa";

const Sql_Bootcamp = () => {
  const learnItems = [
    {
      title: "Python",
      points: [
        "Write scripts for automating tasks",
        "Serve web applications",
        "Mathematical & scientific computing",
        "Object-oriented programming & libraries",
        "Build secure and reliable apps",
      ],
    },
    {
      title: "SQL",
      points: [
        "Store, change, and retrieve data in databases",
        "Use SQL with MySQL, SQL Server, Oracle, Postgres & more",
      ],
    },
    {
      title: "NumPy",
      points: ["Use arrays in statistics and math"],
    },
    {
      title: "Pandas",
      points: ["Perform data analysis with Python"],
    },
    {
      title: "R",
      points: [
        "Manage different data types",
        "Perform statistical data analysis",
        "Visualize data with plots & diagrams",
      ],
    },
  ];

  const certifications = [
    "Certified Python Developer",
    "Certified SQL Developer",
    "NumPy Fundamentals",
    "Pandas Fundamentals",
    "R Fundamentals",
    "Data Science Fundamentals",
    "Certified Data Analyst",
  ];

  const reasons = [
    {
      title: "Bite-sized learning",
      desc: "The training content is built to be easy to understand.",
    },
    {
      title: "Increase employability",
      desc: "Document your skills and knowledge with acknowledged certifications.",
    },
    {
      title: "Save time and money",
      desc: "No deadlines. Study at your own pace.",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Course Enrollment",
      desc: "Enroll by paying the fee and get access to all modules and exams. No exam deadlines.",
    },
    {
      step: "2",
      title: "Complete Learning Modules",
      desc: "Self-paced text-based modules, interactive examples, and exercises. Unlock final exam after completion.",
    },
    {
      step: "3",
      title: "Take the Exams",
      desc: "Get instant results, 3 attempts allowed per exam. Best score counts.",
    },
    {
      step: "4",
      title: "Become Certified",
      desc: "Pass exams, earn certificates with unique sharable links and QR validation.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">W3Schools SQL Bootcamp</h1>
          <p className="text-lg text-gray-600">
            Learn Data Analytics with W3Schools · Self-paced online courses · Around 80 hours
          </p>
          <div className="font-mono text-gray-500 text-sm tracking-widest">
            W3SCHOOLS BOOTCAMP 2025
          </div>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 font-semibold rounded-lg hover:bg-[#03945f] transition">
            <FaChevronLeft /> Back
          </button>
        </div>

        {/* What You Will Learn */}
        <section>
          <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {learnItems.map((item, idx) => (
              <div key={idx} className="bg-[#D9EEE1] p-6 rounded-xl shadow space-y-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Program Description */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold">Self-paced Data Analytics Program</h2>
          <p className="text-gray-700">
            Build strong foundations in Python, SQL, NumPy, Pandas, and R with our structured,
            interactive bootcamp. Includes certification exams and real examples.
          </p>
          <p className="text-gray-700">
            Learn at your own pace with text modules, interactive exercises, and practice problems.
            Pass exams to get certified!
          </p>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-6">What You Get</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg shadow px-4 py-3 hover:shadow-md transition"
              >
                <FaCertificate className="text-[#04AA6D] text-2xl" />
                <span className="font-semibold">{cert}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            ✅ Earn all certifications to receive the <strong>Certified Data Analyst</strong> title.
          </p>
        </section>

        {/* Reasons */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Three Reasons to Join</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-[#D9EEE1] p-6 rounded-xl shadow space-y-2">
                <FaCheckCircle className="text-[#04AA6D] text-2xl" />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-gray-700">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section>
          <h2 className="text-2xl font-bold mb-6">How it Works</h2>
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#04AA6D] text-white flex items-center justify-center font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 font-semibold rounded-lg hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_Bootcamp;
