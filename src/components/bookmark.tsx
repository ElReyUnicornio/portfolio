interface BookmarkProps extends React.SVGProps<SVGSVGElement> {
    from: string;
    to: string;
}

export default function Bookmark(props: BookmarkProps) {
    return (
        <svg {...props} width="83" height="164" viewBox="0 0 83 164" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-3.05176e-05 0H40.717H83V164L40.717 146L-3.05176e-05 164V0Z" fill="url(#paint0_linear_304_171)"/>
            <defs>
                <linearGradient id="paint0_linear_304_171" x1="0.521984" y1="-7.27474e-07" x2="77.3858" y2="166.59" gradientUnits="userSpaceOnUse">
                    <stop stop-color={props.from}/>
                    <stop offset="1" stop-color={props.to}/>
                </linearGradient>
            </defs>
        </svg>
    );
}