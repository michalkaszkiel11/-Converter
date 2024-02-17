import { Main } from "./Main";
import { From } from "./From";
import { Latest } from "./Latest";
import { To } from "./To";
import { useState, useEffect } from "react";
import { Box } from "./Box";
import { Header } from "./Header";
import inter from "./images/interactive.png";
import bag from "./images/dollarbag.png";
function App() {
    const [amount, setAmount] = useState(null);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [result, setResult] = useState(0);

    const handleAmount = (e) => {
        setAmount(e.target.value);
        console.log(e.target.value);
    };
    const handleFrom = (e) => {
        setFrom(e.target.value);
    };
    const handleTo = (e) => {
        setTo(e.target.value);
    };

    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
                    { signal: controller.signal }
                );
                const data = await response.json();
                setResult(data.rates[to]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        return function () {
            controller.abort();
        };
    }, [amount, from, to, setResult]);

    return (
        <div className="App">
            <Latest />
            <Main>
                <Box>
                    <div className="shop">
                        <img
                            src={inter}
                            alt="shop"
                            style={{ width: "200px", height: "542.891px" }}
                        />
                        <div className="box-inside">
                            <Header />
                            <div className="row">
                                <div className="column">
                                    <input
                                        type="text"
                                        value={amount}
                                        onChange={handleAmount}
                                        className="amount"
                                    />
                                    <div className="from-to-box">
                                        <From
                                            handleFrom={handleFrom}
                                            from={from}
                                        />
                                        <To handleTo={handleTo} to={to} />
                                    </div>
                                </div>
                                <span className="result-span">
                                    {result}
                                    {to}
                                </span>
                            </div>
                            <img src={bag} alt="" className="bag" />
                        </div>
                    </div>
                </Box>
            </Main>
        </div>
    );
}

export default App;
