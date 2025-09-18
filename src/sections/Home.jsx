// export default function Home() {
//   return (
//     <div className="grid md:grid-cols-2 gap-8 items-center">
//       <div>
//         <h1 className="text-3xl md:text-5xl font-bold">Hi, I’m Fransisco</h1>
//         <p className="mt-4 text-gray-600">
//           Fresh graduate specializing in full-stack web development and AI integration. Passionate about building intelligent web applications that solve real-world problems.
//         </p>
//         <div className="mt-6 flex gap-3">
//           <a className="px-4 py-2 rounded bg-black text-white" href="#projects">View Projects</a>
//           <a className="px-4 py-2 rounded border" href="#contact">Contact</a>
//         </div>
//       </div>
//       {/* <div>
//         <img src="/portrait.jpg" alt="Profile" className="w-full rounded-2xl shadow" />
//       </div> */}
//     </div>
//   );
// }


// src/sections/Home.jsx
export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl md:text-5xl font-bold">Hi, I’m Fransisco</h1>
      <p className="mt-4 text-zinc-600 max-w-prose text-balance">
        Fresh graduate specializing in web development and AI integration.
        Passionate about building intelligent web applications that solve real-world problems.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <a className="px-4 py-2 rounded-[var(--radius-xl)] bg-black text-white"
           href="#projects">View Projects</a>
        <a className="px-4 py-2 rounded border" href="#contact">Contact</a>
      </div>
    </div>
  );
}
