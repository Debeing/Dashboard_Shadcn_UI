import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Moon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/*LEFT*/}
      collapseButton
      {/*RIGHT*/}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />
        <Avatar>
          <AvatarImage className="rounded-full w-8 h-8" src="https://avatars.githubusercontent.com/u/1486366" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
export default Navbar;
