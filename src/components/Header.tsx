const Header = () => (
  <header className="bg-primary">
    <picture>
      <img
        src="./images/bg-header-mobile.svg"
        alt="background"
        className="w-full md:hidden"
      />
      <img
        src="./images/bg-header-desktop.svg"
        alt="background"
        className="md:show w-full"
      />
    </picture>
  </header>
)

export default Header
