const linkedinHref = "https://www.linkedin.com/in/ajay-sudani-3835a797/";
const contactHref = "#contact";

export function Hero() {
  return (
    <div className="bg-red bg-opacity-60 md:bg-opacity-70 LargeCursor">
      <div className="container text-center sm:text-left py-24 sm:py-32">
        <h1 className="FontFancy font-extrabold text-5xl sm:text-7xl md:text-8xl text-white">
          Ajay <span className="text-[.75em]">Sudani</span>
        </h1>

        <p className="text-xl sm:text-4xl sm:font-light sm:max-w-lg text-lightPrimary mt-4 sm:mt-6">
          <span>I build things for the web</span>
        </p>

        <div className="sm:text-xl text-gray-100 mt-4 sm:mt-6">
          <div>
            <label>Email: </label>
            <span>ajaysudani07@gmail.com</span>
          </div>
          <div className="mt-2 sm:mt-4">
            <label>Mobile: </label>
            <span>+91 7405510654</span>
          </div>
        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-12 sm:text-lg">
          <a
            href={linkedinHref}
            className="BrandButton sm:py-3"
            rel="noreferrer"
            target="_blank"
          >
            Connect on LinkedIn
          </a>

          <a href={contactHref} className="OutlineButton sm:py-3">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
