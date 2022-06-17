import styles from "./layout.module.css";
export default function FilterBar() {
  return (
    <>
      <div className={`row text-center ${styles.filterbar}`}>
        <div className="d-flex justify-content-around mx-auto">
          <a className="btn" href="/">
            Home
          </a>
          <a className="btn" href="/cars">
            All Cars
          </a>
          <div className="dropdown ">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              id="dropdownMenuButton1"
              aria-expanded="false"
            >
              Filter Cars
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="/cars">
                  All Cars
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/popular_cars">
                  Popular Cars
                </a>
              </li>
            </ul>
          </div>
          <a className="btn" href="/about">
            About Us
          </a>
          <a className="btn" href="/contact">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
