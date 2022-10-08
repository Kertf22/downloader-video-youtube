import styles from "./index.module.css"

interface ISearchBar {
    value: string;
    isError: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
}

const SearchBar = ({ value, isError, onChange, handleSubmit }: ISearchBar) => {
    return (
        <div className={styles.searchBar}>
            <input
                value={value}
                onChange={onChange}
                placeholder={"Search by the youtube URL"}
                style={{ color: isError ? "#E10600" : "white" }}
            />
            <button disabled={value.length == 0} onClick={e => handleSubmit()}>Search</button>
        </div>
    )
};

export { SearchBar };