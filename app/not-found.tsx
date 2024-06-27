export default function NotFound() {
  return (
    <div className="flex h-auto w-full grow flex-col items-center justify-center">
      <h1 className="flex items-center gap-x-3 text-center text-xl font-semibold leading-none text-accent-foreground">
        404
        <span className="text-lg font-medium">Page Not Found</span>
      </h1>
    </div>
  );
}
