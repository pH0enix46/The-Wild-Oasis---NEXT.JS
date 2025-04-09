// // //
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="border-b border-[var(--color-primary-900)] px-8 py-5 shadow shadow-gray-600">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
