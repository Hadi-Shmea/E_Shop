// app/(dashboard)/dashboard/products/page.tsx
import { redirect } from "next/navigation";

export default function ProductsPage() {
  redirect("/dashboard/products/sneakers");
}
