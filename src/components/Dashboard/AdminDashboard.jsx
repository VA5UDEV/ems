import React from 'react'
import EmployeeIdList from '../other/EmployeeIdList'
import CreateTaskForm from '../other/CreateTaskForm'
import Header from '../other/Header'

const AdminDashboard = (props) => {
  return (
    <div>
      <Header changeUser={props.changeUser} />
      <CreateTaskForm data={props.data} />
      <EmployeeIdList data={props.data} />
    </div>
  )
}

export default AdminDashboard