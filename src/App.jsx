import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AssessmentContent from "@/components/AssessmentContent";
import { SidebarCustom } from "./components/Sidebar";

export default function App() {
  return (
    <>
      <SidebarProvider
      className="border-r-0"
      >
        <SidebarCustom />
        <SidebarInset>
          <main>
            <SidebarTrigger />
          </main>
          <AssessmentContent />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
