import coverImage from "@/assets/cover.png";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-8 py-8">
        <div className="flex items-center justify-center">
          <img 
            src={coverImage} 
            alt="Command of Commerce Book Cover" 
            className="max-w-full h-auto shadow-xl rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xl text-gray-700 mb-8">A provocative reinterpretation of China's economic weakness and America's enduring economic power.</p>
          <button className="bg-navy-900 text-white px-6 py-3 rounded-lg w-fit">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
} 