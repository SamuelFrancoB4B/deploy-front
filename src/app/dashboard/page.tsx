import DashboardInfo from "@/components/DashboardInfo/DashboardInfo"


const dashboard = () => {
  return (
    <div className="container">
      <div className="padding-section">
        <div className="flex w-full justify-between pb-20">
          <DashboardInfo />
        </div>
      </div>
    </div>
  )
}

export default dashboard