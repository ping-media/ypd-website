import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const Links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Career Vision",
    dropdown: [
      { name: "Lorem Ipsum", href: "/#1" },
      { name: "Dolor Lorem", href: "/#2" },
      { name: "Lorem Ipsum", href: "/#3" },
    ],
  },
  { name: "Career Reinvention", href: "/career-reinvention" },
  { name: "Contact us", href: "/contact" },
];

const NavLinks = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {Links.map((link) =>
          link.dropdown ? (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuTrigger className="text-base font-medium flex items-center gap-2 hover:text-brand-primary">
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px]">
                  {link.dropdown.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink
                        asChild
                        className="hover:text-brand-primary"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className="text-base font-medium px-4 py-2 hover:text-brand-primary"
                >
                  {link.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
