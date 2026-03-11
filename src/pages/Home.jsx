import { Link } from "react-router-dom";
import Property from "./Property";
import { useState } from "react";
import properties from "../Utils/properties";

const Home = () => {

  const [search, setSearch] = useState(properties);

  const [SearchValue, setSearchValue] = useState("");
  const [SearchCategory, setSearchCategory] = useState("");
  const [SearchBhk, setSearchBhk] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const propertyType = [...new Set(properties.map(p => p.property_type))];

  const bhk = [...new Set(properties.map(p => p.bhk))].sort((a, b) => a - b);

  const prices = [...new Set(properties.map(p => p.price_inr))].sort((a, b) => a - b);

  const handleFilter = () => {
    const filtered = properties.filter((item) => {

      const matchesTitle =
        item.property_title.toLowerCase().includes(SearchValue.toLowerCase());

      const matchesCategory =
        SearchCategory === "" ||
        item.property_type.toLowerCase() === SearchCategory.toLowerCase();

      const matchesBhk =
        SearchBhk === "" || item.bhk.toString() === SearchBhk;

      const matchesPrice =
        (minPrice === "" || item.price_inr >= Number(minPrice)) &&
        (maxPrice === "" || item.price_inr <= Number(maxPrice));

      return matchesTitle && matchesCategory && matchesBhk && matchesPrice;
    });
    setSearch(filtered);
  };

  return (
    <>
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')",
        }}
      >

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-white w-full">

          <h1 className="text-5xl font-bold leading-tight">
            We will help you find <br />
            your <span className="text-green-500">Wonderful</span> home
          </h1>

          <p className="mt-4 text-gray-200 max-w-xl">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>

          <div className="mt-10 bg-white/30 backdrop-invert backdrop-opacity-19 rounded-xl shadow-xl p-6 text-black">

            <ul className="flex gap-4 mb-6">
              <li>
                <Link
                  to="/buy"
                  className="bg-green-600 text-white px-6 py-2 rounded-md"
                >
                  Buy
                </Link>
              </li>

              <li>
                <Link
                  to="/sell"
                  className="bg-green-600 text-white px-6 py-2 rounded-md"
                >
                  Sell
                </Link>
              </li>

              <li>
                <Link
                  to="/rent"
                  className="bg-green-600 text-white px-6 py-2 rounded-md"
                >
                  Rent
                </Link>
              </li>
            </ul>

            <div className="grid md:grid-cols-4 gap-4">

              <div>
                <label className="text-sm font-medium">Search :</label>
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  placeholder="Search your keywords"
                  className="w-full mt-2 border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Select Categories :</label>
                <select
                  className="w-full mt-2 border rounded-lg p-2"
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option value="">-Select-</option>

                  {propertyType.map((pt, index) => (
                    <option key={index} value={pt}>
                      {pt}
                    </option>
                  ))}

                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Select BHK :</label>
                <select
                  className="w-full mt-2 border rounded-lg p-2"
                  onChange={(e) => setSearchBhk(e.target.value)}
                >
                  <option value="">-Select-</option>

                  {bhk.map((b, index) => (
                    <option key={index} value={b}>
                      {b}
                    </option>
                  ))}

                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Min Price :</label>
                <select
                  className="w-full mt-2 border rounded-lg p-2"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                >
                  <option value="">-Select-</option>

                  {prices.map((price, index) => (
                    <option key={index} value={price}>
                      {price}
                    </option>
                  ))}

                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Max Price :</label>
                <select
                  className="w-full mt-2 border rounded-lg p-2"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                >
                  <option value="">-Select-</option>

                  {prices.map((price, index) => (
                    <option key={index} value={price}>
                      ₹{price}
                    </option>
                  ))}

                </select>
              </div>

            </div>

            <button
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
              onClick={handleFilter}
            >
              Search
            </button>

          </div>
        </div>
      </section>

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-semibold text-gray-800">
              Featured Properties
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              A great platform to buy, sell and rent your properties without any agent or commissions.
            </p>

          </div>

        </div>

        <div>
          <Property search={search} />
        </div>

      </section>
    </>
  );
};

export default Home;