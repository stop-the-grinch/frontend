
import FrostyEvil from "../../../public/frosty-evil.svg";

export default function Frosty({ msg, evil }) {
    return (
        <div className="relative">
            <img className="drop-shadow-glow" src={FrostyEvil.src} alt="Frosty the Snowman" />

        </div>
    )
}