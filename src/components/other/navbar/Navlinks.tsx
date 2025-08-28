import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface NavLinksProps {
  links: {
    name: string;
    href?: string;
    dropdown?: {
      name: string;
      href?: string;
      subDropdown?: { name: string; href: string }[];
    }[];
  }[];
}

const NavLinks = ({ links }: NavLinksProps) => {
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {links.map((link) =>
          link.dropdown ? (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuTrigger className="hover:text-brand-primary flex items-center gap-2 text-base font-medium">
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px]">
                  {link.dropdown.map((item) => (
                    <li key={item.name} className="group relative">
                      {item.subDropdown ? (
                        <div
                          onMouseEnter={() => setOpenSubDropdown(item.name)}
                          onMouseLeave={() => setOpenSubDropdown(null)}
                        >
                          <div className="hover:text-brand-primary flex w-full cursor-default items-center justify-between px-3 py-2">
                            {item.name}
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                openSubDropdown === item.name
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </div>
                          {/* Sub-dropdown */}
                          <div
                            className={`border-brand-primary mt-1 origin-top transform border-l-2 bg-gray-50 transition-all duration-200 ease-in-out ${
                              openSubDropdown === item.name
                                ? "max-h-96 scale-y-100 opacity-100"
                                : "max-h-0 scale-y-0 overflow-hidden opacity-0"
                            }`}
                          >
                            <ul className="py-1">
                              {item.subDropdown.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    className="hover:text-brand-primary block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <NavigationMenuLink
                          asChild
                          className="hover:text-brand-primary"
                        >
                          <Link href={item.href!} className="block px-3 py-2">
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href!}
                  className="hover:text-brand-primary px-4 py-2 text-base font-medium"
                >
                  {link.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
