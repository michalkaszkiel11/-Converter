import { useEffect, useState } from "react";
import currencyFlags from "./flags";

export const Latest = ({ rates, setRates, setLoading }) => {
    const [dates, setDates] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `${
                        dates.length > 9
                            ? `https://api.frankfurter.app/${dates}`
                            : `https://api.frankfurter.app/latest`
                    }`
                );

                const data = await response.json();
                if (data.rates) {
                    setRates(data.rates);
                } else {
                    console.error("Invalid data structure:", data);
                }
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }

        fetchData();
    }, [dates]);

    const handleDate = (e) => {
        setDates(e.target.value);
    };

    return (
        <div className="latest">
            {/* <Calendared /> */}
            <div className="latest-head">
                <h2 style={{ color: "white" }}>
                    Pick a desired date to check rates that day
                </h2>
                <input
                    type="text"
                    value={dates}
                    onChange={handleDate}
                    placeholder="YYYY-MM-DD"
                    className="date"
                />
            </div>
            <table className="currency-table">
                <thead>
                    <tr className="table-head">
                        <th>Country</th>
                        <th>Currency</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(rates).map(([currency, rate]) => (
                        <tr key={currency}>
                            <td>
                                {currencyFlags[currency] ? (
                                    <img
                                        src={currencyFlags[currency]}
                                        alt={`${currency} flag`}
                                        className="flag"
                                    />
                                ) : (
                                    currency
                                )}
                            </td>
                            <td>{currency}</td>
                            <td>{rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
