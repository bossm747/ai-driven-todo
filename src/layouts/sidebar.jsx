import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-primary px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="w-full flex-1">
            {/* Add nav bar content here if needed */}
          </div>
          <UserDropdown />
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <MobileFooter />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <img src="/images/logo.png" alt="PlataPay Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">PlataPay</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-base font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <img src="/images/logo.png" alt="PlataPay Logo" className="h-8 w-8" />
          <span>PlataPay</span>
        </NavLink>
        {navItems.map((item) => (
          <SidebarNavLink key={item.to} to={item.to}>
            {item.icon}
            {item.title}
          </SidebarNavLink>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-base font-semibold",
        isActive
          ? "text-primary bg-primary/10"
          : "text-gray-700 hover:text-primary hover:bg-primary/5"
      )
    }
  >
    {children}
  </NavLink>
);

const MobileFooter = () => (
  <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-2">
    <nav className="flex justify-around items-center">
      {navItems.slice(0, 5).map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center p-2",
              isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
            )
          }
        >
          {item.icon}
          <span className="text-xs">{item.title}</span>
        </NavLink>
      ))}
    </nav>
  </footer>
);

export default Layout;