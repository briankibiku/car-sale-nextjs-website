import styles from "./layout.module.css";
export default function LandingPage() {
  return (
    <>
      <div className={styles.landing_page}>
        <div>
          <div className={styles.centered_container}>
            <div className="row">
              <h1 style={{ paddingRight: "20px" }}>
                You trusted car dealership
              </h1>
              <a
                className="btn btn-primary text-right"
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
