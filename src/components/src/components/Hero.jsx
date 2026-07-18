import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Fikrlaringizni <span className="text-blue-600">dunyoga</span> ulashing
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Blogify — bu sizning fikr, tajriba va bilimlaringizni bemalol
            yozib, minglab o'quvchilarga yetkazish uchun platforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Boshlash
            </Link>
            <Link
              to="/blog"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Postlarni ko'rish
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80"
            alt="Blogify hero"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
