import Link from "next/link";
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
    dropdown?: { name: string; href: string }[];
  }[];
}

const NavLinks = ({ links }: NavLinksProps) => {
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
