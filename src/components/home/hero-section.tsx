import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Premium Digital Designs for Your Creative Projects
            </h1>
            <p className="mb-8 text-lg opacity-90">
              Discover thousands of high-quality digital designs, templates, and
              resources created by top designers worldwide.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-white text-purple-600">
                Browse Designs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Custom Orders
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
              alt="Design showcase"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}