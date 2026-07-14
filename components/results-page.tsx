'use client';

interface ResultsPageProps {
  onLogout: () => void;
}

export default function ResultsPage({ onLogout }: ResultsPageProps) {
  const studentData = {
    name: 'DESAI JASMIT MAHESHBHAI',
    institute: 'Faculty of Engineering & Technology',
    program: 'Bachelor of Technology (Computer Science & Engineering)',
    semester: 'II',
    seatNo: '202502626010076',
    enrollmentNo: '202502626010076',
    examination: 'Summer Examination 2026',
  };

  const subjects = [
    {
      name: 'Linear Algebra',
      credit: 4,
      minMax: '40/100',
      obtained: 46,
      grade: 'C+',
    },
    {
      name: 'Object Oriented Programming using C++',
      credit: 3,
      minMax: '40/100',
      obtained: 52,
      grade: 'B',
    },
    {
      name: 'Database Management Systems',
      credit: 3,
      minMax: '40/100',
      obtained: 50,
      grade: 'B',
    },
    {
      name: 'IT Workshops',
      credit: 2,
      minMax: '40/100',
      obtained: 48,
      grade: 'B',
    },
    {
      name: 'Digital Systems and Microcontrollers',
      credit: 3,
      minMax: '40/100',
      obtained: 49,
      grade: 'B',
    },
    {
      name: 'Professional Communication',
      credit: 2,
      minMax: '40/100',
      obtained: 45,
      grade: 'C+',
    },
  ];

  const semesterMarks = {
    semester: 'Sem-II',
    maxMarks: 600,
    obtainedMarks: 290,
  };

  const cgpaTable = [
    { percentage: '85 and above', gradePoint: '8.5 - 10.0', grade: 'O+', description: 'Outstanding', classification: 'First Class with Distinction' },
    { percentage: '70 - 84.99', gradePoint: '7.0 - 8.49', grade: 'O', description: 'Excellent', classification: 'First Class' },
    { percentage: '60 - 69.99', gradePoint: '6.0 - 6.99', grade: 'A', description: 'Very Good', classification: 'First Class' },
    { percentage: '55 - 59.99', gradePoint: '5.5 - 5.99', grade: 'B+', description: 'Good', classification: 'Higher Second Class' },
    { percentage: '48 - 54.99', gradePoint: '4.8 - 5.49', grade: 'B', description: 'Fair', classification: 'Second Class' },
    { percentage: '40 - 47.99', gradePoint: '4.0 - 4.79', grade: 'C', description: 'Average', classification: 'Pass Class' },
    { percentage: 'Below 40', gradePoint: '0.0', grade: 'E', description: 'Fail or Dropped', classification: 'Dropped' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Student Results</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
        {/* University Header */}
        <div className="text-center mb-8 pb-8 border-b-2 border-gray-300">
          <div className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg mb-4">
            <h2 className="text-xl font-bold">GLS UNIVERSITY</h2>
          </div>
          <h3 className="text-xl font-bold text-gray-800">STATEMENT OF MARKS</h3>
          <p className="text-gray-600 mt-2">{studentData.examination}</p>
        </div>

        {/* Student Information Table */}
        <table className="w-full mb-8 border border-gray-300">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="font-bold p-3 w-1/3 bg-gray-50">Name:</td>
              <td className="p-3">{studentData.name}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="font-bold p-3 bg-gray-50">Institute:</td>
              <td className="p-3">{studentData.institute}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="font-bold p-3 bg-gray-50">Program:</td>
              <td className="p-3">{studentData.program}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="font-bold p-3 bg-gray-50">Semester:</td>
              <td className="p-3">{studentData.semester}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="font-bold p-3 bg-gray-50">Seat No.:</td>
              <td className="p-3">{studentData.seatNo}</td>
            </tr>
            <tr>
              <td className="font-bold p-3 bg-gray-50">Enrollment No.:</td>
              <td className="p-3">{studentData.enrollmentNo}</td>
            </tr>
          </tbody>
        </table>

        {/* Marks Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 text-left font-bold">Subject Name</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Credit</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Min / Max Marks</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Obtained Marks</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">{subject.name}</td>
                  <td className="border border-gray-300 p-3 text-center">{subject.credit}</td>
                  <td className="border border-gray-300 p-3 text-center">{subject.minMax}</td>
                  <td className="border border-gray-300 p-3 text-center font-bold">{subject.obtained}</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">
                    {subject.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Semester Marks Total */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-center mb-4">Semester Marks Total</h3>
          <table className="w-full border border-gray-300 max-w-md mx-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 text-center font-bold">Semester</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Max Marks</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">{semesterMarks.semester}</td>
                <td className="border border-gray-300 p-3 text-center font-bold">{semesterMarks.maxMarks}</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">
                  {semesterMarks.obtainedMarks}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-xs text-gray-600 mb-8 italic">
          Note: *Credit for these subjects are not included in calculation of Grade/Class.
        </p>
      </div>

      {/* CGPA Table Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h3 className="text-lg font-bold text-center mb-6">CGPA Equivalent Class will be as follows</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 text-center font-bold">Percentage</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Grade Point</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Grade</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Description</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Classification of Final Result</th>
              </tr>
            </thead>
            <tbody>
              {cgpaTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 text-center">{row.percentage}</td>
                  <td className="border border-gray-300 p-3 text-center">{row.gradePoint}</td>
                  <td className="border border-gray-300 p-3 text-center font-bold">{row.grade}</td>
                  <td className="border border-gray-300 p-3 text-center">{row.description}</td>
                  <td className="border border-gray-300 p-3 text-center">{row.classification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
