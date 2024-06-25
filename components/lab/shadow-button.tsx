const ShadowButton = () => {
  return (
    <button className="inner-shadow-btn flex animate-background-shine items-center justify-center rounded-md bg-primary border-white dark:border-black border-b-[1px] px-6 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 ease-in-out hover:translate-y-1 active:translate-y-2">
      Click Me
    </button>
  );
};

export default ShadowButton;
