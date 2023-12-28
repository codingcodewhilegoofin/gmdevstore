import react, { useState, useEffect } from "react";
import "../PageCss/Crudtable.css";

export const CrudTable = (props) => {
  const [windowSize, setWindowSize] = useState(false);
  const [editWindow, setEditWindow] = useState(false);
  const [editWindowName, setEditWindowName] = useState(false);
  const [editWindowData, setEditWindowData] = useState([]);
  const [editWindowDate, setEditWindowDate] = useState([]);
  const [editWindow2, setEditWindow2] = useState(false);
  const [hideTable, setHideTable] = useState(false);

  let mainDivSize;
  let tableSize;
  let editBtnSize;
  let btnListDirection;

  if (windowSize) {
    mainDivSize = "100%";
    tableSize = "100%";
    editBtnSize = "100%";
    btnListDirection = "column";
  } else {
    mainDivSize = "100%";
    tableSize = "100%";
    editBtnSize = "100%";
    btnListDirection = "row";
  }

  const onClickCreate = (data) => {
    setEditWindow(!editWindow);
    setEditWindow2(false);
  };

  const onClickHide = () => {
    setHideTable(!hideTable);
  };

  const onClickEdit = (data) => {
    setEditWindow(false);
    setEditWindow2(!editWindow2);
    console.log(data);
    const formatDate = new Date(data.date);
    const dateMDY = `${formatDate.getFullYear()}-${
      formatDate.getMonth() + 1
    }-${formatDate.getDate()}`;
    setEditWindowData(data);
    setEditWindowDate(dateMDY);
    setEditWindowName(data._id);
  };

  useEffect(() => {
    //Initialize
    const mq = window.matchMedia("(max-width: 1000px)");
    setWindowSize(mq.matches);

    //Update
    function updateSize(e) {
      setWindowSize(e.matches);
      console.log(mq.matches);
    }

    mq.addEventListener("change", updateSize);

    return function clean() {
      mq.removeEventListener("change", updateSize);
    };
  }, []);

  const [gmdevapiData, setGmdevapiData] = useState([]);
  const [currentStatus, setStatus] = useState(false);
  const [getMongoData, setGetMongoData] = useState(
    "https://gmdevapi.com/api/Mongo"
  );
  const [tableChange, setTableChange] = useState(false);

  useEffect(() => {
    async function getMongoDataGmdevapi() {
      try {
        const response = await fetch(getMongoData);

        if (!response.ok) {
          const message = `An fetching error has occured: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.log("GetMongodata from gmdevapi failed: ", error);
      }
    }

    getMongoDataGmdevapi().catch((error) => {
      console.log("Error" + error.message);
    });

    getMongoDataGmdevapi().then((data) => {
      setStatus(true);
      console.log("data is , ", data);
      setGmdevapiData(data);
    });
  }, [tableChange]);

  const [gmdevapiCreate, setGmdevapiCreate] = useState([]);
  const [currentCreateStatus, setCreateStatus] = useState(false);
  const [createMongoData, setCreateGetMongoData] = useState(
    "https://gmdevapi.com/api/MongoCreate/"
  );

  const handleUserCreateNew = (e) => {
    e.preventDefault();
    console.log(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    );

    async function createMongoDataGmdevapi() {
      try {
        console.log(
          `Mongo URL will be: ${
            createMongoData +
            e.target[0].value +
            "/" +
            e.target[1].value +
            "/" +
            e.target[2].value +
            "/" +
            e.target[3].value
          }`
        );
        const response = await fetch(
          createMongoData +
            e.target[0].value +
            "/" +
            e.target[1].value +
            "/" +
            e.target[2].value +
            "/" +
            e.target[3].value
        );

        if (!response.ok) {
          const message = `An fetching error has occured: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.log("CreateMongo from gmdevapi failed: ", error);
      }
    }

    createMongoDataGmdevapi().catch((error) => {
      console.log("CreateMongo Error" + error.message);
    });

    createMongoDataGmdevapi().then((data) => {
      setCreateStatus(true);
      console.log("Response is: , ", data);
      setGmdevapiCreate(data);
    });

    setEditWindow(false);

    setTableChange(!tableChange);
  };

  const cancelCreateNewWindow = () => {
    setEditWindow(false);
  };

  const [gmdevapiUpdate, setGmdevapiUpdate] = useState([]);
  const [currentUpdateStatus, setUpdateStatus] = useState(false);
  const [updateMongoData, setUpdateMongoData] = useState(
    "https://gmdevapi.com/api/MongoUpdate/"
  );

  const handleUserInput = (e) => {
    e.preventDefault();
    console.log(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    );

    async function updateMongoDataGmdevapi() {
      try {
        console.log(
          `Mongo URL will be: ${
            updateMongoData +
            editWindowName +
            "/" +
            e.target[0].value +
            "/" +
            e.target[1].value +
            "/" +
            e.target[2].value +
            "/" +
            e.target[3].value
          }`
        );
        const response = await fetch(
          updateMongoData +
            editWindowName +
            "/" +
            e.target[0].value +
            "/" +
            e.target[1].value +
            "/" +
            e.target[2].value +
            "/" +
            e.target[3].value
        );

        if (!response.ok) {
          const message = `An fetching error has occured: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.log("UpdateMongo from gmdevapi failed: ", error);
      }
    }

    updateMongoDataGmdevapi().catch((error) => {
      console.log("UpdateMongo Error" + error.message);
    });

    updateMongoDataGmdevapi().then((data) => {
      setUpdateStatus(true);
      console.log("Response is: , ", data);
      setGmdevapiUpdate(data);
    });

    setEditWindow2(false);

    setTableChange(!tableChange);
  };

  const cancelEditWindow = () => {
    setEditWindow2(false);
  };

  const [gmdevapiDelete, setGmdevapiDelete] = useState([]);
  const [currentDeleteStatus, setDeleteStatus] = useState(false);
  const [deleteMongoData, setDeleteMongoData] = useState(
    "https://gmdevapi.com/api/MongoDelete/"
  );
  const [deleteId, setDeleteId] = useState();

  const onClickDelete = (data) => {
    console.log(data);
    setDeleteId(data._id);
    console.log("Id to delete is : ", deleteId);

    setTimeout(() => {
      handleDelete(deleteId);
      alert("Entry was deleted from databse");
    }, 1000);
  };

  const handleDelete = () => {
    async function deleteMongoDataGmdevapi() {
      try {
        console.log("Id to delete is : ", deleteId);
        console.log(`Mongo URL will be: ${deleteMongoData + deleteId} `);
        const response = await fetch(deleteMongoData + deleteId);

        if (!response.ok) {
          const message = `An fetching error has occured: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.log("DeleteMongo from gmdevapi failed: ", error);
      }
    }

    deleteMongoDataGmdevapi().catch((error) => {
      console.log("DeleteMongo Error" + error.message);
    });

    deleteMongoDataGmdevapi().then((data) => {
      setDeleteStatus(true);
      console.log("Response is: , ", data);
      setGmdevapiDelete(data);
    });

    setTableChange(!tableChange);
  };

  return (
    <>
      {!currentStatus ? (
        <h2>No data</h2>
      ) : (
        <>
          <div
            className="gio-container-2"
            style={{
              flexDirection: "row",
              padding: "1px",
              margin: "0px",
              border: "2px solid white",
            }}
          >
            {hideTable ? (
              <></>
            ) : (
              <button
                onClick={() => onClickCreate()}
                style={{
                  width: "50%",
                  margin: "5px",
                  padding: "5px",
                  backgroundColor: "white",
                  fontSize: "xx-large",
                  cursor: "pointer",
                }}
              >
                {" "}
                🆕{" "}
              </button>
            )}
            <button
              onClick={() => onClickHide()}
              style={{
                width: !hideTable ? "75%" : "100%",
                margin: "5px",
                padding: "5px",
                backgroundColor: "black",
                cursor: "pointer",
              }}
            >
              {" "}
              {hideTable ? "See table 👁️" : "Hide Table"}{" "}
            </button>
          </div>

          {hideTable ? (
            <></>
          ) : (
            <>
              <div
                className={editWindow ? "gio-container" : ""}
                style={{
                  width: `${mainDivSize}`,
                  margin: "5px",
                  border: "none",
                  background: "none",
                }}
              >
                {editWindow ? (
                  <>
                    <form onSubmit={handleUserCreateNew}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "black",
                          padding: "10px",
                        }}
                      >
                        <p style={{ color: "white" }}>
                          Create a new record in database.
                        </p>
                        <p style={{ color: "white" }}>Name</p>
                        <input
                          on
                          type="text"
                          style={{
                            border: "none",
                            width: `${mainDivSize}`,
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        />
                        <p style={{ color: "white" }}>Social Media</p>
                        <input
                          on
                          type="text"
                          style={{
                            border: "none",
                            width: `${mainDivSize}`,
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        />
                        <p style={{ color: "white" }}>Website / Project</p>
                        <input
                          on
                          type="text"
                          style={{
                            border: "none",
                            width: `${mainDivSize}`,
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        />
                        <p style={{ color: "white" }}>Date</p>
                        <input
                          on
                          type="date"
                          style={{
                            border: "none",
                            width: `${mainDivSize}`,
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <input
                        type="submit"
                        style={{ color: "white", cursor: "pointer" }}
                        value="Submit to database"
                      />
                      <button
                        style={{ border: "1px solid white", color: "white" }}
                        onClick={cancelCreateNewWindow}
                      >
                        Cancel
                      </button>
                    </form>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div
                className="tablethingdiv2"
                style={{ width: `${mainDivSize}`, border: "1px solid white" }}
              >
                <table style={{ width: `${tableSize}`, border: "none" }}>
                  <thead style={{ border: "none" }}>
                    <tr style={{ border: "none" }}>
                      {!editWindow2 ? (
                        <>
                          <th
                            style={{
                              padding: "5px",
                              border: "2px solid white",
                            }}
                          >
                            Table Options
                          </th>
                          <th
                            style={{
                              padding: "5px",
                              borderRight: "2px solid black",
                            }}
                          >
                            Name
                          </th>
                          <th
                            style={{
                              padding: "5px",
                              borderRight: "2px solid black",
                            }}
                          >
                            Website
                          </th>
                          <th
                            style={{
                              padding: "5px",
                              borderRight: "2px solid black",
                            }}
                          >
                            Social Media
                          </th>
                          <th
                            style={{
                              padding: "5px",
                              borderRight: "2px solid black",
                            }}
                          >
                            Date Created
                          </th>
                        </>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </thead>
                  {!editWindow2 ? (
                    <tbody style={{ border: "none" }}>
                      {gmdevapiData.map((data) => (
                        <tr style={{ border: "none" }}>
                          <td style={{ border: "2px solid white" }}>
                            <div
                              className="gio-container-2"
                              style={{
                                flexDirection: `${btnListDirection}`,
                                padding: "0px",
                                margin: "0px",
                                border: "2px solid white",
                              }}
                            >
                              <button
                                onClick={() => onClickEdit(data)}
                                style={{
                                  width: `${editBtnSize}`,
                                  margin: "1px",
                                  backgroundColor: "green",
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                {" "}
                                Edit <br /> ✏️{" "}
                              </button>
                              <button
                                onClick={() => onClickDelete(data)}
                                style={{
                                  width: `${editBtnSize}`,
                                  margin: "1px",
                                  backgroundColor: "red",
                                  color: "white",
                                  cursor: "help",
                                }}
                              >
                                {" "}
                                Delete <br /> 💣{" "}
                              </button>
                            </div>
                          </td>

                          <>
                            <td
                              style={{
                                borderRight: "2px solid black",
                                padding: "25px",
                              }}
                            >
                              {data.name}
                            </td>
                            <td
                              style={{
                                borderRight: "2px solid black",
                                padding: "25px",
                                backgroundColor: "black",
                                color: "red",
                              }}
                            >
                              <h3 syle={{ color: "red", fontWeight: "900" }}>
                                {data.social}
                              </h3>
                            </td>
                            <td
                              style={{
                                borderRight: "2px solid black",
                                padding: "25px",
                              }}
                            >
                              {data.plug}
                            </td>
                            <td
                              style={{
                                borderRight: "2px solid black",
                                padding: "25px",
                              }}
                            >
                              {data.date}
                            </td>
                          </>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <></>
                  )}
                </table>
              </div>

              <form onSubmit={handleUserInput}>
                <div
                  className={editWindow2 ? "gio-container" : ""}
                  style={{
                    width: `${mainDivSize}`,
                    margin: "5px",
                    border: "none",
                    background: "none",
                  }}
                >
                  {editWindow2 ? (
                    <>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "black",
                          padding: "10px",
                        }}
                      >
                        <p style={{ color: "white" }}>
                          {" "}
                          <b style={{ color: "lightgreen" }}>Edit</b> record for{" "}
                          {editWindowName}{" "}
                        </p>
                        <p style={{ color: "white" }}>Name</p>
                        <input
                          on
                          type="text"
                          value={editWindowData.name}
                          style={{
                            border: "none",
                            width: `${mainDivSize}`,
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        />
                        <p style={{ color: "white" }}>Social Media</p>
                        <input
                          on
                          type="text"
                          style={{
                            border: "none",
                            width: `${mainDivSize}`,
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        />
                        <p style={{ color: "white" }}>Website / Project</p>
                        <input
                          on
                          type="text"
                          style={{
                            border: "none",
                            width: `${mainDivSize}`,
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        />
                        <p style={{ color: "white" }}>Original Creation Date</p>
                        <input
                          type="date"
                          value={editWindowDate}
                          style={{
                            border: "none",
                            width: `${mainDivSize}`,
                            backgroundColor: "white",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <input
                        type="submit"
                        style={{ color: "white", cursor: "pointer" }}
                        value="Enter"
                      />
                      <button
                        style={{ border: "1px solid white", color: "white" }}
                        onClick={cancelEditWindow}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
};
export default CrudTable;
