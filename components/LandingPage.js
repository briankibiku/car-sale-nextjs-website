import styles from "./layout.module.css";
export default function LandingPage() {
  return (
    <>
      <div className={styles.landing_page}>
        <div>
          <div className={styles.centered_container}>
            <div className="row" style={{ width: "50vw" }}>
              <h1 style={{ paddingRight: "20px", fontSize: "3.5vw" }}>
                Buy <span style={{ color: "yellow" }}>brand new</span> cars from major <span style={{ color: "yellow" }}>retailers</span> in <span style={{ color: "yellow" }}>Africa</span>.
              </h1>
              <a
                className="btn btn-primary"
                style={{ width: "120px" }}
                href="/cars"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
