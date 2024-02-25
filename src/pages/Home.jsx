import gifFile from "/balloons.gif";
import { useState } from "react";

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  const inlineStyles = `
    video {
      transition: transform 0.5s ease-in-out; /* Smooth transition */
    }
    video:hover {
      transform: scale(1.2); /* Zoomed scale - 1.2 times */
    }
  `;

  return (
    <div className="pt-20 flex items-center">
      <div className="w-1/2 text-center pl-20">
        <img
          src={gifFile}
          width="490"
          height="380"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          className={isZoomed ? "zoomed" : ""}
          alt="Balloons GIF"
        />
      </div>
      <div className="w-1/2 text-left" style={{ maxWidth: "800px" }}>
        <p
          className="text-left"
          style={{ color: "var(--header-color)", fontSize: "3rem" }}
        >
          Ballooooning
        </p>
        <br></br>
        <p
          className="text-left"
          style={{ color: "var(--header-color)", fontSize: "2rem" }}
        >
          Balloons on Fantom
        </p>

        <br></br>
        <div className="text-left">
          <p style={{ color: "var(--description-color)", fontSize: "1.2rem" }}>
            Our mission is to provide balloons to every Fantomer!
          </p>
          <br />
          <p style={{ color: "var(--content-color)", fontSize: "1.2rem" }}>
            You can read more in our whitepaper.
          </p>
        </div>
      </div>
      <style>{inlineStyles}</style>
    </div>
  );
}
