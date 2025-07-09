const CareerPageOpportunitiesSection = () => {
  const benefits = [
    {
      title: "Travel Perks & Benefits",
      description:
        "Extra incentives provided by travel companies to enhance the travel experience and add value to the overall trip.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Recognition",
      description:
        "Act of acknowledging someone's achievements, contributions, or efforts.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Rewards",
      description:
        "Incentives given to someone in recognition of their achievements, contributions, or efforts.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m8-8v7m-16-5v5m8-15v3m0 0h.01M12 11h.01M16 11h.01M8 11h.01"
          />
        </svg>
      ),
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Growth Opportunities",
      description:
        "The chances for personal and professional development and advancement in a particular career or field.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16 ">
          <h1 className="font-bold text-gray-900 mb-4 md:text-4xl text-2xl">
            Career Opportunities with{" "}
            <span className="text-blue-600">Positive Hospitality</span>
          </h1>
          <p className=" text-gray-600  font-semibold text-center">
            There are several career opportunities available within the
            hospitality industry that focus on providing positive hospitality
            experiences for customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`p-6 flex items-center justify-center ${benefit.color} rounded-t-xl`}
              >
                {benefit.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 ">
                  {benefit.title}
                </h3>
                <p className="text-gray-600  text-justify ">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPageOpportunitiesSection;
