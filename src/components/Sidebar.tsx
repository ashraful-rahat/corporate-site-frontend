"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebar } from "@/providers/SidebarProvider";
import { ChevronLeft, ChevronRight, Settings, FileText, Briefcase} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, toggle } = useSidebar();
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "Services",
      href: "/dashboard/services",
      icon: Briefcase,
    },
    {
      title: "Products",
      href: "/dashboard/products",
      icon: Briefcase,
    },
    {
      title: "Blogs",
      href: "/dashboard/blog",
      icon: FileText,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-72 border-r bg-background transition-transform duration-300 ease-in-out",
        !isOpen && "-translate-x-full",
        className
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="font-bold">Janata Admin</span>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto h-8 w-8 p-0"
            onClick={toggle}
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>
        <ScrollArea className="flex-1 px-3 py-2">
          <nav className="space-y-1">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      isActive && "bg-secondary"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
} 