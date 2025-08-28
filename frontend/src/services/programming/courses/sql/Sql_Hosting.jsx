import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Hosting = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL Hosting</h1>
          <p className="text-gray-600 text-lg">
            If you want your website to store and retrieve data from a database, your web server
            should have access to a database-system that uses the SQL language.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Explanation */}
        <section>
          <h2 className="text-2xl font-bold mb-4">What is SQL Hosting?</h2>
          <p className="text-gray-700 mb-2">
            If your web server is hosted by an Internet Service Provider (ISP), you will need to
            look for SQL hosting plans. The most common SQL hosting databases are:
            <strong> MS SQL Server</strong>, <strong>Oracle</strong>, <strong>MySQL</strong>, and{" "}
            <strong>MS Access</strong>.
          </p>
        </section>

        {/* Database Options */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold mb-6">Common SQL Hosting Databases</h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">MS SQL Server</h3>
            <p className="text-gray-700">
              Microsoft&apos;s SQL Server is a popular database software for high-traffic,
              database-driven websites. It is very powerful, robust, and full featured.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Oracle</h3>
            <p className="text-gray-700">
              Oracle is another powerful, robust, and full-featured SQL database system. It is widely
              used for large-scale, high-traffic, database-driven applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">MySQL</h3>
            <p className="text-gray-700">
              MySQL is a popular open-source database software for websites. It is robust, reliable,
              and inexpensive compared to Microsoft and Oracle solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">MS Access</h3>
            <p className="text-gray-700">
              MS Access can be a solution for websites requiring only a simple database. However, it
              is not well-suited for very high-traffic sites and is less powerful than MySQL, SQL
              Server, or Oracle.
            </p>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which of the following SQL databases is considered the best inexpensive alternative to
            Microsoft and Oracle solutions?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>MS SQL Server</li>
            <li>Oracle</li>
            <li className="font-bold">MySQL ✅</li>
            <li>MS Access</li>
          </ul>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_Hosting;
