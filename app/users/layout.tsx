import DesktopSidebar from "../components/sidebar/DesktopSidebar"
import MobileFooter from "../components/sidebar/MobileFooter"
import Sidebar from "../components/sidebar/Sidebar"

export default async function UsersLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <DesktopSidebar />
        <MobileFooter />
        <main className="h-full lg:pl-20">
          {children}
        </main>
      </div>
    </Sidebar>
  )
};

