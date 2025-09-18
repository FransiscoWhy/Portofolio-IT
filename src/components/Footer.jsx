export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-sm">
        <span>© {new Date().getFullYear()} Fransisco Wahyu Syahbani</span>
        <div className="flex gap-3">
          <a href="https://github.com/username" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/username" target="_blank">LinkedIn</a>
          <a href="mailto:email@domain.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
