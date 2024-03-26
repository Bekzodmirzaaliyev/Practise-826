import React, { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    return (
        <div>Users</div>
    )
};
useEffect(() => {
    fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data.users.map((user) => ({ ...user, selected: false })));
        });
}, []);

const handleCheckboxChange = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].selected = !updatedUsers[index].selected;
    setUsers(updatedUsers);
    const allSelected = updatedUsers.every((user) => user.selected);
    setSelectAll(allSelected);
};

const handleSelectAll = () => {
    const updatedUsers = users.map((user) => ({
        ...user,
        selected: !selectAll,
    }));
    setUsers(updatedUsers);
    setSelectAll(!selectAll);
};

return (
    <>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Phone Number</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr
                            key={index}
                            className={user.selected ? "bg-green-800 text-white" : ""}
                        >
                            <td>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={() => handleCheckboxChange(index)}
                                    checked={user.selected}
                                />
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={user.image}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.firstName}</div>
                                        <div className="text-sm opacity-50">{user.lastName}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-md">{user.company.name}</td>
                            <td>{`${user.address.city}, ${user.address.address}`}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.height}</td>
                            <td>{user.weight}</td>
                            <td>{user.phone}</td>
                            <td>{user.university}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Phone Number</th>
                        <th>University</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </>
);
export default Users;
