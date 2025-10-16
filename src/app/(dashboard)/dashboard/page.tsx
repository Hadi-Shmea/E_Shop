import { CustomerGrowthMap } from "@/components/CustomerGrowthMap";
import { SalesTarget } from "@/components/SalesTarget";
import { SalesThisYear } from "@/components/SalesThisYear";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* === ROW 1 === */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE (Sales Target + Chart) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <SalesTarget current={231032444} target={500000000} />
          <SalesThisYear />
        </div>

        {/* RIGHT SIDE (Stats + Banner) */}
        <div className="flex flex-col gap-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-xl shadow">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <h2 className="text-xl font-bold">$81,000</h2>
              <span className="text-green-500 text-sm">
                +10.6% from last week
              </span>
            </div>
            <div className="bg-card p-4 rounded-xl shadow">
              <p className="text-sm text-muted-foreground">Total Customers</p>
              <h2 className="text-xl font-bold">5,000</h2>
              <span className="text-green-500 text-sm">
                +1.9% from last week
              </span>
            </div>
            <div className="bg-card p-4 rounded-xl shadow">
              <p className="text-sm text-muted-foreground">
                Total Transactions
              </p>
              <h2 className="text-xl font-bold">12,000</h2>
              <span className="text-green-500 text-sm">
                +3.6% from last week
              </span>
            </div>
            <div className="bg-card p-4 rounded-xl shadow">
              <p className="text-sm text-muted-foreground">Total Products</p>
              <h2 className="text-xl font-bold">5,000</h2>
              <span className="text-red-500 text-sm">-1.5% from last week</span>
            </div>
          </div>

          {/* Banner Card */}
          <div className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Increase your sales</h2>
            <p className="text-sm mb-4">
              Discover the Proven Methods to Skyrocket Your Sales! Unleash the
              Potential of Your Business and Achieve Remarkable Growth. Whether
              you’re a seasoned entrepreneur or just starting out.
            </p>
            <Button className="bg-card text-blue-600">Learn More</Button>
          </div>
        </div>
      </div>

      {/* === ROW 2 === */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE (Customer Growth Map) */}
        <div className="lg:col-span-2 bg-card rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Customer Growth</h2>
            <button className="text-sm text-blue-600">Show All</button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">3 Provinces</p>
          <CustomerGrowthMap />
        </div>

        {/* RIGHT SIDE (Popular Products Table) */}
        <div className="bg-card rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Product Popular</h2>
            <button className="text-sm text-blue-600">Show All</button>
          </div>

          {/* Simple Table */}
          <table className="w-full text-sm">
            <thead className="text-muted-foreground border-b">
              <tr>
                <th className="py-2 text-left">Product</th>
                <th className="py-2 text-left">Price</th>
                <th className="py-2 text-left">Sales</th>
                <th className="py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 flex items-center gap-2">
                  <img
                    src="/sneaker.png"
                    alt="Sneaker"
                    className="w-10 h-10 rounded"
                  />
                  <span>Kanky Kitadakate (Green)</span>
                </td>
                <td>$20.00</td>
                <td>3000</td>
                <td>
                  <span className="px-2 py-1 rounded bg-green-100 text-green-600 text-xs">
                    Success
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 flex items-center gap-2">
                  <img
                    src="/sneaker.png"
                    alt="Sneaker"
                    className="w-10 h-10 rounded"
                  />
                  <span>Kanky Kitadakate (Green)</span>
                </td>
                <td>$20.00</td>
                <td>2311</td>
                <td>
                  <span className="px-2 py-1 rounded bg-green-100 text-green-600 text-xs">
                    Success
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
