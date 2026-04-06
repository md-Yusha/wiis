import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import SchoolLogo from "./SchoolLogo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navItems = [
    { title: "Home", path: "/" },
    {
      title: "About Us",
      path: "/about",
      dropdown: false,
    },
    {
      title: "Academics",
      path: "/academics",
      dropdown: false,
    },
    {
      title: "Islamic Values",
      path: "/islamic-values",
      dropdown: false,
    },
    {
      title: "Admissions",
      path: "/admissions",
      dropdown: false,
    },
    { 
      title: "Events", 
      path: "/event", 
      dropdown: false,
    },
    { 
      title: "Contact Us", 
      path: "/contact", 
      dropdown: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const NavLinks = ({ mobile = false }) => (
    <div
      className={`${
        mobile
          ? "flex flex-col space-y-4"
          : "hidden md:flex md:items-center md:space-x-1 lg:space-x-4"
      }`}
    >
      {navItems.map((item) =>
        item.dropdown ? (
          <div key={item.title} className="relative group">
            {mobile ? (
              <Collapsible className="w-full">
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span
                    className={`text-base font-medium ${
                      location.pathname.startsWith(item.path)
                        ? "text-school-neon font-semibold"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 mt-2 space-y-2 border-l-2 border-school-neon/20">
                  {/* Dropdown items would go here */}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 nav-link py-2">
                  <span
                    className={`text-base font-medium transition-colors duration-200
                    ${
                      location.pathname.startsWith(item.path)
                        ? "text-school-neon font-semibold"
                        : "text-white hover:text-school-neon"
                    }`}
                  >
                    {item.title}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-school-dark/95 backdrop-blur-sm border-school-neon/20">
                  {/* Dropdown items would go here */}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        ) : (
          <Link
            key={item.title}
            to={item.path}
            className={`nav-link text-base font-medium transition-colors duration-200
                      ${
                        location.pathname === item.path
                          ? "text-school-neon font-semibold"
                          : "text-white hover:text-school-neon"
                      } ${
              mobile ? "py-2" : "py-2 px-3 rounded-md hover:bg-school-neon/10"
            }`}
          >
            {item.title}
          </Link>
        )
      )}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-school-glass backdrop-blur-md shadow-md py-2"
          : location.pathname === "/"
            ? "bg-transparent py-4"
            : "bg-school-dark py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 z-10">
            <SchoolLogo
              size="medium"
              showName={true}
              variant="modern"
              className="flex items-center gap-3"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            {isDesktop ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`border-none shadow-none ${
                      scrolled || location.pathname !== "/"
                        ? "bg-school-light/10 text-school-neon"
                        : "bg-white/20 text-white backdrop-blur-sm"
                    }`}
                  >
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[350px] bg-school-dark/95 backdrop-blur-md p-0"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-school-neon/20">
                      <SchoolLogo
                        size="medium"
                        showName={true}
                        variant="modern"
                        className="flex items-center gap-3"
                      />
                    </div>
                    <div className="flex-1 overflow-auto p-4">
                      <NavLinks mobile />
                    </div>
                    <div className="p-4 border-t border-school-neon/20">
                      <Button className="w-full bg-school-neon text-school-dark hover:bg-school-light">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`border-none shadow-none ${
                      scrolled || location.pathname !== "/"
                        ? "bg-school-light/10 text-school-neon"
                        : "bg-white/20 text-white backdrop-blur-sm"
                    }`}
                  >
                    <Menu size={24} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="px-0 max-h-[90vh] bg-school-dark">
                  <div className="p-4 border-b border-school-neon/20">
                    <div className="flex items-center justify-center mb-2">
                      <SchoolLogo
                        size="medium"
                        showName={true}
                        variant="modern"
                        className="flex items-center gap-3"
                      />
                    </div>
                    <Separator className="my-4 bg-school-neon/20" />
                    <div className="overflow-y-auto">
                      <NavLinks mobile />
                    </div>
                    <Separator className="my-4 bg-school-neon/20" />
                    <Button className="w-full bg-school-neon text-school-dark hover:bg-school-light">
                      Apply Now
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
