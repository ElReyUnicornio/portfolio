interface BookmarkProps extends React.SVGProps<SVGSVGElement> {
  from: string;
  to: string;
  id: string;
}

export default function Bookmark(props: BookmarkProps) {
  return (
    <svg
      {...props}
      width="83"
      height="164"
      viewBox="0 0 83 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-3.05176e-05 0H40.717H83V164L40.717 146L-3.05176e-05 164V0Z"
        fill={`url(#bookmark_linear_${props.id})`}
      />
      <defs>
        <linearGradient
          id={`bookmark_linear_${props.id}`}
          x1="0.521984"
          y1="-7.27474e-07"
          x2="77.3858"
          y2="166.59"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={props.from} />
          <stop offset="1" stopColor={props.to} />
        </linearGradient>
      </defs>
    </svg>
  );
}
