import { Button, Typography } from '@material-tailwind/react'
import React from 'react'

function Menu() {
    return (
        <div className="w-full h-full mt-10 bg-white">
            {/* Title Section */}
            <h1 className="text-center text-3xl text-white">Meal Subscriptions</h1>
            <Typography className="text-center text-xl text-[#ac3967]">
                Available 5 KM Around Kormangala
            </Typography>

            {/* Select Options Section */}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-8 text-[#ac3967]">
                {/* First Select */}
                <div>
                    <select className="w-52 h-10 border rounded px-2">
                        <option value="lunch5">Lunch (5 Days)</option>
                        <option value="lunch7">Lunch (7 Days)</option>
                        <option value="dinner5">Dinner (5 Days)</option>
                        <option value="dinner7">Dinner (7 Days)</option>
                        <option value="both5">Lunch & Dinner (5 Days)</option>
                        <option value="both7">Lunch & Dinner (7 Days)</option>
                        <option value="weekly">Weekly / Bi-Weekly / Monthly</option>
                    </select>
                </div>

                {/* Second Select */}
                <div>
                    <select className="w-52 h-10 border rounded px-2">
                        <option value="roti">Roti Combo</option>
                        <option value="rice">Flavored Rice Combo</option>
                        <option value="chinese">Chinese Combo</option>
                        <option value="continental">Continental Combo</option>
                        <option value="thali">Thali Combo</option>
                    </select>
                </div>

                {/* Third Select */}
                <div>
                    <select className="w-52 h-10 border rounded px-2">
                        <option value="veg">Only Veg</option>
                        <option value="predominantlyVeg">Predominantly Veg</option>
                        <option value="predominantlyNonVeg">Predominantly Non-Veg</option>
                    </select>
                </div>

                {/* Fourth Select */}
                <div>
                    <select className="w-52 h-10 border rounded px-2">
                        <option value="customize">Customize Your Meal</option>
                        <option value="baseMeal">You Will Get A Base Meal Plan</option>
                        <option value="kit">Additional Kit And Customize It</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="w-full flex justify-center mt-5 mb-5">
                    <Button className="flex justify-center items-center text-white font-bold bg-[#ac3967]">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Menu