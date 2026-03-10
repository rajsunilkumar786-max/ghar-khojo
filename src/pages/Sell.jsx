
const Sell = () => {
  return (
    <>
      <section class="bg-white py-12">

        <div class="max-w-6xl mx-auto px-6">

          <h2 class="text-3xl font-semibold text-center text-gray-800">
            Find Your Dream Property
          </h2>

          <div class="bg-gray-100 rounded-xl shadow p-6 mt-8">

            <div class="grid md:grid-cols-4 gap-4">

              <input
                type="text"
                placeholder="Search location"
                class="border rounded-lg p-3 w-full"
              />

              <select class="border rounded-lg p-3">
                <option>Property Type</option>
                <option>Rooms</option>
                <option>Plots</option>
                <option>House</option>
                <option>Flats</option>
                <option>Villa</option>
                <option>Farm House</option>
              </select>

              <select class="border rounded-lg p-3">
                <option>Min Price</option>
                <option>$1000</option>
                <option>$5000</option>
                <option>$10000</option>
              </select>

              <select class="border rounded-lg p-3">
                <option>Max Price</option>
                <option>$20000</option>
                <option>$50000</option>
                <option>$100000</option>
              </select>

            </div>

            <button class="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
              Search Property
            </button>

          </div>

        </div>

      </section>

      <section class="py-16">

        <div class="max-w-7xl mx-auto px-6">

          <h2 class="text-3xl font-semibold text-center text-gray-800">
            Browse Property Categories
          </h2>

          <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">


            <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
              <div class="text-4xl">🛏️</div>
              <h3 class="mt-4 font-semibold text-gray-800">Rooms</h3>
              <p class="text-sm text-gray-500">120 Listings</p>
            </div>


            <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
              <div class="text-4xl">📍</div>
              <h3 class="mt-4 font-semibold text-gray-800">Plots</h3>
              <p class="text-sm text-gray-500">85 Listings</p>
            </div>


            <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
              <div class="text-4xl">🏠</div>
              <h3 class="mt-4 font-semibold text-gray-800">Houses</h3>
              <p class="text-sm text-gray-500">210 Listings</p>
            </div>


            <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
              <div class="text-4xl">🏢</div>
              <h3 class="mt-4 font-semibold text-gray-800">Flats</h3>
              <p class="text-sm text-gray-500">150 Listings</p>
            </div>


            <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
              <div class="text-4xl">🏡</div>
              <h3 class="mt-4 font-semibold text-gray-800">Villas</h3>
              <p class="text-sm text-gray-500">60 Listings</p>
            </div>


            <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
              <div class="text-4xl">🌾</div>
              <h3 class="mt-4 font-semibold text-gray-800">Farm House</h3>
              <p class="text-sm text-gray-500">40 Listings</p>
            </div>

          </div>

        </div>

      </section>

      <section class="py-16 bg-white">

        <div class="max-w-6xl mx-auto px-6 text-center">

          <h2 class="text-3xl font-semibold text-gray-800">
            Booking Process
          </h2>

          <p class="text-gray-500 mt-3">
            Simple steps to book your dream property
          </p>

          <div class="grid md:grid-cols-4 gap-8 mt-12">


            <div class="p-6 bg-gray-100 rounded-xl">
              <div class="text-4xl">🔍</div>
              <h3 class="mt-4 font-semibold">Search Property</h3>
              <p class="text-sm text-gray-500 mt-2">
                Browse thousands of available properties
              </p>
            </div>


            <div class="p-6 bg-gray-100 rounded-xl">
              <div class="text-4xl">📅</div>
              <h3 class="mt-4 font-semibold">Schedule Visit</h3>
              <p class="text-sm text-gray-500 mt-2">
                Book a property visit with our agents
              </p>
            </div>


            <div class="p-6 bg-gray-100 rounded-xl">
              <div class="text-4xl">💰</div>
              <h3 class="mt-4 font-semibold">Make Payment</h3>
              <p class="text-sm text-gray-500 mt-2">
                Secure your property with easy payment
              </p>
            </div>


            <div class="p-6 bg-gray-100 rounded-xl">
              <div class="text-4xl">🔑</div>
              <h3 class="mt-4 font-semibold">Get the Keys</h3>
              <p class="text-sm text-gray-500 mt-2">
                Move into your dream property
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  )
};
export default Sell;