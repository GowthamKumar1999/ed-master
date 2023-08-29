import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";
export default function AdminDash() {
  return (
    <div>
      <Button>
                <Link to={"/editcourse/add"}>ADD Course</Link>
            </Button>

            <Button>
                <Link to={"/editCourse/update"}>UPDATE Course</Link>
            </Button>
            <Outlet/>
    </div>
  )
}
