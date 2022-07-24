import { useDispatch } from "react-redux";
import "./SearchPanel.scss";

export const SearchPanel = () => {

    const dispatch = useDispatch();

    function inputChange(e) {
        const value = e.target.value;
        dispatch({
            type: "INPUT_FIELD",
            payload: value
        })
    }

    return (
        <div className="search-panel">
            <input type="text" onChange={inputChange} placeholder="Поиск" />
        </div>
    );
};
