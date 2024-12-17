
import React from "react";
import {
    Typography,
    Button,
    IconButton,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../assets/lasuvai.png'

function FooterComp() {
    return (
        <footer className="relative w-full bg-[#ac3967]">
            {/* <hr className="h-0.5 mb-5 mt-2 bg-gray-300 border-0" /> */}
            <div className="mx-auto w-full px-8">
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default FooterComp;
