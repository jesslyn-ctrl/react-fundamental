import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Carousel } from "react-bootstrap";
import { ButtonGroup, Button } from "react-bootstrap";
import Loaders from "./../util/loaders";
import "./../stylesheets/style.css";

const Collection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancel = false;

    if (isCancel === false) {
      setLoading(true);
      console.log(process.env.REACT_APP_BASEURL);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    // Clean up render function
    return () => {
      isCancel = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    return option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h3 className="mt-4" id="artistic">
        {limit} collection
      </h3>
      <Carousel>
        {/* Carousel items start */}
        {datas.map((data, i) => {
          //   console.table(data);
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                height={450}
                width={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}

        {/* Carousel items end */}
      </Carousel>
      {/* <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
        <Button variant="outline-primary" onClick={() => handleLimit("+")}>
          +
        </Button>
        {limit > 3 && (
          <Button variant="outline-primary" onClick={() => handleLimit("-")}>
            -
          </Button>
        )}
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
    </React.Fragment>
  );
};

export default Collection;
