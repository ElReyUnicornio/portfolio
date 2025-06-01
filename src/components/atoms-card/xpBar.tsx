interface XpBarProps {
  value: number;
  max: number;
  legend?: string;
}

export default function XpBar(props: XpBarProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative grid grid-cols-3 grid-rows-1 w-8 h-2 md:w-16 md:h-3 bg-[#2B2A41] rounded-full overflow-hidden shadow-md">
        {Array.from({ length: props.max }, (_, i) => (
          <Bar key={i} index={i} value={props.value} max={props.max} />
        ))}
      </div>
      <p className="w-10 md:w-auto leading-none md:leading-normal text-[10px] md:text-xs text-center text-white/75 font-semibold md:font-bold mt-1 md:mt-0">
        {props.value + " " + props.legend}
      </p>
    </div>
  );
}

function Bar({ index, ...props }: { index: number } & XpBarProps) {
  return (
    <>
      {index === 1 && (
        <div
          key={"bar_" + index}
          className="absolute z-0 top-0 left-0 h-full bg-gradient-to-tl from-[#1BBFE3] to-[#6103E4]"
          style={{ width: `${(props.value / props.max) * 100 + 1}%` }}
        />
      )}
      <div
        key={"bar_segment_" + index}
        className={`h-full w-full border-y first:rounded-l-full last:rounded-r-full first:border-l border-r border-[#46469B] relative z-10`}
      />
    </>
  );
}
