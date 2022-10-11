export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Olaniran Emmanuel",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "olaniranemmanuet@gmail.com",
    age: 24,
  },
  {
    id: 2,
    username: "Jamie Fox",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jamie@gmail.com",
    status: "passive",
    age: 46,
  },
  {
    id: 3,
    username: "Caroline James",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "caroline@gmail.com",
    status: "pending",
    age: 29,
  },
  {
    id: 4,
    username: "Allison",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "allison@gmail.com",
    status: "active",
    age: 18,
  },
  {
    id: 5,
    username: "Dexter Holmes",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "dexter@gmail.com",
    status: "passive",
    age: 32,
  },
  {
    id: 6,
    username: "Sharon Fells",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sharon@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 7,
    username: "Mark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mark@gmail.com",
    status: "passive",
    age: 54,
  },
  {
    id: 8,
    username: "Taoma",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "taoma@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Ruby Shawn",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ruby@gmail.com",
    status: "pending",
    age: 28,
  },
  {
    id: 10,
    username: "Juliana",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "juliana@gmail.com",
    status: "active",
    age: 33,
  },
];
