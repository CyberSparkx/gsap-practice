import Button from "./Button";

const NAV_LINKS = ["ABOUT", "PROJECTS", "RECOGNITION", "CONTACT"];
 
const Navbar= () => {
  return (
    <nav className="nav-bar absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-[22px] z-10">
      {/* Brand */}
      <div className="flex flex-col leading-tight">
        <span
          className="text-white text-[22px] tracking-[0.06em]"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          NAREN ROY
        </span>
        <span
          className="text-white/65 text-[11px] tracking-[0.12em] font-normal"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Practice Work 26
        </span>
      </div>
 
      {/* Links + Resume */}
      <div className="flex items-center gap-9">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white text-[13px] font-bold tracking-[0.14em] no-underline hover:opacity-65 transition-opacity duration-200"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {link}
          </a>
        ))}
        <Button
          label="RESUME"
          variant="dark"
          bg="#2b2623"
          size="sm"
          animDuration={0.45}
        />
      </div>
    </nav>
  );
}
 

export default Navbar