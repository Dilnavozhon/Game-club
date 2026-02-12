import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <div className="flex items-center justify-center">
      <LoaderIcon
        role="status"
        aria-label="Loading"
        className={cn("size-6 animate-spin", className)}
        {...props}
      />
    </div>
  );
}

export { Spinner };
