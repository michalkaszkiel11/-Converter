import { useEffect, useState } from "react";
import currencyFlags from "./flags";
export const Latest = () => {
    const [rates, setRates] = useState([]);
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

                console.log(rates);
            } catch (error) {
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
            <table className="currency-table">
                <thead>
                    <tr>
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
            {/* <div>
                {Object.entries(rates).map(([currency, rate]) => (
                    <div key={currency} className="currency-box">
                        <span>
                            {currencyFlags[currency] ? (
                                <img
                                    src={currencyFlags[currency]}
                                    alt={`${currency} flag`}
                                    className="flag"
                                />
                            ) : (
                                currency
                            )}
                        </span>
                        <span>{currency}</span>
                        <span>{rate}</span>
                    </div>
                ))}
            </div> */}
            <input
                type="text"
                value={dates}
                onChange={handleDate}
                placeholder="YYYY-MM-DD"
            />
        </div>
    );
};
