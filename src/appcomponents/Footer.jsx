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
                    <a className="text-gray-400 hover:text-white">{text}</a>
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
            {[
              { icon: 'facebook', link: '#' },
              { icon: 'twitter', link: '#' },
              { icon: 'instagram', link: '#' },
              { icon: 'linkedin', link: '#' },
            ].map((item, idx) => (
              <a key={idx} className="ml-3 text-gray-400" href={item.link}>
                {/* Replace below with appropriate SVGs or icons */}
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
