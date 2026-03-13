import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="contacts"
      aria-label="React Devs KE Socials"
      className="py-6 bg-[#03045e] border-t-[2px] border-[#c0c0d6]"
    >
      <div className="flex flex-col justify-center gap-9">
        {/* Social media icons with links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://twitter.com/ReactDevsKE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-[#61dafb] transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/reactdeveloperske"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-[#61dafb] transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/reactdevske"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-[#61dafb] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC9_eVcPBk4T-DcZLHpQfy4w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-[#61dafb] transition duration-300"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center font-mono md:flex-row">
        <p className="mt-6 text-base text-slate-200 md:mt-0 pt-6">
          Copyright &copy; {new Date().getFullYear()} React Devs KE.
        </p>
      </div>
    </footer>
  );
};

export default Footer;