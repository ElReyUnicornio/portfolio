interface XpBarProps {
  value: number;
  max: number;
  legend: string;
}

export default function XpBar(props: XpBarProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative grid grid-cols-3 grid-rows-1 w-16 h-3 bg-[#2B2A41] rounded-full overflow-hidden shadow-md">
        {Array.from({ length: props.max }, (_, i) => (
          <>
            {i === 1 && (
              <div
                key={"bar_" + i}
                className="absolute z-0 top-0 left-0 h-full bg-gradient-to-tl from-[#1BBFE3] to-[#6103E4]"
                style={{ width: `${(props.value / props.max) * 100 + 1}%` }}
              />
            )}
            <div
              key={"bar_segment_" + i}
              className={`h-full w-full border-y first:rounded-l-full last:rounded-r-full first:border-l border-r border-[#46469B] relative z-10`}
            />
          </>
        ))}
      </div>
      <p className="text-xs text-center text-white/75 font-bold">
        {props.value + " " + props.legend}
      </p>
    </div>
  );
}
