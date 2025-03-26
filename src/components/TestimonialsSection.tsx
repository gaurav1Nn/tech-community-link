
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Final Year, Computer Science",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "CampusConnect helped me prepare for interviews at Google. The roadmaps and insights from seniors were invaluable for my preparation strategy."
  },
  {
    name: "Rahul Gupta",
    role: "Alumnus, Software Engineer at Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "I love how easy it is to stay connected with my college community. Sharing my interview experience has helped so many juniors, and that's incredibly fulfilling."
  },
  {
    name: "Aditya Patel",
    role: "Second Year, Information Technology",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "The tech roadmap feature guided me on what to learn next. It's like having a personalized mentor who knows exactly what our college placement trends are."
  }
];

const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from students and alumni who have experienced the CampusConnect advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name} 
              className="bg-white p-6 rounded-2xl border border-border shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-foreground italic">"{testimonial.quote}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
