interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <header className="w-full px-4 bg-blue-500 text-white py-4">
      <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <p className="text-2xl">Generic Food Dashboard</p>
        <button onClick={() => onNavigate("home")} className="header ml-auto">
          EN/FR
        </button>


      </nav>
    </header>
  );
};

export default Header;