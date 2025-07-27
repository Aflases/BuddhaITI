
const Download = () => {
  const downloadablePdfs = [
  {
    name: 'Affiliation Document',
    url: `${import.meta.env.BASE_URL}/assets/pdfs/Affiliation.pdf`, // Placeholder URL
    fileName: 'NCVT Affiliation Document.pdf',
    description: 'Affiliation document with NCVT, DGT, and Ministry of Skill Development & Entrepreneurship.',
  },
  {
    name: 'Training Fee',
    url: `${import.meta.env.BASE_URL}/assets/pdfs/Normative Training Fee for Private ITIs.pdf`,
    fileName: 'Normative Training Fee for Private ITIs.pdf',
    description:' Normative training fee structure for private ITIs.',
  },
  {
    name:'Circular on DDGM and Grading Scores 2025',
    url: `${import.meta.env.BASE_URL}/assets/pdfs/Circular on DDGM AND GRADING SCORES 2025.pdf`,
    fileName: 'Circular on DDGM and Grading Scores 2025.pdf',
    description: 'Circular regarding DDGM and grading scores for the year 2025.',
  }

];
  return (
     <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Download Resources</h2>
          <p className="text-lg text-gray-600 mb-10">
            Access important documents, forms, and academic materials here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadablePdfs.map((pdf, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2h2v2H6V6zm5 0h2v2h-2V6z" clipRule="evenodd" />
                  <path d="M10 12a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{pdf.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pdf.description}</p>
                <div className="flex flex-wrap justify-center gap-3 mt-auto"> {/* mt-auto pushes buttons to bottom */}
                  <a
                    href={pdf.url}
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice for target="_blank"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </a>
                  <a
                    href={pdf.url}
                    download={pdf.fileName} // Triggers download with specified filename
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Download