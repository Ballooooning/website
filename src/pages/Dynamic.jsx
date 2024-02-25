export default function Dynamic() {
  return (
    <div className="pt-20 w-full max-w-lg mx-auto text-center">
      <h1>Dynamic Balloon NFT</h1>
      <h2>Dynamic Balloon NFT</h2>
      <h3>Overview</h3>
      <p>
        The Dynamic Balloon NFT project combines the functionality of an ERC20
        token named Air and a Balloon NFT. When purchasing Air tokens, a dynamic
        Balloon NFT is automatically minted and associated with the buyer&apos;s
        wallet. The Air tokens are then streamed to the wallet at a rate of 1
        token per second until the full purchased amount is received. The
        Balloon NFT&apos;s appearance changes over time, with its color changing
        every second during the streaming process, and its size growing based on
        the number of Air tokens held.
      </p>
      <p>
        The project also includes a website that showcases the evolving
        Ballooooning NFTs in a collage-like image, creating a display of the
        community&apos;s NFTs holdings.
      </p>

      <h3>Features</h3>
      <ul>
        <li>
          Purchase Air tokens and receive a dynamic Balloon NFT that changes
          color and grows in size.
        </li>
        <li>
          Stream Air tokens to your wallet at a rate of 1 token per second.
        </li>
        <li>
          Update your stream by purchasing more Air tokens, selling them, or
          transferring them to others.
        </li>
        <li>
          Collage website displays all the NFTs side by side, forming an
          evolving image.
        </li>
      </ul>

      <h3>Superfluid Integration</h3>
      <p>
        The project leverages Fantomfluid, a smart contract framework that
        introduces the concept of Super Tokens. Super Tokens extend the
        functionality of basic ERC20 tokens and allow for more advanced
        features, such as constant flow agreements (CFAs) for streaming tokens.
        By integrating Superfluid, the Dynamic Balloon NFT project enables the
        streaming functionality of Air tokens.
      </p>
      <p>
        For more information on Fantomfluid, refer to the Superfluid Protocol
        Overview.
      </p>
    </div>
  );
}
