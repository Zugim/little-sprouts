import Nav from "./Nav";

export default function Header() {
  return (
    <header
      className={`w-screen h-12 px-2 flex justify-between items-center bg-green-300`}
    >
      <p>Logo</p>
      <Nav />
    </header>
  );
}
