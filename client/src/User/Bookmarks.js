import React from "react";
import NewsContainer from "../components/NewsContainer";

const Showbookmarks = (props) => {
    return (
        <div>
            <h4 className="display-8 fw-bold">Bookmarks</h4>
            {props.bookmarks.length > 0 ? (
                <div className="album py-5 bg-body-tertiary">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {props.bookmarks.map((bookmark) => (
                        <NewsContainer
                            key={bookmark._id}
                            _id={bookmark._id}
                            title={bookmark.title}
                            description={bookmark.description}
                            url={bookmark.url}
                            urlToImage={bookmark.urlToImage}
                            publishedAt = {bookmark.publishedAt}
                        />
                    ))}
                </div>
                </div>
            ) : (
                <div className='server-main'>
                    <img src="images\nothing.png" alt="....." className="server-img-main" />
                </div>
            )}
            <button
                className="btn btn-primary"
                onClick={() => {
                    props.setcontainer('main');
                }}
            >
                <img src="images\arrow.png" alt="....."/> Go Back
            </button>
        </div>
    );
};

export default Showbookmarks;