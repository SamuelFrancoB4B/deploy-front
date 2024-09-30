"use client"
import { AuthContext } from "@/contexts/authContext"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"

const DashboardInfo = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if (!user?.login) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const hasOrders = user?.user.orders && user.user.orders.length > 0;

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="pb-10">Hello {user?.user.name}</h1>
      <div className=" flex justify-start items-start w-2/3 bg-slate-500 p-2 rounded-md">
        <h4 className="text-white">Information</h4>
        <div className="w-2/3 px-4 pt-4 ">
        </div>
      </div>
      <div className="grid grid-cols-3 w-2/3 pl-5 py-8 justify-between items-stretch">
        <h4>Name: {user?.user.name}</h4>
        <h4>Address: {user?.user.address}</h4>
        <h4>Email: {user?.user.email}</h4>

      </div>


      <div className=" flex justify-start items-start w-2/3 bg-slate-500 p-2 rounded-md">
        <h4 className="text-white">Orders</h4>
      </div>
      <div className="w-2/3 px-4 pt-4 ">

        {!hasOrders ? (<p className="text-gray-500 text-center">You have no orders yet.</p>
        ) : (
          user?.user.orders?.map((order, i) => (
            <div key={i} className="flex  bg-slate-300 justify-between p-2 m-2 rounded-md">
              <h4>Order {order.id}</h4>
              <h4>Order {order.date}</h4>
              <h4>Order {order.status}</h4>


            </div>
          ))
        )}

      </div>
    </div>
  )
}

export default DashboardInfo