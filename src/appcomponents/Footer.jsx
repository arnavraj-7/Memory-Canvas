import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Memory Canvas</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Capture, preserve, and relive your most cherished moments—all in one place.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {[
            {
              title: 'Explore',
              links: ['Gallery', 'Journal', 'Timeline', 'Collections'],
            },
            {
              title: 'Connect',
              links: ['Community', 'Events', 'Stories', 'Collaborate'],
            },
            {
              title: 'Resources',
              links: ['Blog', 'Help Center', 'Privacy Policy', 'Terms of Service'],
            },
            {
              title: 'About',
              links: ['Our Story', 'Team', 'Contact', 'Careers'],
            },
          ].map((section, i) => (
            <div key={i} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                {section.title}
              </h2>
              <nav className="list-none mb-10">
                {section.links.map((text, idx) => (
                  <li key={idx}>
                    <a className="text-gray-400 hover:text-white cursor-pointer">{text}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 Memory Canvas — All Rights Reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white ml-3">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 4.9912 3.657 9.1289 8.438 9.877V14.89h-2.54v-2.89h2.54V10.41c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.872h2.773l-.443 2.89h-2.33v6.987C18.343 21.129 22 16.9912 22 12z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="text-gray-400 hover:text-white ml-3">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 2a9.14 9.14 0 01-2.83 1.08A4.52 4.52 0 0016.11 2c-2.52 0-4.57 2.08-4.57 4.64 0 .36.04.71.12 1.04-3.8-.2-7.17-2.05-9.42-4.88a4.66 4.66 0 00-.62 2.34c0 1.62.81 3.05 2.05 3.89A4.38 4.38 0 012 8.37v.06a4.57 4.57 0 003.66 4.48 4.44 4.44 0 01-2.04.08 4.58 4.58 0 004.28 3.21A9.05 9.05 0 012 19.54a12.8 12.8 0 006.29 1.85c7.55 0 11.68-6.45 11.68-12.05 0-.18-.01-.35-.02-.53A8.18 8.18 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-white ml-3">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a3 3 0 110-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-white ml-3">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.85-3.037-1.852 0-2.136 1.445-2.136 2.938v5.669H9.352V9h3.415v1.561h.048c.476-.899 1.637-1.85 3.369-1.85 3.6 0 4.266 2.368 4.266 5.448v6.293zM5.337 7.433a2.07 2.07 0 01-2.067-2.066 2.07 2.07 0 112.067 2.066zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451C23.205 24 24 23.226 24 22.271V1.729C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
