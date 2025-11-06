import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-3xl">Page Not Found</p>
      <Link href={"/"} className="mt-8">
        <Button className="cursor-pointer">Go to Homepage</Button>
      </Link>
    </section>
  );
}
