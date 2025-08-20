import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const countryData = [
  { country: "AFGHANISTAN", code: "AF" },
  { country: "ALBANIA", code: "AL" },
  { country: "ALGERIA", code: "DZ" },
  { country: "AMERICAN SAMOA", code: "AS" },
  { country: "ANDORRA", code: "AD" },
  { country: "ANGOLA", code: "AO" },
  { country: "ANTARCTICA", code: "AQ" },
  { country: "ANTIGUA AND BARBUDA", code: "AG" },
  { country: "ARGENTINA", code: "AR" },
  { country: "ARMENIA", code: "AM" },
  { country: "ARUBA", code: "AW" },
  { country: "AUSTRALIA", code: "AU" },
  { country: "AUSTRIA", code: "AT" },
  { country: "AZERBAIJAN", code: "AZ" },
  { country: "BAHAMAS", code: "BS" },
  { country: "BAHRAIN", code: "BH" },
  { country: "BANGLADESH", code: "BD" },
  { country: "BARBADOS", code: "BB" },
  { country: "BELARUS", code: "BY" },
  { country: "BELGIUM", code: "BE" },
  { country: "BELIZE", code: "BZ" },
  { country: "BENIN", code: "BJ" },
  { country: "BERMUDA", code: "BM" },
  { country: "BHUTAN", code: "BT" },
  { country: "BOLIVIA", code: "BO" },
  { country: "BOSNIA AND HERZEGOVINA", code: "BA" },
  { country: "BOTSWANA", code: "BW" },
  { country: "BOUVET ISLAND", code: "BV" },
  { country: "BRAZIL", code: "BR" },
  { country: "BRITISH INDIAN OCEAN TERRITORY", code: "IO" },
  { country: "BRUNEI DARUSSALAM", code: "BN" },
  { country: "BULGARIA", code: "BG" },
  { country: "BURKINA FASO", code: "BF" },
  { country: "BURUNDI", code: "BI" },
  { country: "CAMBODIA", code: "KH" },
  { country: "CAMEROON", code: "CM" },
  { country: "CANADA", code: "CA" },
  { country: "CAPE VERDE", code: "CV" },
  { country: "CAYMAN ISLANDS", code: "KY" },
  { country: "CENTRAL AFRICAN REPUBLIC", code: "CF" },
  { country: "CHAD", code: "TD" },
  { country: "CHILE", code: "CL" },
  { country: "CHINA", code: "CN" },
  { country: "CHRISTMAS ISLAND", code: "CX" },
  { country: "COCOS (KEELING) ISLANDS", code: "CC" },
  { country: "COLOMBIA", code: "CO" },
  { country: "COMOROS", code: "KM" },
  { country: "CONGO", code: "CG" },
  { country: "CONGO, THE DEMOCRATIC REPUBLIC OF THE", code: "CD" },
  { country: "COOK ISLANDS", code: "CK" },
  { country: "COSTA RICA", code: "CR" },
  { country: "CÔTE D'IVOIRE", code: "CI" },
  { country: "CROATIA", code: "HR" },
  { country: "CUBA", code: "CU" },
  { country: "CYPRUS", code: "CY" },
  { country: "CZECH REPUBLIC", code: "CZ" },
  { country: "DENMARK", code: "DK" },
  { country: "DJIBOUTI", code: "DJ" },
  { country: "DOMINICA", code: "DM" },
  { country: "DOMINICAN REPUBLIC", code: "DO" },
  { country: "ECUADOR", code: "EC" },
  { country: "EGYPT", code: "EG" },
  { country: "EL SALVADOR", code: "SV" },
  { country: "EQUATORIAL GUINEA", code: "GQ" },
  { country: "ERITREA", code: "ER" },
  { country: "ESTONIA", code: "EE" },
  { country: "ETHIOPIA", code: "ET" },
  // ... continue adding all other countries as needed ...
  { country: "UNITED STATES", code: "US" },
  { country: "UNITED KINGDOM", code: "GB" },
  { country: "INDIA", code: "IN" },
  { country: "PAKISTAN", code: "PK" },
  { country: "ZIMBABWE", code: "ZW" },
];

const Html_Country_Codes = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML ISO Country Codes Reference</h1>
<div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">ISO Country Codes</h2>
          <p className="mb-4">
            In HTML, country codes can be used as an addition to the language code in the <code>lang</code> attribute.
          </p>
          <p className="mb-4">
            The last two characters define the country.
          </p>
          <p className="mb-6">
            The following example specifies English as language and United States as country:
          </p>
          <div className="bg-[#E7E9EB] p-4 rounded-xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{`<html lang="en-US">\n  ...\n</html>`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Country Code Table</h3>
          <div className="overflow-x-auto border border-gray-200 rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="px-4 py-2 font-semibold">Country</th>
                  <th className="px-4 py-2 font-semibold">ISO Code</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {countryData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{item.country}</td>
                    <td className="px-4 py-2">{item.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            <div className="flex justify-end mt-10">
                    <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                      Next
                      <FaChevronRight />
                    </button>
                  </div>
        </section>
      </div>
    </div>
  );
};

export default Html_Country_Codes;
