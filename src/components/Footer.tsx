export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 pt-8 pb-12">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <p
            className="text-xs tracking-[0.2em] text-white/40 uppercase text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 DANISH ALFATTAH. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
