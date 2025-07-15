export function MagicDivider() {
  return (
    <div className="relative z-10 flex justify-center py-8">
      <div
        className="w-full max-w-3xl h-[2px] rounded-full bg-gradient-to-r from-transparent via-lavender-mist to-transparent shadow-lg shadow-lavender-mist/50"
        aria-hidden="true"
      />
    </div>
  )
}
