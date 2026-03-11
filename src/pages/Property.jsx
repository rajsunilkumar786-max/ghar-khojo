import { useState, useEffect } from "react";
import pppp from "../Utils/properties";

const Property = ({ search }) => {

  const [properties, setProperties] = useState(pppp);
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPage, setJumpPage] = useState("");

  const propertiesPerPage = 8;

  useEffect(() => {

    if (search !== undefined) {
      setProperties(search);
    } else {
      setProperties(pppp);
    }

    setCurrentPage(1);

  }, [search]);

  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;

  const currentProperties = properties.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const getPagination = () => {

    const pages = [];

    const startPages = [1, 2];
    const endPages = [totalPages - 1, totalPages];

    const middleStart = Math.max(currentPage - 1, 3);
    const middleEnd = Math.min(currentPage + 2, totalPages - 2);

    startPages.forEach(p => pages.push(p));

    if (middleStart > 3) pages.push("...");

    for (let i = middleStart; i <= middleEnd; i++) {
      pages.push(i);
    }

    if (middleEnd < totalPages - 2) pages.push("...");

    endPages.forEach(p => {
      if (p > 2) pages.push(p);
    });

    return [...new Set(pages)];
  };

  const handleJump = () => {

    const page = Number(jumpPage);

    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setJumpPage("");
    }

  };

  return (

    <div className="max-w-7xl mx-auto py-10">

      {properties.length === 0 ? (

        <div className="text-center text-gray-500 text-xl py-20">
          ❌ No Properties Found
        </div>

      ) : (

        <>
          <div className="grid md:grid-cols-4 gap-12">

            {currentProperties.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-md w-[320px] overflow-hidden shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative">
                  <img
                    src={item.images[0]}
                    className="w-full h-48 object-cover"
                    alt={item.property_title}
                  />

                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                    ❤️
                  </div>
                </div>

                <div className="p-4">

                  <div className="flex justify-between">
                    <p className="text-gray-700 text-sm font-medium">
                      {item.property_title}
                    </p>

                    <p className="text-green-700 text-sm font-medium">
                      {item.property_type}
                    </p>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between text-sm text-gray-600">

                    <div className="flex items-center gap-1">
                      📐 <span>{item.super_area_sqft} sqft</span>
                    </div>

                    <div className="flex items-center gap-1">
                      🛏 <span>{item.bhk} Beds</span>
                    </div>

                    <div className="flex items-center gap-1">
                      🛁 <span>{item.bathrooms} Baths</span>
                    </div>

                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between items-center">

                    <div>
                      <p className="text-gray-400 text-sm">Price</p>
                      <p className="font-bold">₹{item.price_inr}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Rating</p>
                      <p className="text-yellow-500">
                        ★★★★★
                        <span className="text-gray-700">
                          {item.rating} ({item.reviews_count})
                        </span>
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <div className="flex justify-center mt-12 gap-3 flex-wrap">

            {getPagination().map((page, index) => (

              page === "..." ? (

                <span key={index} className="px-3 py-2">
                  ...
                </span>

              ) : (

                <button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === page
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {page}
                </button>

              )

            ))}

          </div>

          {/* Jump Page */}

          <div className="flex justify-center mt-6 gap-3 items-center">

            <input
              type="number"
              min="1"
              max={totalPages}
              value={jumpPage}
              placeholder="Page"
              onChange={(e) => setJumpPage(e.target.value)}
              className="border px-3 py-2 rounded w-24"
            />

            <button
              onClick={handleJump}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Go
            </button>

          </div>

        </>
      )}

    </div>
  );
};

export default Property;