import Logo from "@/components/atoms/Logo";

export default function Hero() {
  return (
    <div className="flex gap-3 items-center">
      <Logo className="w-24 h-6 light:text-black dark:text-white" />
      <div className="hidden sm:flex items-center justify-center whitespace-nowrap p-1 rounded-full h-6 dark:bg-zinc-400/20">
        <span className="flex-1 px-2 font-medium text-zinc-400 text-xs">
          v2.8.1
        </span>
      </div>
      <a
        className="hidden sm:flex max-w-fit min-w-min items-center justify-between whitespace-nowrap px-1 h-7 rounded-full bg-zinc-700/50 border hover:bg-zinc-700/80 border-zinc-500/50 cursor-pointer"
        href="https://www.heroui.com/blog/v2.8.0"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="flex-1 px-2 font-semibold text-zinc-100 text-xs">
          HeroUI v2.8.0
          <span aria-label="emoji" role="img">
            🔥
          </span>
        </span>
      </a>
    </div>
  );
}
