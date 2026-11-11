import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/data/site";
import { ArrowRight, Calendar } from "lucide-react";

// Curated Unsplash images for blog posts matching luxury elevators and architectural design
const blogImages = [
  "/images/lift-r6061.jpg",
  "/images/lift-r6051.jpg",
  "/images/motor-heavy.jpg",
];

export default function BlogInsights() {
  return (
    <section id="blog" className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      <SectionLabel number="20" label="From Our Blog" />
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text tracking-tight">
          Latest News &amp; <span className="text-gold italic font-normal">Insights</span>
        </h2>
        <Button variant="outline" className="hidden sm:inline-flex text-xs font-semibold tracking-wider uppercase border-border/80 hover:border-gold hover:text-gold transition-all">
          View All Blogs
        </Button>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 items-stretch">
        {blogPosts.map((post, index) => {
          const imgUrl = blogImages[index % blogImages.length];

          return (
            <div
              key={post.title}
              className="group rounded-3xl overflow-hidden bg-surface backdrop-blur-xl border border-border/80 hover:border-gold/60 transition-all duration-500 shadow-xl flex flex-col justify-between relative"
            >
              {/* Top Illumination Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              <div>
                {/* Image Container with Zoom */}
                <div className="aspect-video bg-bg-alt overflow-hidden relative">
                  <img
                    src={imgUrl}
                    alt={post.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6">
                  {/* Date Metadata */}
                  <div className="flex items-center gap-2 text-xs text-gold/80 mb-2 font-light">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{post.date}</span>
                  </div>

                  {/* Post Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-text tracking-wide group-hover:text-gold transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-gold tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View All Button */}
      <div className="text-center mt-8 sm:hidden">
        <Button variant="outline" className="text-xs font-semibold tracking-wider uppercase border-border/80 hover:border-gold hover:text-gold transition-all">
          View All Blogs
        </Button>
      </div>
    </section>
  );
}