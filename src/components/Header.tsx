import {useTranslation} from 'react-i18next'
import'../i18n'



const Header = () => {

    const {t, i18n} = useTranslation()
    const handleLanguageChange = (e:any) => {
        i18n.changeLanguage(e.target.value);
    }

  return (
    <header className="w-full px-4 bg-blue-500 text-white py-4">
      <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <p className="text-2xl">{t('title')}</p>
        <select id="lang-select" onChange={handleLanguageChange} className="header ml-auto">
            <option className="text-black" value="en">English</option>
            <option className="text-black" value="jp">日本語</option>
        </select>


      </nav>
    </header>
  );
};

export default Header;