// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Notifications = ({ sellerid }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!sellerid) return;
//     axios
//       .get(`http://localhost:7000/getnotification/${sellerid}`)
//       .then((res) => setNotifications(res.data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [sellerid]);


//   const markAsRead = async (id) => {
//     await axios.patch(`http://localhost:7000/read/${id}`);
//     setNotifications((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, is_read: 1 } : n))
//     );
//   };

//   if (loading) return <p>Loading notifications...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md w-96">
//       <h3 className="text-lg font-semibold mb-3">🔔 Notifications</h3>
//       {notifications.length === 0 ? (
//         <p>No new notifications</p>
//       ) : (
//         <ul className="space-y-2">
//           {notifications.map((n) => (
//             <li
//               key={n.id}
//               onClick={() => markAsRead(n.id)}
//               className={`p-3 rounded-lg cursor-pointer transition ${
//                 n.is_read ? "bg-gray-200" : "bg-yellow-100 hover:bg-yellow-200"
//               }`}
//             >
//               <p>{n.message}</p>
//               <small className="text-gray-500">
//                 {new Date(n.created_at).toLocaleString()}
//               </small>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Notifications;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const NotificationList = ({ user_type, userid }) => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     if (!user_type || !userid) return;
//     const fetchNotifications = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:7000/notifications/${user_type}/${userid}`
//         );
//         setNotifications(res.data);
//       } catch (err) {
//         console.error("Error fetching notifications:", err);
//       }
//     };
//     fetchNotifications();
//   }, [user_type, userid]);

//   return (
//     <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-5 mt-6">
//       <h2 className="text-2xl font-bold text-indigo-600 mb-4">🔔 Notifications</h2>
//       {notifications.length === 0 ? (
//         <p className="text-gray-500">No notifications yet.</p>
//       ) : (
//         <ul className="divide-y divide-gray-200">
//           {notifications.map((note) => (
//             <li
//               key={note.id}
//               className={`p-3 flex justify-between items-center ${
//                 note.is_read ? "bg-gray-50" : "bg-yellow-50"
//               }`}
//             >
//               <div>
//                 <p className="font-semibold text-gray-700">{note.message}</p>
//                 <p className="text-sm text-gray-400">
//                   {new Date(note.created_at).toLocaleString()}
//                 </p>
//               </div>
//               {!note.is_read && (
//                 <button
//                   onClick={async () => {
//                     await axios.patch(`http://localhost:7000/notifications/read/${note.id}`);
//                     setNotifications((prev) =>
//                       prev.map((n) =>
//                         n.id === note.id ? { ...n, is_read: 1 } : n
//                       )
//                     );
//                   }}
//                   className="text-sm bg-blue-500 text-white px-3 py-1 rounded-lg"
//                 >
//                   Mark Read
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NotificationList;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const NotificationList = ({ userType, userId }) => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     if (!userType || !userId) return;

//     const fetchNotifications = async () => {
//       try {
//         const res = await axios.get(`http://localhost:7000/getnotifucations/${userType}/${userId}`);
//         setNotifications(res.data);
//       } catch (err) {
//         console.error("Error fetching notifications:", err);
//       }
//     };

//     fetchNotifications();
//   }, [userType, userId]);

//   return (
//     <div className="max-w-3xl mx-auto mt-6 bg-white shadow-md rounded-lg p-4">
//       <h2 className="text-xl font-bold text-blue-600 mb-3">🔔 Notifications</h2>
//       {notifications.length === 0 ? (
//         <p className="text-gray-500 text-center">No notifications yet.</p>
//       ) : (
//         <ul className="divide-y">
//           {notifications.map((note, index) => (
//             <li key={index} className="py-3 px-2 hover:bg-gray-50 flex justify-between">
//               <div>
//                 <p className="text-gray-800">{note.message}</p>
//                 <p className="text-xs text-gray-400">
//                   {new Date(note.created_at).toLocaleString()}
//                 </p>
//               </div>
//               {note.is_read ? (
//                 <span className="text-green-600 text-sm font-semibold">Read</span>
//               ) : (
//                 <span className="text-red-500 text-sm font-semibold">New</span>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NotificationList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const NotificationList = ({ userType, userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!userType || !userId) return;

    const fetchNotifications = async () => {
      try {
        const res = await axios.get(
          `http://localhost:7000/getnotifications/${userType}/${userId}`
        );
        setNotifications(res.data);
      } catch (err) {
        console.error("Error fetching notifications:", err);
      }
    };

    fetchNotifications();

    // 🔁 Auto refresh every 10 sec (optional)
    const interval = setInterval(fetchNotifications, 10000);
    return () => clearInterval(interval);
  }, [userType, userId]);

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
        🔔 Notifications
      </h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No notifications yet.</p>
      ) : (
        <ul className="divide-y">
          {notifications.map((note, index) => (
            <li
              key={index}
              className={`py-3 px-3 border-l-4 rounded-md mb-2 transition-all duration-200 ${
                note.is_read ? "border-green-500 bg-green-50" : "border-blue-500 bg-blue-50"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-800">{note.message}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(note.created_at).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    note.is_read ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  {note.is_read ? "Read" : "New"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;

