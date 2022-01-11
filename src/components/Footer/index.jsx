import React from 'react';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import GithubIcon from '../../assets/icons/GithubIcon';
import DiscordIcon from '../../assets/icons/DiscordIcon';

export default function Footer() {
  return (
    <div className="flex z-0 text-center overflow-auto p-5 pb-1 space-x-7 text-gray-4 dark:text-gray-2">
      <a
        href="https://facebook.com/kitclubKMA"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:hover:text-white hover:text-blue transition-colors delay-100 duration-500"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://github.com/KIT-Downcode"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:hover:text-white hover:text-blue transition-colors delay-100 duration-500"
      >
        <GithubIcon />
      </a>
      <a
        href="https://discord.gg/SWYUzD9q66"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:hover:text-white hover:text-blue transition-colors delay-100 duration-500"
      >
        <DiscordIcon />
      </a>
    </div>
  );
}
