import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Appendix() {
  return (
    <div className="flex flex-col items-center p-4">
      <motion.div
        initial="hidden"
        animate="show"
        variants={item}
        className="max-w-4xl w-full"
      >
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 gap-2"
            asChild
          >
            <a
              href="/appendix.pdf"  // This path is correct when PDF is in public folder
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FileText className="w-5 h-5" />
              Download Appendix
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
