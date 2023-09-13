const Header = () => (
  <header className="bg-primary">
    <picture>
      <img
        src="./images/bg-header-mobile.svg"
        alt="background"
        className="h-fit w-full md:hidden"
      />
      <img
        src="./images/bg-header-desktop.svg"
        alt="background"
        className="hidden w-full md:block"
      />
    </picture>
  </header>
)

export default Header
