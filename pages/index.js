import { useState, useEffect } from "react";
import Jazzicon from "@metamask/jazzicon";

const JazzAvatar = (props) => {
  const { size, address } = props;

  const [jazzicon, setJazzicon] = useState();

  useEffect(() => {
    if (!address || !size) return;
    const slice = address.slice(2, 10);
    const seed = parseInt(slice, 16);
    setJazzicon(Jazzicon(size, seed));
  }, [address, size]);

  return (
    <div
      className="contents"
      dangerouslySetInnerHTML={{ __html: jazzicon?.outerHTML }}
      style={{ width: size, height: size }}
    />
  );
};

export default function IndexPage() {
  return (
    <div>
      <JazzAvatar
        size={32}
        address="0x29DC4Fb3F6A05C54f18d77e1D7DE39FC80bd65A9"
      />
      <JazzAvatar
        size={32}
        address="0xCFC15a1666c4B58C21ffD2F1B297f5904449FAAd"
      />
    </div>
  );
}
