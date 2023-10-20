import React, { useState ,useEffect} from "react";

const NewsContainer = (props) => {

    const [bookmarked, setBookmarked] = useState(false);

    const Add = () => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch('http://localhost:5000/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: props.title,
                    description: props.description,
                    url: props.url,
                    urlToImage: props.urlToImage,
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();

                    }
                    throw new Error('Authentication failed');
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => console.error(error));
        }
    };
    const Delete = () => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch(`http://localhost:5000/api/bookmarks/${props._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Authentication failed');
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => console.error(error));
        }
    };


    const HandleClick = () => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch('http://localhost:5000/api/bookmarks', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Authentication failed');
                })
                .then((data) => {
                    if (data.some((bookmark) => bookmark.title === props.title)) {
                        Delete();
                        setBookmarked(false);
                    } else {
                        Add();
                        setBookmarked(true);
                    }
                })
                .catch((error) => console.error(error));
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch('http://localhost:5000/api/bookmarks', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Authentication failed');
                })
                .then((data) => {
                    if (data.some((bookmark) => bookmark.title === props.title)) {
                        setBookmarked(true);
                    } else {
                        setBookmarked(false);
                    }
                })
                .catch((error) => console.error(error));
        }
    }, [bookmarked]);
    
    const HandleDate = () => {
        const date = new Date(props.publishedAt);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    

    return(
        <div className="col">
            <div className="card shadow-sm">
              <img src={props.urlToImage} className="bd-placeholder-img card-img-top"  width="100%" height="225" alt=""/>
              <div className="card-body">
                <h6 className="card-text">{props.title}</h6>
                <small className="text-body-secondary">{props.description}</small>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href={props.url}> <button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                    <button type="button" className="btn btn-sm btn-outline-secondary"><img src={bookmarked?"images/bookmark-black.png":"images/bookmark-white.png"} alt="bookmark" width="20px" height="20px" onClick={HandleClick}/></button>
                  </div>
                  <small className="text-body-secondary">{HandleDate()}</small>
                </div>
              </div>
            </div>
          </div>
    );
};

export default NewsContainer;