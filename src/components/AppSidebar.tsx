import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Plus,
  Projector,
  Search,
  Settings,
  User2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenu>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  src="/public/Geek.jpg"
                  alt="logo"
                  width={20}
                  height={20}
                />
                <span>Eric Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator></SidebarSeparator>
      <SidebarContent>
        <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
         <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/#">
                <Projector />
                See all projects
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/#">
                <Plus />
                Add projects
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
      </SidebarGroup>
      {/*COLLAPSABLE*/}
      <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel>
           <CollapsibleTrigger>
            Collapsable group
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/#">
                <Projector />
                See all projects
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/#">
                <Plus />
                Add projects
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
      </SidebarGroup>
      </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  John Doe
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSidebar;
