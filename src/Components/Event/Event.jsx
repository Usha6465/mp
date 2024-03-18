import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import EventComponent from "./EventComponent";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, removeFromBookmark } from "../../redux/bookmark/action";

const styleContainer = {
  width: "640px",
  marginLeft: "12vw"
};

function Event() {
  const [dayType, setDayType] = useState("");
  const [type, setType] = useState("");
  const [dist, setDist] = useState(Infinity);
  const [cate, setCate] = useState("");

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);

  useEffect(() => {
    // Fetch data from the API
    axios.get("https://meetupserverjsonserver.herokuapp.com/posts")
      .then(response => {
        setData(response.data);
        setFilteredData(response.data); // Initially, set filteredData to all data
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Filter data based on dropdown selections
  useEffect(() => {
    let filteredEvents = data.filter(event => {
      if (
        (dayType === "" || event.day === dayType) &&
        (type === "" || event.type === type) &&
        (dist === Infinity || event.distance <= dist) &&
        (cate === "" || event.category === cate)
      ) {
        return true;
      }
      return false;
    });
    setFilteredData(filteredEvents);
  }, [data, dayType, type, dist, cate]);

  const handelClick = (item) => {
    const isBookmarked = bookmarks.some(bookmark => bookmark.id === item.id);
    if (isBookmarked) {
      dispatch(removeFromBookmark(item.id));
    } else {
      dispatch(addToBookmark(item));
    }
  };

  return (
    <div style={styleContainer}>
      <br />
      <div>
        <Select
          sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
          value={dayType}
          onChange={(event) => setDayType(event.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Any Day</em>
          </MenuItem>
          {/* Add more menu items for each day type */}
        </Select>
        {/* Add more Select components for other filtering options */}
      </div>

      {filteredData.length !== 0 ? (
        <div>
          {filteredData.map(event => (
            <EventComponent
              key={event.id}
              id={event.id}
              img_url={event.img_url}
              event_mode={event.event_mode}
              date={event.date}
              event_name={event.event_name}
              event_place={event.event_place}
              attendees={event.attendees}
              handelClick={handelClick}
            />
          ))}
        </div>
      ) : (
        <Stack spacing={1}>
          <hr />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
        </Stack>
      )}
    </div>
  );
}

export default Event;
