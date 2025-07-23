export default function CTA() {
  return (
    <div className="relative z-50 flex items-center justify-center gap-x-3 border-b border-divider px-6 py-2">
      <a
        className="text-small flex items-end sm:text-[0.93rem] text-foreground hover:opacity-80 transition-opacity"
        href="https://heroui.chat?utm_source=heroui.com&utm_medium=top-banner"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span aria-label="rocket" className="hidden md:block" role="img">
          🚀
        </span>
        <span className="animate-text-gradient md:ml-1 font-medium bg-clip-text text-transparent bg-[linear-gradient(90deg,#27272A_0%,#52525B_50%,#52525B_100%)] dark:bg-[linear-gradient(90deg,#E5E5E5_0%,#A1A1AA_50%,#E5E5E5_100%)]">
          Generate, edit and deploy beautiful apps
        </span>
      </a>
      <a
        className="flex group min-w-[120px] items-center font-semibold text-white dark:text-black bg-black dark:bg-white shadow-sm gap-1.5 relative overflow-hidden rounded-full p-[1px]"
        href="https://heroui.chat?utm_source=heroui.com&utm_medium=top-banner"
        rel="noopener noreferrer"
      >
        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black dark:bg-white px-3 py-1 text-sm font-medium text-white dark:text-black">
          HeroUI Chat
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="outline-hidden transition-transform group-hover:translate-x-0.5 [&>path]:stroke-[2px]"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 12h16m0 0l-6-6m6 6l-6 6"
            ></path>
          </svg>
        </div>
      </a>
    </div>
  );
}
