import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const reviews = [
  {
    quote:
      "In Command of Commerce, Vagle and Brooks provide a provocative reinterpretation of China's economic weakness-and of America's enduring economic power. Emphasizing the central role of U.S. firms in high-value, high-technology industries, Command of Commerce shows that China is still a second-tier player in the industries that matter. Required reading for understanding the world economy and the role of China-U.S. relations.",
    author: "Chris Miller",
    title: "author of Chip War: The Fight for the World's Most Critical Technology",
  },
  {
    quote:
      "The conclusions of Command of Commerce are staggering. It's rare that I read a book and am totally blown away by its implications. This is one of those books. It provides the most detailed analysis to date of how economically far ahead the United States is relative to China.",
    author: "Jonathan Markowitz",
    title: "University of Southern California",
  },
  {
    quote:
      "Vagle and Brooks' terrific analysis provides the centerpiece for the next round of China policy debates. This highly readable and compelling book reveals that America has great economic leverage over China that could be deployed in a potential crisis-leverage that would be thrown away if Washington were to decouple in peacetime.",
    author: "Susan Shirk",
    title: "University of California, San Diego",
  },
  {
    quote:
      "This compelling, provocative book thoroughly challenges the conventional wisdom about the relative strength and resilience of the American and Chinese economies. By demonstrating China's economy would suffer far more than America's from a wartime economic cutoff, Vagle and Brooks show how economic statecraft can play a crucial role in preventing conflict across the Taiwan Strait.",
    author: "Taylor R. Fravel",
    title: "Arthur and Ruth Sloan Professor of Political Science and Director, Security Studies Program, MIT",
  },
];

export default function About() {
  return (
    <div className="flex flex-col items-center p-4">
      <motion.div
        initial="hidden"
        animate="show"
        variants={item}
        className="max-w-5xl w-full space-y-8"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="flex"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl border-primary/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,transparent_20%,transparent_80%,rgba(0,0,0,0.03)_100%)]">
                <CardContent className="p-8">
                  <p className="text-xl text-muted-foreground/90 italic leading-relaxed mb-8 text-justify">
                    "{review.quote}"
                  </p>
                  <div className="border-l-2 border-primary/20 pl-4">
                    <p className="font-semibold text-foreground text-lg">
                      —{review.author}
                    </p>
                    {review.title && (
                      <p className="text-base text-muted-foreground mt-1">
                        {review.title}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
