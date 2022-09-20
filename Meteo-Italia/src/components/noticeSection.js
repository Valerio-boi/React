import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import notice from "../actions/noticeAction";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NoticeSection() {
  const [time, setTime] = useState(Date.now());
  const selectNotice = useSelector((state) => state.noticeReducer);
  const changeTema = useSelector((state) => state.changeTheme);
  const dispatch = useDispatch();
  const styleList = {
    border: changeTema ? "1px solid rgb(255 255 255)" : "1px solid rgb(0 0 0)",
  };

  useEffect(() => {
    dispatch(notice());
    const interval = setInterval(() => setTime(Date.now()), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let notizie;

  notizie = (
    <div>
      {selectNotice.map((notice, index) => {
        if (index < 5) {
          return (
            <ListGroup style={styleList}>
              <ListGroup.Item key={notice.url} >
                <strong>{notice.title}</strong>
                <p>{notice.description.substring(0,145) + '...'}</p>
                <Row>
                  <Col>
                    <a href={notice.source.url} target="_blank">
                      leggi ancora...
                    </a>
                  </Col>
                  <Col>
                    <strong style={{ float: "right" }}>
                      Autore:{" "}
                      {notice.source.name != null &&
                      notice.source.name != "" &&
                      notice.source.name.length < 20
                        ? notice.source.name
                        : "Non specificato"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          );
        }
      })}
    </div>
  );

  return notizie;
}
