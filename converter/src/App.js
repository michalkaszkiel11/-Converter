import { Main } from "./Main";
import { From } from "./From";
import { Latest } from "./Latest";
import { To } from "./To";
import { useState, useEffect } from "react";
import { Box } from "./Box";

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
                <input type="text" value={amount} onChange={handleAmount} />
                <Box>
                    <From handleFrom={handleFrom} from={from} />
                    <To handleTo={handleTo} to={to} />
                </Box>
            </Main>
            <span>{result}</span>
        </div>
    );
}

export default App;
