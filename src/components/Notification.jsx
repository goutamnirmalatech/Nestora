import React, { useEffect, useState } from "react";
import axios from "axios";

const Notifications = ({ sellerid }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/getnotifications/seller/${sellerid}`)
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error(err));
  }, [sellerid]);

  const markAsRead = async (id) => {
    await axios.patch(`http://localhost:7000/read/${id}`);
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_read: 1 } : n))
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-96">
      <h3 className="text-lg font-semibold mb-3">🔔 Notifications</h3>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((n) => (
            <li
              key={n.id}
              onClick={() => markAsRead(n.id)}
              className={`p-3 rounded-lg cursor-pointer ${
                n.is_read ? "bg-gray-200" : "bg-yellow-100"
              }`}
            >
              <p>{n.message}</p>
              <small className="text-gray-500">
                {new Date(n.created_at).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
