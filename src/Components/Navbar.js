import React from "react"
import { Tooltip } from "flowbite-react"
import Modal from "./NewRecord"

const Navbar = () => {
    return(
        <>
            <nav className="flex gap-x-[40px] mt-2 desktop:justify-center desktop:gap-x-[1400px]">
                <h2 className="text-xl h-[40px] w-[220px] py-2 px-2 font-semibold">Daily Run Rate Report</h2>
                <Tooltip content="Click to add new record" placement="bottom"><Modal className="my-1 mr-1">Add New</Modal></Tooltip>
            </nav>
        </>
    )
}

export default Navbar