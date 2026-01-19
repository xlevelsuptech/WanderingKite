import { ServiceCard } from "@/components/services/ServiceCard";
import { TrustSection } from "@/components/shared/TrustSection";
import { Camera, Video, Building2, Mic } from "lucide-react";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950" />
                <div className="relative z-10 text-center">
                    <h1 className="mb-6 text-6xl font-bold leading-tight md:text-7xl lg:text-8xl">
                        Creative Infrastructure
                        <br />
                        <span className="bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            for Modern Creators
                        </span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-xl text-zinc-400">
                        Photography • Equipment Rentals • Studio Spaces • Podcast Production
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <span className="flex items-center gap-2 text-sm text-zinc-500">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            Available Now
                        </span>
                        <span className="text-zinc-700">•</span>
                        <span className="text-sm text-zinc-500">Based in India</span>
                    </div>
                </div>
            </section>

            {/* Service Verticals Grid */}
            <section className="container mx-auto px-6 py-24">
                <h2 className="mb-12 text-center text-4xl font-bold">Our Services</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    <ServiceCard
                        title="Photography"
                        description="Event and lifestyle photography that captures authentic moments"
                        icon={<Camera />}
                        href="/photography"
                        accentColor="amber"
                    />
                    <ServiceCard
                        title="Equipment Rentals"
                        description="Professional cameras, lenses, and gear for your creative projects"
                        icon={<Video />}
                        href="/rentals"
                        accentColor="blue"
                    />
                    <ServiceCard
                        title="Studio Space"
                        description="Premium studio facilities for photography and video production"
                        icon={<Building2 />}
                        href="/studio"
                        accentColor="purple"
                    />
                    <ServiceCard
                        title="Podcast Studio"
                        description="Fully-equipped podcast recording space with professional acoustics"
                        icon={<Mic />}
                        href="/podcast"
                        accentColor="green"
                    />
                </div>
            </section>

            {/* Trust Section */}
            <TrustSection />
        </main>
    );
}
