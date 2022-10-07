import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "../../components/SearchBar";
import { useQuery } from "react-query";
import { VideoCardList } from "./VideoCardList";
import { ResponseVideoInfo } from "../../../pages/api/video-info";
import { SectionDetails } from "./SectionDetails";
import homeStyle from "./index.module.css";
import ReactLoading from "react-loading";

const HomeContainer = () => {
    const [searchValue, setSearchValue] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const fetchSearch = () => axios
        .get(window.location + "/api/video-info", { params: { url: searchValue } })
        .then(({ data }: { data: ResponseVideoInfo }) => data)

    const { isLoading, isError, isSuccess, data, refetch } = useQuery(
        ["search", searchValue],
        fetchSearch,
        {
            enabled: false,
            refetchOnWindowFocus: false,
            retry: false,
        }
    );

    const handleSubmit = () => {
        refetch()
    };

    const renderVideoCards = () => {
        if (isSuccess && data) {
            const { videos, tumbleImage, title, videoId } = data;

            return (<VideoCardList tumbleImage={tumbleImage} videos={videos} title={title} videoId={videoId} />)
        }
    }

    return (
        <>
            <h1>Download Videos from Youtube</h1>

            <SearchBar value={searchValue} isError={isError} onChange={onChange} handleSubmit={handleSubmit} />

            <div className={homeStyle.section}>
                {isLoading &&
                    <ReactLoading
                        type={"bubbles"}
                        color={"black"}
                        height={120}
                        width={100}
                    />}

                {isError && <p style={{ color: isError ? "#E10600" : "white" }}>This youtube url is invalid!</p>}

                {renderVideoCards()}
            </div>

            <SectionDetails />
        </>
    )
};

export { HomeContainer };
