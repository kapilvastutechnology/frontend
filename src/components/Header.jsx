import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Button } from "./ui/button";
import { IoLogoBuffer } from "react-icons/io";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <NavigationMenu className="flex items-center justify-between px-4 py-3 w-full mx-auto">
 
        <div className="text-3xl font-bold ">
          <a href="#" ><IoLogoBuffer/></a>
        </div>

        <div className="flex gap-3">
          <Button className="bg-gradient from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600">
            <NavLink to={'/signup'} >SingUp</NavLink>
           </Button>

          <Button className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white">
            <NavLink to={'/login'} >Login</NavLink>
            
          </Button>
        </div>
      </NavigationMenu>
    </header>
  );
}
