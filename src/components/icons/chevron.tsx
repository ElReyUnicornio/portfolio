interface Props {
  className?: string;
  rotation?: number;
}

export default function Chevron(props: Props) {
  return (
    <svg
      className={props.className || "w-6 h-6 text-white"}
      style={{ transform: `rotate(${props.rotation || 0}deg)` }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8 10 4 4 4-4"
      ></path>
    </svg>
  );
}
