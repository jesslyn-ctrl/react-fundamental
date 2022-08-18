import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ButtonGroup, Button, ListGroup } from "react-bootstrap";
import Loaders from "./../util/loaders";
import MyVerticallyCenteredModal from "./../util/vertical.modal";
import "./../stylesheets/style.css";

const ListPost = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    let isCancel = false;

    if (isCancel === false) {
      setLoading(true);
      console.log(process.env.REACT_APP_BASEURL);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    return () => {
      isCancel = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    return option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => prev - 1);
  };

  const handleClick = (data) => {
    console.log(data.id + " " + data.body);
    setModalShow(true);

    setDetail({
      id: data.id,
      title: data.title,
      description: data.body,
    });
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h3 id="artistic">MY POSTS</h3>
      <div className="line"></div>
      <ListGroup variant="flush" className="mt-4">
        {datas.map((data, i) => {
          return (
            <ListGroup.Item
              className="postItem"
              action
              key={i}
              onClick={() => handleClick(data)}
            >
              <span id="artistic" className="postId">
                {data.id}
              </span>
              {data.title}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {/* <ButtonGroup className="mt-4 d-flex">
        
      </ButtonGroup> */}

      <div class="border border-light p-3 mb-4">
        <div class="text-center">
          {limit > 3 && (
            <button
              type="button"
              class="btn-min"
              onClick={() => handleLimit("-")}
            >
              -
            </button>
          )}{" "}
          <button
            type="button"
            class="btn-plus"
            onClick={() => handleLimit("+")}
          >
            +
          </button>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={detail.id}
        title={detail.title}
        description={detail.description}
      />
    </React.Fragment>
  );
};

export default ListPost;
