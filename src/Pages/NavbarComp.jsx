import React, { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

function NavList() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Home</h3>
            <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Locations</h3>
            <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Menu</h3>
            <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">About Us</h3>
            <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Clients</h3>
            <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Contact</h3>
        </ul>
    );
}
import LaSuvai from '../assets/lasuvai.png'

export function NavbarComp() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <div className="flex flex-col">

            <div className="mx-auto w-full px-6 py-3  mt-3 bg-pink-500 rounded-t-3xl" >
                <div className="flex items-center justify-between text-white">
                    <img src={LaSuvai} className="w-32 h-16" alt="" />
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <br />
                    
                    <IconButton
                        variant="text"
                        color="white"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                    <div className="flex flex-col gap-4 lg:hidden">
                        <div className="relative flex w-full gap-2 md:w-max">
                            <Input
                                type="search"
                                color="white"
                                label="Search"
                                className="pr-20"
                            />
                            <Button
                                size="sm"
                                color="white"
                                className="!absolute right-1 top-1 rounded"
                            >
                                <MagnifyingGlassIcon className="h-4 w-4" />
                            </Button>
                        </div>
                        <IconButton variant="text" color="white" className="w-10">
                            <ShoppingBagIcon className="h-4 w-4" />
                        </IconButton>
                        <Typography>
                            Login
                        </Typography>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}