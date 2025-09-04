import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
    <NavigationMenu
      viewport={false}
      className="!overflow-visible"
      onValueChange={() => setOpenSubDropdown(null)} // reset when menu closes/changes
    >
      <NavigationMenuList>
        {links.map((link) =>
          link.dropdown ? (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuTrigger className="hover:text-brand-primary flex cursor-pointer items-center gap-2 text-base font-medium">
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="relative !overflow-visible">
                <ul className="grid w-[200px]">
                  {link.dropdown.map((item) => (
                    <li key={item.name} className="group relative">
                      {item.subDropdown ? (
                        <div
                          onMouseEnter={() => setOpenSubDropdown(item.name)}
                          onMouseLeave={() => setOpenSubDropdown(null)}
                          className="relative cursor-pointer"
                        >
                          {/* Parent Item */}
                          <div className="hover:text-brand-primary flex w-full cursor-pointer items-center justify-between px-3 py-2">
                            {item.name}
                            <ChevronRight size={16} />
                          </div>

                          {/* Sub-dropdown */}
                          {openSubDropdown === item.name && (
                            <div className="absolute top-0 left-full z-50 ml-1">
                              <div className="min-w-[180px] rounded-md border border-gray-200 bg-white shadow-lg">
                                <ul className="py-1">
                                  {item.subDropdown.map((subItem) => (
                                    <li
                                      key={subItem.href}
                                      className="cursor-pointer"
                                    >
                                      <Link
                                        href={subItem.href}
                                        className="hover:text-brand-primary block cursor-pointer px-4 py-2 text-base transition-colors hover:bg-gray-100"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavigationMenuLink
                          asChild
                          className="hover:text-brand-primary cursor-pointer"
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
                  className="hover:text-brand-primary cursor-pointer px-4 py-2 text-base font-medium"
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
