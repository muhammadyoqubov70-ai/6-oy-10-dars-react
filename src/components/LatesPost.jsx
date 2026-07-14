import PostCard from "./PostCard";

export const posts = [
  {
    id: 1,
    title: "Frontend dasturlashni qanday o'rganish kerak",
    description: "React va CSS bilan zamonaviy interfeyslar yaratish yo'llari",
    content:
      "Frontend dasturlash bugungi kunda eng talab qilinadigan sohalardan biri. React, Vite va Tailwind CSS kabi vositalar yordamida zamonaviy va tez interfeyslar yaratish mumkin. Bu yo'lni o'rganish sabr va amaliyot talab qiladi.",
    category: "Dasturlash",
    author: "Muhammadamin",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "Vaqtni to'g'ri boshqarish sirlari",
    description: "Har kuni samarali ishlash uchun amaliy maslahatlar",
    content:
      "Vaqtni boshqarish - bu shunchaki ish jadvali tuzish emas, balki ustuvorliklarni to'g'ri belgilash san'ati. Har kuni eng muhim vazifalarni birinchi o'ringa qo'yish samaradorlikni oshiradi.",
    category: "O'zini rivojlantirish",
    author: "Muhammadamin",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 3,
    title: "Tarix sahifalaridan saboqlar",
    description: "O'tmishdan bugungi kunga foydali xulosalar",
    content:
      "Tarixni o'rganish bizga bugungi kunni tushunish uchun kalit beradi. Jaloliddin Manguberdi kabi tarixiy shaxslarning hayoti bizga sabr va matonat haqida saboq beradi.",
    category: "Tarix",
    author: "Muhammadamin",
    image: "https://via.placeholder.com/800x400",
  },
];

function LatesPost() {
  return (
    <section className="lates-post">
      <h2>So'nggi maqolalar</h2>
      <div className="lates-post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default LatesPost;
