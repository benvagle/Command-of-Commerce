import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Authors() {
  return (
    <div className="flex flex-col items-center p-4">
      <motion.div
        initial="hidden"
        animate="show"
        variants={item}
        className="max-w-4xl w-full space-y-12"
      >
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardContent className="pt-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.05 }}
              className="flex flex-col md:flex-row gap-6"
            >
              <img
                src="/src/img/ben-vagle.png"
                alt="Ben A. Vagle"
                className="w-64 h-80 object-cover rounded-lg shadow-md"
              />
              <div className="prose dark:prose-invert space-y-4">
                <p className="text-lg text-justify">
                  Ben A. Vagle is a policy analyst at the U.S. Department of the Treasury's Office of Investment Security.
                </p>
                
                <p className="text-lg text-justify">
                  Vagle graduated from Dartmouth College, where he was awarded Honors in Economics and Highest Honors in Government. He also received the Rockefeller Prize in International Relations and the Chase Peace Prize for work on his senior thesis, as well as the Economics Department Outstanding Achievement Award.
                </p>
                
                <p className="text-lg text-justify">
                  Immediately following his graduation, Vagle worked at Bates White Economic Consulting solving complex data challenges for lawyers and economists.
                </p>

                <p className="text-sm text-muted-foreground mt-6">
                  This book was accepted before Vagle's government service, is based entirely on open sources, and does not necessarily reflect the views of the US Government or US Treasury.
                </p>
              </div>
            </motion.div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300">
          <CardContent className="pt-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.05 }}
              className="flex flex-col md:flex-row gap-6"
            >
              <img
                src="/src/img/steve-brooks.png"
                alt="Stephen G. Brooks"
                className="w-64 h-80 object-cover rounded-lg shadow-md"
              />
              <div className="prose dark:prose-invert space-y-4">
                <p className="text-lg text-justify">
                  Stephen G. Brooks is Professor of Government at Dartmouth and has previously held fellowships at Harvard and Princeton. He is the author of four books:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Producing Security: Multinational Corporations, Globalization, and the Changing Calculus of Conflict (2005)</li>
                  <li>World out of Balance: International Relations and the Challenge of American Primacy (with William Wohlforth, 2008)</li>
                  <li>America Abroad: The United States' Global Role in the 21st Century (with William Wohlforth, Oxford, 2016)</li>
                  <li>Political Economy of Security (forthcoming)</li>
                </ul>

                <p className="text-lg text-justify">
                  He has published numerous articles in journals such as International Security, International Organization, Foreign Affairs, Journal of Conflict Resolution, Journal of Politics, Perspectives on Politics, and Security Studies.
                </p>

                <p className="text-lg text-justify">
                  He received his PhD in Political Science with Distinction from Yale University, where his dissertation received the American Political Science Association's Helen Dwight Reid Award for the best doctoral dissertation in international relations, law, and politics.
                </p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
