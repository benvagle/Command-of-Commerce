import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import pressImage from "@/img/foreign-affairs-ships.png";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const pressItems = [
  {
    title: "The Real China Trump Card",
    date: "February 20, 2025",
    description: "In this Foreign Affairs article, Brooks and Vagle challenge conventional wisdom about U.S.-China economic power dynamics, arguing that America's economic leverage over China is far greater than commonly understood.",
    link: "https://www.foreignaffairs.com/united-states/real-china-trump-card-brooks-vagle",
    outlet: "Foreign Affairs",
    image: pressImage
  },
  // Add more press items as they come in
];

export default function Press() {
  return (
    <div className="flex flex-col items-center p-4">
      <motion.div
        initial="hidden"
        animate="show"
        variants={item}
        className="max-w-5xl w-full"
      >
        {pressItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            className="w-full"
          >
            <Card className="transition-all duration-300 hover:shadow-xl bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,transparent_20%,transparent_80%,rgba(0,0,0,0.03)_100%)]">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={`Illustration for ${item.title}`}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.date}
                    </p>
                    <h3 className="text-3xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xl text-muted-foreground mb-6">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center text-lg"
                    >
                      Read on {item.outlet} →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
