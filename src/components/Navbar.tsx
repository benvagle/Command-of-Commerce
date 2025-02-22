import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <motion.header
      variants={item}
      className={cn("w-full px-4", className)}
    >
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-center gap-6 text-muted-foreground">
          {[
            ["HOME", "/"],
            ["AUTHORS", "/authors"],
            ["PRAISE", "/about"],
            ["PRESS", "/press"],
            ["APPENDIX", "/appendix"],
          ].map(([label, path]) => (
            <Link
              key={label}
              to={path}
              className="hover:text-primary transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
