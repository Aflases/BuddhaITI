const Faculties = () => {
      const faculties = [
    { id: 1, name: 'Late Er. Jainath Prasad', department:'Founder', image: `/assets/Founder.jpeg` },
    { id: 2, name: 'Rakesh Kumar', department: 'Director', image: `/assets/Director.jpeg` },
    ];

  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Distinguished Faculty</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our exceptional educators who bring years of experience and passion to inspire the next generation of leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-blue-100"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{faculty.department}</p>
                  <div className="h-1 w-16 bg-gradient-to-r from-orange-600 to-green-600 mx-auto rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Faculties