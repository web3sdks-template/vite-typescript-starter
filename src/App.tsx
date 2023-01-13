import { ConnectWallet } from "@web3sdks/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://web3sdks.com/">web3sdks</a>!
        </h1>

        <p className="description">
          Get started by configuring your desired network in{" "}
          <code className="code">src/main.tsx</code>, then modify the{" "}
          <code className="code">src/App.tsx</code> file!
        </p>

        <div className="connect">
          <ConnectWallet />
        </div>

        <div className="grid">
          <a href="https://docs.web3sdks.com/" className="card">
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              web3sdks.
            </p>
          </a>

          <a href="https://web3sdks.com/dashboard" className="card">
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a href="https://docs.web3sdks.com/templates" className="card">
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing web3sdks features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
