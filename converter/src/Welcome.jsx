import bag from "./images/dollarbag.png";
export const Welcome = () => {
    return (
        <div className="welcome-box">
            <h1>
                Welcome to the CurrencyConverter{" "}
                <span className="welcome-span">+ Plus!</span>
            </h1>
            <section>
                <p>
                    Transform your financial world with the power of real-time
                    currency conversion. Whether you're planning a trip,
                    managing international transactions, or just curious about
                    the latest exchange rates, CurrencyConverter Plus is your
                    go-to tool.
                </p>
            </section>
            <section className="list">
                <ul style={{ listStyle: "none", padding: "1rem" }}>
                    <li>
                        <span>🌐</span> Access up-to-date exchange rates from
                        around the globe.
                    </li>
                    <li>
                        <span>💱</span> Convert between major currencies
                        effortlessly.
                    </li>
                    <li>
                        <span>📊</span> Analyze historical rates for informed
                        decisions.
                    </li>
                    <li>
                        <span>🔐</span> Secure and reliable data from reputable
                        sources.
                    </li>
                </ul>
                <img src={bag} alt="bag" className="bag" />
            </section>
        </div>
    );
};
