"use client";

import * as React from "react";
import fetchCompetitions from "../../modules/fetchCompetitions";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigationMenu";
import { competition } from "@/types/competition";

const { useState, useEffect } = React;

const Navbar = () => {
  const [cambridgeCompetitions, setCambridgeCompetitions] =
    useState<competition[]>();
  const [elyCompetitions, setElyCompetitions] = useState<competition[]>();

  useEffect(() => {
    const getCompetitions = async () => {
      const cambridgeResponse = await fetchCompetitions("cambridge");
      const elyResponse = await fetchCompetitions("elydistrict");

      setCambridgeCompetitions(cambridgeResponse);
      setElyCompetitions(elyResponse);
    };

    getCompetitions();
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Local Leagues</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className={"row-span-" + cambridgeCompetitions?.length}>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
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
              {cambridgeCompetitions &&
                cambridgeCompetitions.map((e) => (
                  <ListItem key={e.id} title={e.name} />
                ))}
            </ul>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className={"row-span-" + elyCompetitions?.length}>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-bold text-darkBlue">
                      Ely
                    </div>
                    <p className="text-sm leading-tight text-blue">
                      For the 22/23 season we have 2 teams playing in the Ely
                      leagues.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {elyCompetitions &&
                elyCompetitions.map((e) => (
                  <ListItem key={e.id} title={e.name} />
                ))}
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

export default Navbar;
