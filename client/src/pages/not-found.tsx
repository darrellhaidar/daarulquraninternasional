import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 pt-20">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-9xl font-bold text-primary mb-4" data-testid="text-404">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" asChild>
            <a data-testid="link-back-home">
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </a>
          </Button>
        </Link>
      </div>
    </div>
  );
}
