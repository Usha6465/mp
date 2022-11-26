import { HorizontalRule } from "@mui/icons-material";
import React,{useState} from "react";
import { Route, Switch } from "react-router-dom";
import Event from "../Components/Event/Event";
import LayoutPage from "../Components/Main Page/LayoutPage";
import Home from "../Pages/HomePage";
import HorizontalLinearStepper from "../CreateYourGroup/HorizontalLinearStepper";
import Navbar2 from "../Components/Navbar/Navbar2";
import Description from "../Components/Description/Description";
import Group from "../Pages/Group";
import SavedEvents from "../Pages/SavedEvents";
import FormikForm from "../Components/Profile/FormikForm";

// import Attending from "../Components/Attending/Attending";

export default function AllRoutes() {

  const [fields, updateFields] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: ""
  });

  const profiledata = async() => {
    console.log(fields)
    const response = await fetch("http://localhost:6969/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: fields
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <Route exact path="/">
        <LayoutPage />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/creategroup">
        <HorizontalLinearStepper />
      </Route>
      <Route exact path="/events">
        <div>
          <Navbar2 />
          <Event />
        </div>
      </Route>

      <Route exact path="/events/:id">
        <Description />
      </Route>
      <Route exact path="/yourgroups">
        <Group />
      </Route>
      <Route exact path="/yourevents">
        <SavedEvents />
      </Route>

      {/* <Route exact path="/upcomingEvents">
        <Attending />
      </Route> */}

      <Route exact path="/profile">
      <FormikForm fields={fields} updateFields={updateFields} />
      <button onClick={profiledata}>
        Save
      </button>
      </Route>
    </div>
  );
}
