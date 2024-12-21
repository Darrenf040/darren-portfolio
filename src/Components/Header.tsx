function Header() {
  return (
    <>
      <header className="flex justify-between desktop:px-40 tablet:px-10 phone:px-3 py-4 fixed w-full backdrop-blur-lg z-40">
        <a href="/">DarrenF</a>
        <nav>
          <ul className="flex gap-12">
            <li>
              <a href="/#hero">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
