import { useEffect, useState } from "react";
import pppp from "../Utils/properties";
const Property = ({ search }) => {

    const [properties,setProperties] = useState(pppp)
    // const roomType = [...new Set(properties.map(item => item.property_type))]
    // const roomCount = [...new Set(properties.map((item) => item.bhk))].sort();
    // useEffect(() => {
    //     setPropertyType(roomType)
    //     setBHK(roomCount)
    // }, [])
    // console.log(bhkVal)
    // useEffect(()=>{
    //     if(bhkVal){
    //         setProperties(pppp.filter((item)=>item.bhk==bhkVal))
    //     }
    // },[bhkVal,propertyType])
    //  const filteredProperties = search 
    //     ? properties.filter(item => 
    //         item.name.toLowerCase().includes(search)
    //       )
    //     : properties(); 
    
    return (

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 py-10">
            {properties.map((item) => (
                <div class="bg-white rounded-2xl shadow-md w-[320px] overflow-hidden shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div class="relative">
                        <img
                            src={item.images[0]}
                            class="w-full h-48 object-cover"
                        />

                        <div class="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                            ❤️
                        </div>
                    </div>

                    <div class="p-4">
                    <div className="flex justify-between">
                        <p class="text-gray-700 text-sm font-medium">
                            {item.property_title}
                        </p>
                        <p class="text-green-700 text-sm font-medium">
                            {item.property_type}
                        </p>
                    </div>

                        <hr class="my-4" />

                        <div class="flex justify-between text-sm text-gray-600">

                            <div class="flex items-center gap-1">
                                📐 <span>{item.super_area_sqft}sqft</span>
                            </div>

                            <div class="flex items-center gap-1">
                                🛏 <span>{item.bhk} Beds</span>
                            </div>

                            <div class="flex items-center gap-1">
                                🛁 <span>{item.bathrooms} Baths</span>
                            </div>

                        </div>

                        <hr class="my-4" />

                        <div class="flex justify-between items-center">

                            <div>
                                <p class="text-gray-400 text-sm">Price</p>
                                <p class="font-bold">${item.price_inr}</p>
                            </div>

                            <div class="text-right">
                                <p class="text-gray-400 text-sm">Rating</p>
                                <p class="text-yellow-500">★★★★★ <span class="text-gray-700">{item.rating}({item.reviews_count})</span></p>
                            </div>

                        </div>

                    </div>

                </div>
            ))}
        </div>

    )

};

export default Property;