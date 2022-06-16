export default function BottomNavigation() {
    return (
        <div style={{ margin: "20px" }}>
            <div className="d-flex ">
                <p style={{ fontSize: "16px" }}>Popular Brands</p>
            </div>
            <div className="d-flex flex-direction-row">
                <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>Toyota</a></p>
                <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>BMW</a></p>
                <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>Nissan</a></p>
                <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>Honda</a></p>
            </div>
        </div>
    )
}
