import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";

export function Home() {
  return (
    <main>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="outline">Button</Button>
        <Button variant="outline" size="icon" aria-label="Submit">
          <ArrowUpIcon />
        </Button>
      </div>
      <div>
        <Button>Default</Button>
        <Button variant="secondary" size="lg">
          secondary
        </Button>
        <Button size="icon" aria-label="Submit">
          <ArrowUpIcon />
        </Button>
      </div>
    </main>
  );
};

export default Home;
