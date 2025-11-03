// components/app-sidebar.jsx
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DashboardIcon,
  AssessmentIcon,
  ReportsIcon,
  QuestionsIcon,
  NewsCentreIcon,
  HelpAndSupportIcon,
} from "./icons/Icons";

// Menu items with collapsible submenus
const menuItems = [
  {
    title: "Dashboard",
    Icon: DashboardIcon,
    url: "/dashboard",
  },
  {
    title: "Assessment",
    Icon: AssessmentIcon,
    // icon: "/message-programming.svg",
    url: "/assessment",
  },
  {
    title: "Reports",
    Icon: ReportsIcon,
    url: "/reports",
  },
  {
    title: "Questions",
    Icon: QuestionsIcon,
    url: "/questions",
    isCollapsible: true,
    subItems: [
      { title: "MCQ Questions", url: "/questions/mcq" },
      { title: "Coding Questions", url: "/questions/coding" },
      { title: "Subjective Questions", url: "/questions/subjective" },
      { title: "Question Bank", url: "/questions/bank" },
    ],
  },
  {
    title: "News Centre",
    Icon: NewsCentreIcon,
    url: "/news",
    isCollapsible: true,
    subItems: [
      { title: "Article", url: "/news/announcements" },
      { title: "Topics", url: "/news/updates" },
      { title: "Section Topics", url: "/news/blog" },
      { title: "Tags", url: "/news/blog" },
      { title: "Topic Tags", url: "/news/blog" },
    ],
  },
  {
    title: "Help & Support",
    Icon: HelpAndSupportIcon,
    url: "/support",
  },
];

// User data
const userData = {
  name: "Latika Grover",
  role: "Sr. Hiring Manager",
  avatar: "L",
};

export function SidebarCustom() {
  const [activeItem, setActiveItem] = useState("Assessment");
  const [openMenus, setOpenMenus] = useState(["Questions"]); // Default open menus
  const [hoveredItem, setHoveredItem] = useState(null);
  const toggleMenu = (title) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar
      collapsible="icon"
      className="border-r-0 bg-[var(--surface-subtle-primary)]"
    >
      {/* Header with Logo */}
      <SidebarHeader className="p-0 group-data-[collapsible=icon]:p-2">
        <img
          src="/logo.svg"
          className="h-auto group-data-[collapsible=icon]:hidden"
        />
        <div className="hidden group-data-[collapsible=icon]:flex justify-center">
          <img src="/brain.svg" className="w-[25px] h-[25px]" alt="Icon" />
        </div>
      </SidebarHeader>

      {/* Navigation Menu */}
      <SidebarContent className="border-r-0 group-data-[collapsible=icon]:px-2 px-[22px] w-[240px] group-data-[state=collapsed]:w-[84px]">
        <SidebarMenu className="group-data-[state=collapsed]:items-center">
          {menuItems.map((item) => {
            // Non-collapsible menu item
            const IconComponent = item.Icon;
            const isHovered = hoveredItem === item.title;
            const isActive = activeItem === item.title;
            console.log(
              "active item------->",
              activeItem,
              "hovered-->",
              isHovered
            );

            if (!item.isCollapsible) {
              return (
                <SidebarMenuItem key={item.title} className="">
                  <SidebarMenuButton
                    isActive={isActive}
                    tooltip={item.title}
                    onClick={() => setActiveItem(item.title)}
                    onMouseEnter={() => setHoveredItem(item.title)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`cursor-pointer py-[12px] px-[16px] h-[40px] text-[var(--greyscale-text-tertiary)] hover:text-[var(--greyscale-darker-primary)] hover:bg-[#EAEAFA66] rounded-[6px] ${
                      isActive
                        ? "text-[var(--text-label-primary)] bg-[#EAEAFACC]"
                        : ""
                    }`}
                  >
                    {/* <img src={item.icon} className="h-5 w-5" /> */}
                    <IconComponent
                      isActive={activeItem === item.title}
                      isHovered={isHovered}
                      className="w-4 h-4"
                    />
                    <span className="font-medium text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }

            return (
              <Collapsible
                key={item.title}
                open={openMenus.includes(item.title)}
                onOpenChange={() => toggleMenu(item.title)}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      onMouseEnter={() => setHoveredItem(item.title)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`cursor-pointer py-[12px] px-[16px] h-[40px] text-[var(--greyscale-text-tertiary)] hover:text-[var(--greyscale-darker-primary)] hover:bg-[#EAEAFA66] rounded-[6px] ${
                        isActive
                          ? "text-[var(--text-label-primary)] bg-[#EAEAFACC]"
                          : ""
                      }`}
                    >
                      <IconComponent
                        isActive={activeItem === item.title}
                        isHovered={isHovered}
                        className="w-4 h-4"
                      />
                      <span className="font-medium text-sm">{item.title}</span>
                      <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="px-2.5">
                    <SidebarMenuSub className="border-l-0">
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            isActive={activeItem === subItem.title}
                            onClick={() => setActiveItem(subItem.title)}
                            onMouseEnter={() => setHoveredItem(item.title)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`cursor-pointer py-[12px] px-[16px] h-[40px] text-[var(--greyscale-text-tertiary)] hover:text-[var(--greyscale-darker-primary)] hover:bg-[#EAEAFA66] rounded-[6px] ${
                              activeItem === subItem.title
                                ? "text-[var(--text-label-primary)] bg-[#EAEAFACC]"
                                : ""
                            }`}
                          >
                            <span className="text-sm">{subItem.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer with User Profile */}
      <SidebarFooter>
        <SidebarMenu className="items-center">
          <SidebarMenuItem className="p-1 hover:bg-[#EAEAFACC] rounded-[6px]">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-gray-50 flex items-center gap-3"
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src="/avatar.svg" alt="@shadcn" />
                <AvatarFallback className="bg-yellow-400 font-bold text-gray-900">
                  {userData.avatar}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-left group-data-[collapsible=icon]:hidden">
                <p className="text-sm font-semibold text-gray-900">
                  {userData.name}
                </p>
                <p className="text-xs text-gray-500">{userData.role}</p>
              </div>
              <img src="/chevron-up-down.svg" className="h-6 w-6" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
