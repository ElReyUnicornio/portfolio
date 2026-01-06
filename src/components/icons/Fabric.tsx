import Tooltip from "../atoms/tooltip";
import fabric from "../../assets/fabric.png";

export default function Fabric() {
  return (
    <div className="relative group">
      <img
        src={fabric.src}
        className="h-8 w-8 md:h-14 md:w-14 mx-2 first:ml-0"
      ></img>
      <Tooltip>Fabric</Tooltip>
    </div>
  );
}
