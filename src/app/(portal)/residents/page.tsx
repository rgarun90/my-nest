import { Button } from "@/components/ui/button";
import ResidentTable from "./resident-table";
import Link from "next/link";

export default async function Residents() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Residents</h2>
          <p className="text-muted-foreground">
            View and manage all residents in your society
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="btn btn-primary" asChild>
            <Link href="/residents/new">Add Resident</Link>
          </Button>
          <Button className="btn btn-secondary" asChild>
            <Link href="/residents/import">
              Import
            </Link>
          </Button>
        </div>
      </div>
      <ResidentTable />
    </div>
  );
}
