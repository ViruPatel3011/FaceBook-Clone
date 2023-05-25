import React from 'react'
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HouseDoorFill } from "react-bootstrap-icons";
import { Shop } from "react-bootstrap-icons";
import { Tv } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { Messenger } from "react-bootstrap-icons";
import { BellFill} from "react-bootstrap-icons";
import { GearFill} from "react-bootstrap-icons";
import { Facebook} from "react-bootstrap-icons";
import { Search} from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <>
    <div>
    <nav>
            <ul>
                <li id="fb"><Facebook/> </li>
                <li id="search_btn"> <Search/> </li>
                
                
                <li id="space2"></li>
                
 
                <li id="Home">  <HouseDoorFill /> </li>
                <li id="group"><Shop/></li>
                <li id="tv"> <Tv/> </li>
                <li id="friend"> <PersonFill/> </li>
                <li id="space1"></li>
                <li id="btn_plus"> <Plus/></li>
                <li id="btn_msg"> <Messenger/></li>
                <li id="btn_bell"><BellFill/></li>
                <li id="btn_profile"> <GearFill/>  </li>
            </ul>
        </nav>
    </div>
    </>
  )
}
