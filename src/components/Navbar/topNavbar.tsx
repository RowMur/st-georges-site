import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigationMenu";
import { competitionType } from "@/types/competition";
import { Dispatch, SetStateAction } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

interface NavbarProps {
  setSideNavOpen: Dispatch<SetStateAction<boolean>>;
  cambridgeCompetitions: competitionType[];
  elyCompetitions: competitionType[];
}

const TopNavbar = ({
  setSideNavOpen,
  cambridgeCompetitions,
  elyCompetitions,
}: NavbarProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex flex-col justify-center">
          <button
            className="sm:hidden w-6 text-darkBlue"
            onClick={() => {
              setSideNavOpen(true);
            }}
          >
            <GiHamburgerMenu />
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/club-calendar">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Club Calendar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:inline-block">
          <NavigationMenuTrigger>Local Leagues</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex p-6 sm:w-[500px]">
              <li className="max-w-[40%]">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 pr-6 no-underline outline-none focus:shadow-md"
                    href={
                      cambridgeCompetitions
                        ? "/localLeagues/" + cambridgeCompetitions[0].id
                        : ""
                    }
                  >
                    <div className="mb-2 mt-4 text-lg font-bold text-darkBlue">
                      Cambridge
                    </div>
                    <p className="text-sm leading-tight text-blue">
                      For the 22/23 season we have 5 teams playing in the
                      Cambridge League.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div>
                {cambridgeCompetitions &&
                  cambridgeCompetitions.map((e) => (
                    <ListItem
                      key={e.id}
                      href={"/localLeagues/" + e.id}
                      title={e.name}
                    />
                  ))}
              </div>
            </ul>
            <ul className="flex p-6 sm:w-[500px]">
              <li className="max-w-[40%]">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 pr-6 no-underline outline-none focus:shadow-md"
                    href={
                      elyCompetitions
                        ? "/localLeagues/" + elyCompetitions[0].id
                        : ""
                    }
                  >
                    <div className="mb-2 mt-4 text-lg font-bold text-darkBlue">
                      Ely
                    </div>
                    <p className="text-sm leading-tight text-blue">
                      For the 22/23 season we have 2 teams playing in the Ely
                      League.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div>
                {elyCompetitions &&
                  elyCompetitions.map((e) => (
                    <ListItem
                      key={e.id}
                      href={"/localLeagues/" + e.id}
                      title={e.name}
                    />
                  ))}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-blue hover:bg-grey focus:bg-grey",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default TopNavbar;
