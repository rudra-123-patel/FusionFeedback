import { Heart } from "lucide-react";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");

  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by Rudra Patel</span>
          </div>

          <span className="text-sm text-muted-foreground">
            © {currentYear} Fusion Feedback. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
