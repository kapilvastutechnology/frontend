import { NavLink } from "react-router";
import { Button } from "./ui/button";
// import DropDownProfile from "./ui/DropDownProfile";

export default function Header() {
    return (
        <div className="bg-gray-200 px-5 py-[7px] flex justify-between items-base" >
            <h1 className="text-[30px] font-bold" >Shopal</h1>
            <div className="space-x-5" >
                <NavLink to={'/login'}>
                <Button variant= "link" className={'text-[16px'} >Login</Button>
                </NavLink>
                
                <NavLink to={'/signup'}>
                <Button variant= "link" className={'text-[16px'} >Sign Up</Button>
                </NavLink>
            </div>
            {/* <DropDownProfile/> */}
        </div>
    )
}
