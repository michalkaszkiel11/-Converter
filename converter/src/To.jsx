export const To = ({ handleTo, to }) => {
    return (
        <select onChange={handleTo} value={to} className="select">
            <option className="option" value="USD">
                USD
            </option>
            <option className="option" value="EUR">
                EUR
            </option>
            <option className="option" value="GBP">
                GBP
            </option>
            <option className="option" value="PLN">
                PLN
            </option>
        </select>
    );
};
