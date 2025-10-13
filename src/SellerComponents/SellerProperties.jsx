// import React, { useState, useEffect } from "react";
// import SellerNavbar from "./SellerNavbar";
// import SellerSidebar from "./SellerSidebar";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const SellerProperties = () => {
//   const [properties, setProperties] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     propertyid: "",
//     sellerid: "",
//     type: "",
//     category: "",
//     state: "",
//     city: "",
//     location: "",
//     nearby: "",
//     description: "",
//     status: "inactive",
//     photo: []
//   });

//   const [showPhotoModal, setShowPhotoModal] = useState(false);
//   const [photoGallery, setPhotoGallery] = useState([]);

//   const PropertySchema = Yup.object().shape({
//     propertyid: Yup.string().required("Property ID required"),
//     sellerid: Yup.string().required("Seller ID required"),
//     type: Yup.string().required("Type required"),
//     category: Yup.string().required("Category required"),
//     state: Yup.string().required("State required"),
//     city: Yup.string().required("City required"),
//     location: Yup.string().required("Location required"),
//     nearby: Yup.string(),
//     description: Yup.string(),
//     status: Yup.string().required("Status required")
//   });

//   useEffect(() => {
//     const sellerid = localStorage.getItem("sellerid");
//     if (!sellerid) return;

//     axios
//       .get(`http://localhost:7000/getbysellers?sellerid=${sellerid}`)
//       .then((res) => setProperties(Array.isArray(res.data) ? res.data : []))
//       .catch((err) => console.log(err));
//   }, []);

//   const viewPhoto = async (propertyid) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:7000/views-property/${propertyid}`
//       );
//       setPhotoGallery(res.data);
//       setShowPhotoModal(true);
//     } catch (err) {
//       console.log(err);
//       alert("Error fetching photos");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <SellerNavbar />
//       <div className="flex">
//         <SellerSidebar />
//         <div className="flex-1 p-6">
//           <h2 className="text-2xl font-bold mb-6">My Properties</h2>

//           <button
//             className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition mb-6"
//             onClick={() => setShowModal(true)}
//           >
//             Add Property
//           </button>

//           {/* Table */}
//           <div className="overflow-x-auto bg-white rounded-lg shadow">
//             <table className="w-full text-sm text-gray-600">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   {[
//                     "Property ID",
//                     "Seller ID",
//                     "Type",
//                     "Category",
//                     "State",
//                     "City",
//                     "Location",
//                     "Nearby",
//                     "Description",
//                     "Photo",
//                     "Status",
//                     "View Photos"
//                   ].map((col) => (
//                     <th key={col} className="px-4 py-3 text-left">
//                       {col}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {properties.map((prop, index) => (
//                   <tr
//                     key={index}
//                     className={`${
//                       index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                     } hover:bg-blue-50 transition`}
//                   >
//                     <td className="px-4 py-2">{prop.propertyid}</td>
//                     <td className="px-4 py-2">{prop.sellerid}</td>
//                     <td className="px-4 py-2">{prop.type}</td>
//                     <td className="px-4 py-2">{prop.category}</td>
//                     <td className="px-4 py-2">{prop.state}</td>
//                     <td className="px-4 py-2">{prop.city}</td>
//                     <td className="px-4 py-2">{prop.location}</td>
//                     <td className="px-4 py-2">{prop.nearby}</td>
//                     <td className="px-4 py-2">{prop.description}</td>
//                     <td className="px-4 py-2">
//                       {prop.photo && (
//                         <img
//                           src={`http://localhost:7000/uploads/${prop.photo}`}
//                           alt="property"
//                           className="w-20 h-16 object-cover rounded-md shadow"
//                         />
//                       )}
//                     </td>
//                     <td className="px-4 py-2">{prop.status}</td>
//                     <td className="px-4 py-2">
//                       <button
//                         onClick={() => viewPhoto(prop.propertyid)}
//                         className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//                       >
//                         View Photo
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Add Property Modal */}
//           {showModal && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//               <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
//                 >
//                   &times;
//                 </button>
//                 <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">
//                   Add New Property
//                 </h3>

//                 <Formik
//                   initialValues={formData}
//                   validationSchema={PropertySchema}
//                   onSubmit={(values) => console.log(values)}
//                 >
//                   {({ isSubmitting }) => (
//                     <Form className="flex flex-col gap-3">
//                       {[
//                         "propertyid",
//                         "sellerid",
//                         "type",
//                         "category",
//                         "state",
//                         "city",
//                         "location",
//                         "nearby",
//                         "description",
//                         "status"
//                       ].map((field) => (
//                         <div key={field}>
//                           <Field
//                             type="text"
//                             name={field}
//                             placeholder={field}
//                             className="w-full border px-3 py-2 rounded-md text-sm focus:ring focus:ring-blue-300"
//                           />
//                           <ErrorMessage
//                             name={field}
//                             component="div"
//                             className="text-red-500 text-xs mt-1"
//                           />
//                         </div>
//                       ))}

//                       <div>
//                         <input
//                           type="file"
//                           multiple
//                           className="w-full border px-3 py-2 rounded-md text-sm"
//                           onChange={(e) =>
//                             setFormData({
//                               ...formData,
//                               photo: Array.from(e.target.files)
//                             })
//                           }
//                         />
//                       </div>

//                       <div className="flex justify-end gap-3 mt-3">
//                         <button
//                           type="button"
//                           onClick={() => setShowModal(false)}
//                           className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           type="submit"
//                           disabled={isSubmitting}
//                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                         >
//                           Add
//                         </button>
//                       </div>
//                     </Form>
//                   )}
//                 </Formik>
//               </div>
//             </div>
//           )}

//           {/* View Photos Modal */}
//           {showPhotoModal && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//               <div className="bg-white rounded-lg p-6 w-3/4 max-h-[90vh] overflow-y-auto">
//                 <h3 className="text-lg font-bold text-center mb-4">
//                   Property Photos
//                 </h3>
//                 <div className="flex flex-wrap justify-center gap-4">
//                   {photoGallery.map((p, i) => (
//                     <div
//                       key={i}
//                       className="flex flex-col items-center w-60"
//                     >
//                       <img
//                         src={`http://localhost:7000/uploads/${p.photo}`}
//                         alt="property"
//                         className="w-60 h-40 object-cover rounded-md shadow"
//                       />
//                       <p className="mt-2 text-gray-600 italic text-sm">
//                         {p.description || "No description"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-center mt-4">
//                   <button
//                     onClick={() => setShowPhotoModal(false)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerProperties;
import React, { useState, useEffect } from "react";
import SellerNavbar from "./SellerNavbar";
import SellerSidebar from "./SellerSidebar";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Myproperty = () => {
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    propertyid: "",
    sellerid: "",
    type: "",
    category: "",
    state: "",
    city: "",
    location: "",
    nearby: "",
    description: "",
    status: "inactive",
    photo: []
  });

  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoGallery, setPhotoGallery] = useState([]);

  const PropertySchema = Yup.object().shape({
    propertyid: Yup.string().required("Property ID required"),
    sellerid: Yup.string().required("Seller ID required"),
    type: Yup.string().required("Type required"),
    category: Yup.string().required("Category required"),
    state: Yup.string().required("State required"),
    city: Yup.string().required("City required"),
    location: Yup.string().required("Location required"),
    nearby: Yup.string(),
    description: Yup.string(),
    status: Yup.string().required("Status required")
  });

  useEffect(() => {
    const sellerid = localStorage.getItem("sellerid");
    if (!sellerid) return;
    axios
      .get(`http://localhost:7000/getpropertiesbyseller/${sellerid}`)
      .then((res) => setProperties(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.log(err));
  }, []);

  const viewPhoto = async (propertyid) => {
    try {
      const res = await axios.get(
        `http://localhost:7000/views-property/${propertyid}`
      );
      setPhotoGallery(res.data);
      setShowPhotoModal(true);
    } catch (err) {
      console.log(err);
      alert("Error fetching photos");
    }
  };

  return (
    <div>
      <SellerNavbar />
      <div className="flex">
        <SellerSidebar />
        <div className="p-5 flex-1">
          <h2 className="text-2xl font-semibold mb-5">My Properties</h2>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mb-5 hover:bg-blue-700 transition"
            onClick={() => setShowModal(true)}
          >
            Add Property
          </button>

          {/* Properties Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow">
              <thead className="bg-blue-600 text-white">
                <tr>
                  {[
                    "Property ID",
                    "Seller ID",
                    "Type",
                    "Category",
                    "State",
                    "City",
                    "Location",
                    "Nearby",
                    "Description",
                    "Photo",
                    "Status",
                    "View Photos",
                  ].map((head) => (
                    <th key={head} className="px-3 py-2 text-center text-sm">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {properties.map((prop, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50 transition cursor-pointer`}
                  >
                    <td className="px-2 py-2 text-center text-sm">{prop.propertyid}</td>
                    <td className="px-2 py-2 text-center text-sm">{prop.sellerid}</td>
                    <td className="px-2 py-2 text-center text-sm">{prop.type}</td>
                    <td className="px-2 py-2 text-center text-sm">{prop.category}</td>
                    <td className="px-2 py-2 text-center text-sm">{prop.state}</td>
                    <td className="px-2 py-2 text-center text-sm">{prop.city}</td>
                    <td className="px-2 py-2 text-center text-sm">{prop.location}</td>
                    <td className="px-2 py-2 text-center text-sm">{prop.nearby}</td>
                    <td className="px-2 py-2 text-center text-sm">{prop.description}</td>
                    <td className="px-2 py-2 text-center">
                      {prop.photo && (
                        <img
                          src={`http://localhost:7000/uploads/${prop.photo}`}
                          className="w-20 rounded shadow-sm"
                        />
                      )}
                    </td>
                    <td className="px-2 py-2 text-center">{prop.status}</td>
                    <td className="px-2 py-2 text-center">
                      <button
                        onClick={() => viewPhoto(prop.propertyid)}
                        className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Property Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
                <button
                  className="absolute top-2 right-2 text-xl font-bold"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
                <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
                  Add New Property
                </h3>

                <Formik
                  initialValues={formData}
                  validationSchema={PropertySchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const data = new FormData();
                    Object.keys(values).forEach((key) => data.append(key, values[key]));
                    formData.photo.forEach((file) => data.append("photos", file));

                    try {
                      const res = await axios.post(
                        "http://localhost:7000/add-property",
                        data,
                        { headers: { "Content-Type": "multipart/form-data" } }
                      );
                      alert(res.data.message);
                      setShowModal(false);
                      resetForm();
                      const updated = await axios.get(
                        "http://localhost:7000/viewsellerproperties"
                      );
                      setProperties(Array.isArray(updated.data) ? updated.data : []);
                    } catch (err) {
                      console.log(err);
                      alert("Error adding property");
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  {({ isSubmitting, setFieldValue }) => (
                    <Form className="flex flex-col gap-3">
                      {[
                        "propertyid",
                        "sellerid",
                        "type",
                        "category",
                        "state",
                        "city",
                        "location",
                        "nearby",
                        "description",
                        "status",
                      ].map((field) => (
                        <div key={field}>
                          <Field
                            type="text"
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <ErrorMessage
                            name={field}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                      ))}

                      <div>
                        <input
                          type="file"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files);
                            setFormData({ ...formData, photo: files });
                          }}
                          className="w-full px-2 py-1 border rounded cursor-pointer"
                        />
                      </div>

                      <div className="flex justify-end gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                        >
                          Add
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          )}

         {showPhotoModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-5 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto text-center">
      <h3 className="text-xl font-semibold mb-4">Property Photos</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {photoGallery.map((p, i) => (
          <div key={i} className="flex flex-col items-center w-60">
            <img
              src={`http://localhost:7000/uploads/${p.photo}`}
              alt={p.description || "Property Photo"}
              className="rounded shadow-sm w-full"
            />
            <p className="text-sm italic text-gray-600 mt-1 text-center">
              {p.description || "No description"}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowPhotoModal(false)}
        className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Myproperty;
