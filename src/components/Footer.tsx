interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="w-full bg-blue-500 text-white py-8">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-xl">Generic Food Dashboard</h3>

        <div className="flex flex-col md:flex-row
          items-center justify-center
          gap-4 md:gap-10
          text-sm">
          <button onClick={() => onNavigate("home")} className="header">
          EN/FR
        </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;