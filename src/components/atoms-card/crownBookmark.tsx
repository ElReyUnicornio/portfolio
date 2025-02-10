import XpBar from "./xpBar";
import crown from "../../assets/ERUcrown.png";
import Bookmark from "../atoms/bookmark";

export default function CrownBookmark() {
  return (
    <div className="flex flex-col items-center relative mr-[10px]">
      <a
        href="https://www.instagram.com/srreyunicornio/"
        target="_blank"
        className="hover:scale-125 hover:bg-glow transition-transform duration-100"
      >
        <img src={crown.src} alt="corona" />
      </a>
      <XpBar value={2} max={3} legend="año exp" />
      <Bookmark
        from="#18E98E"
        to="#550F9F"
        className="absolute -z-10 -top-10 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
