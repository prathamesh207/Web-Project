import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Dashboard } from "./components/Dashboard";
import { CustomerList } from "./components/CustomerList";
import { CustomerRegistrationForm } from "./components/CustomerRegistrationForm";
import { CustomerEditForm } from "./components/CustomerEditForm";
import { Footer } from "./components/Footer";
import { RoomsList } from "./components/RoomsList";
import { AddRoom } from "./components/AddRoom";
import { EditRoomDetails } from "./components/EditRoomDetails";
import { Booking } from "./components/Bookings";
import { AddBooking } from "./components/AddBooking";
import { UpdateBooking } from "./components/UpdateBooking";
import { Contactus } from "./components/Contactus";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/customer-list" element={<CustomerList/>}></Route>
        <Route path="/customer-registration" element={<CustomerRegistrationForm/>}></Route>
        <Route path="/edit/:cno" element={<CustomerEditForm/>}></Route>
        <Route path="/room-list" element={<RoomsList/>}></Route>
        <Route path="/add-room" element={<AddRoom/>}></Route>
        <Route path="/edit-room/:rno" element={<EditRoomDetails/>}></Route>
        <Route path="/booking-list" element={<Booking/>}></Route>
        <Route path="/booking-room" element={<AddBooking/>}></Route>
        <Route path="/edit-booking/:rno" element={<UpdateBooking/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>    
  );
}

export default App;
