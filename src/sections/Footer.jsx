const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/bhawanak0504" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/bhawana.kumari17" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/bhawana-kumari-aa849a27a" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a href="https://twitter.com/bhawanak0504" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" /></a>
          <a href="https://discord.com/channels/xshine18x" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/assets/discord.svg" alt="discord" className="w-1/2 h-1/2" />
          </a>
      </div>

      <p className="text-white-500">© 2024 Bhawana Kumari. All rights reserved.</p>
    </footer>
  );
};

export default Footer;