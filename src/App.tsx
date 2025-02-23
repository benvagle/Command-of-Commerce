import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import bookCover from "./img/book-cover.png";
import About from "./pages/About";
import Appendix from "./pages/Appendix";
import Authors from "./pages/Authors";
import Press from "./pages/Press";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Home() {
  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl w-full mt-8"
      >
        {/* Hero Section */}
        <motion.section variants={item}>
          <Card className="p-8 hover:shadow-2xl transition-all duration-300">
            {/* Blurb Bubbles Section */}
            <div className="flex gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1.05 }}
                className="flex-1 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,transparent_20%,transparent_80%,rgba(0,0,0,0.03)_100%)]"
              >
                <p className="text-muted-foreground text-xl italic mb-3">
                  "Required reading for understanding the world economy and China-US relations."
                </p>
                <span className="block text-lg text-muted-foreground/80">
                  —Chris Miller, Author of Chip War: The Fight for the World's Most Critical Technology
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1.05 }}
                className="flex-1 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,transparent_20%,transparent_80%,rgba(0,0,0,0.03)_100%)]"
              >
                <p className="text-muted-foreground text-xl italic mb-3">
                  "The conclusions of Command of Commerce are staggering."
                </p>
                <span className="block text-lg text-muted-foreground/80">
                  —Jonathan Markowitz, Professor, University of Southern California
                </span>
              </motion.div>
            </div>

            {/* Main Content Section */}
            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full lg:w-1/2 mb-6 lg:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[400px] lg:min-w-[400px]">
                    <img
                      src={bookCover}
                      alt="Command of Commerce Book Cover"
                      className="w-full h-auto object-contain mb-6"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="w-full max-w-[400px] md:max-w-[300px] bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href="https://global.oup.com/academic/product/command-of-commerce-9780197802304?cc=us&lang=en&#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ORDER NOW
                    </a>
                  </Button>
                </div>
              </motion.div>

              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The conventional wisdom has held that China's economic power is very close to America's and that Washington cannot undertake a broad economic cutoff of China without hurting itself as much, or more. That conventional wisdom is wrong.
                </p>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  In Command of Commerce, Ben Vagle and award-winning international relations scholar Stephen Brooks show that America's economic power has been underestimated because conventional economic measures have ignored America's unprecedented control over the world's largest multinational corporations. China's economic power has been overestimated due to Beijing's manipulation of its economic data and measurement issues presented by China's uniquely structured economy.
                </p>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Vagle and Brooks show that Washington could impose massive, disproportionate harm on Beijing if it imposed a broad economic cutoff on China in cooperation with its allies or via a distant naval blockade. Across six scenarios, China's short-term economic losses from a broad cutoff range from being 5 to 11 times higher than America's.
                </p>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  And in the long run, America and almost all its allies would return to previous economic growth levels; in contrast, China's growth would be permanently degraded.
                </p>
              </div>
              <div className="clear-both"></div>
            </div>
          </Card>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={item} className="text-center border-t pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Command of Commerce. All rights
            reserved.
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/press" element={<Press />} />
        <Route path="/appendix" element={<Appendix />} />
      </Route>
    </Routes>
  );
}
