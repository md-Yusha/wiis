import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Removed unused imports: Lock, Button, Link

const EventCard = ({ post }) => {
  return (
    <Card
      id={post.id}
      className="Event-card overflow-hidden h-full rounded-xl border-0"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold text-white bg-school-blue/80 py-1 px-3 rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mt-2 mb-3 text-school-dark">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">By {post.author}</div>
          <div className="text-sm text-gray-500">{post.date}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const EventPage = () => {
  // Using static sample data for now
  const samplePosts = [
    { id: 1, title: 'Welcome to Our Event', excerpt: 'Dive into our latest news and stories.', author: 'Admin', date: '2025-05-02', image: '/placeholder.svg', category: 'Community' },
    { id: 2, title: 'Upcoming Events', excerpt: 'Stay updated on upcoming events at our school.', author: 'Events Team', date: '2025-04-28', image: '/placeholder.svg', category: 'Events' },
    { id: 3, title: 'Education Insights', excerpt: 'Explore our insights into education strategies.', author: 'Faculty', date: '2025-04-15', image: '/placeholder.svg', category: 'Education' },
  ];

  const [posts] = useState<any[]>(samplePosts);
  const [loading] = useState(false);
  const [error] = useState("");

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    function revealOnScroll() {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("revealed");
        }
      }
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Check on load
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);


  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-school-dark text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-school-neon">
            Events & Updates
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay informed about our latest news, events, and educational
            insights
          </p>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="Event-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-10">
                <p className="text-xl text-gray-500">Loading Event posts...</p>
              </div>
            ) : error ? (
              <div className="col-span-full text-center py-10">
                <p className="text-xl text-red-500">{error}</p>
              </div>
            ) : posts.length > 0 ? (
              posts.map((post, index) =>(
                <div
                  key={post.id}
                  className={`reveal ${
                    index % 3 === 0
                      ? "transition-delay-0"
                      : index % 3 === 1
                      ? "transition-delay-150"
                      : "transition-delay-300"
                  }`}
                >
                  <EventCard post={post} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-xl text-gray-500">
                  No Event posts found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="content-container">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </div>
  );
};

export default EventPage;
