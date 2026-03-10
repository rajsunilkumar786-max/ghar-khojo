import "./Buy.css";

const Buy = () => {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-700 uppercase text-center">
          Sell Property
        </h2>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow p-6 mt-8">

          <div className="grid md:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Search location"
              className="border rounded-lg p-3 w-full"
            />

            <select className="border rounded-lg p-3">
              <option>Property Type</option>
              <option>House</option>
              <option>Flat</option>
              <option>Villa</option>
              <option>Plot</option>
            </select>

            <select className="border rounded-lg p-3">
              <option>Min Price</option>
              <option>$1000</option>
              <option>$5000</option>
              <option>$10000</option>
            </select>

            <select className="border rounded-lg p-3">
              <option>Max Price</option>
              <option>$20000</option>
              <option>$50000</option>
              <option>$100000</option>
            </select>

          </div>

          <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
            Search Property
          </button>

        </div>

        {/* Property Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
              className="w-full h-56 object-cover"
              alt=""
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-700">
                LIST VIEW LISTING
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              className="w-full h-56 object-cover"
              alt=""
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-700">
                LIST WITH SIDEBAR
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              className="w-full h-56 object-cover"
              alt=""
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-700">
                GRID VIEW LISTING
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              className="w-full h-56 object-cover"
              alt=""
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-700">
                GRID WITH SIDEBAR
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Buy;