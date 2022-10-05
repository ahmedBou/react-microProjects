function Promo(props) {
    const styles = {
        color: "tomato",
        fontSize: "40px"
    }
    return (
        <div className="promo-section">
            <div>
                <h1 style={styles}>Don't miss this deal!</h1>
            </div>
            <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;