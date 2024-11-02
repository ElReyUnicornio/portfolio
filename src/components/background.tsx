export default function Background() {
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-screen grid grid-cols-[repeat(30,minmax(0,1fr))] lg:grid-cols-[repeat(45,minmax(0,1fr))]">
      {Array.from({ length: 30 ** 2 }).map((_, i) => (
        <div
          key={i}
          className="border-l border-b border-gray-50/15 hover:bg-white/25 transition-all duration-100 filter ease-out"
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-[#362052] pointer-events-none" />
    </div>
  );
}
