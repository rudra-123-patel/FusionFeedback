import GradientHeader from "@/components/gradient-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart,
  Map,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      {/* Hero Section */}
      <GradientHeader
        title="Shape the future of our product"
        subtitle="Feedback fusion is where your ideas come to life. Suggest features, vote on what matters most, and follow our public roadmap."
      >
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/feedback/new"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-medium text-blue-600 transition-colors hover:bg-gray-100"
          >
            Submit Feedback
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/roadmap"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-gray-100"
          >
            View Roadmap
            <Map className="h-4 w-4" />
          </Link>
        </div>
      </GradientHeader>

      {/* How It Works Section */}
      <section className="space-y-8">
        <h2 className="text-center text-2xl font-bold">How It Works</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Submit Ideas */}
          <Card className="gap-3">
            <CardHeader>
              <MessageSquare className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Submit Ideas</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Share your suggestions and feature requests with the community.
            </CardContent>
          </Card>

          {/* Vote & Prioritize */}
          <Card className="gap-3">
            <CardHeader>
              <BarChart className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Vote & Prioritize</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Upvote ideas you love to help us understand what matters most.
            </CardContent>
          </Card>

          {/* Track Progress */}
          <Card className="gap-3">
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Track Progress</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Follow our public roadmap to see what we&#39;re working on and
              what&#39;s next.
            </CardContent>
          </Card>

          {/* See Results */}
          <Card className="gap-3">
            <CardHeader>
              <Zap className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>See Results</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Watch as your feedback transforms into real features and
              improvements in our product.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-center">
        <div className="inline-grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold">1,234+</div>
            <div className="text-muted-foreground">Suggestions</div>
          </div>
          <div>
            <div className="text-3xl font-bold">8,901+</div>
            <div className="text-muted-foreground">Votes</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div className="text-muted-foreground">Features</div>
          </div>
        </div>
      </section>
    </div>
  );
}
