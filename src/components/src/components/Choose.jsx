const features = [
  {
    icon: "✍️",
    title: "Oson yozish",
    desc: "Sodda va qulay editor yordamida postlaringizni tez va oson yarating.",
  },
  {
    icon: "🚀",
    title: "Tez ishlaydi",
    desc: "Sayt React asosida qurilgan bo'lib, juda tez va silliq ishlaydi.",
  },
  {
    icon: "🔒",
    title: "Xavfsiz",
    desc: "Sizning hisobingiz va ma'lumotlaringiz to'liq himoyalangan.",
  },
  {
    icon: "🌍",
    title: "Keng auditoriya",
    desc: "Postlaringiz minglab o'quvchilarga yetib boradi.",
  },
];

function Choose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Nega aynan Blogify?
          </h2>
          <p className="text-gray-600">
            Blog yozish va o'qish uchun eng qulay platformani tanlang
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Choose;
