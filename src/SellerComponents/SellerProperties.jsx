import React, { useState, useEffect } from "react";
import SellerNavbar from "./SellerNavbar";
import SellerSidebar from "./SellerSidebar";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DataTable from "react-data-table-component";
import { BiSolidBookAdd } from "react-icons/bi";
import Swal from "sweetalert2";

const Myproperty = () => {
  const [properties, setProperties] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoGallery, setPhotoGallery] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

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
    status: "available",
    price: "",
  });

  // ✅ Validation Schema
  const PropertySchema = Yup.object().shape({
    propertyid: Yup.string().required("Property ID required"),
    sellerid: Yup.string().required("Seller ID required"),
    type: Yup.string().required("Type required"),
    category: Yup.string().required("Category required"),
    state: Yup.string().required("State required"),
    city: Yup.string().required("City required"),
    location: Yup.string().required("Location required"),
    status: Yup.string().required("Status required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required")
      .positive("Price must be greater than 0"),
  });

  // ✅ Fetch Properties
  const getProperties = async () => {
    try {
      const sellerid = localStorage.getItem("sellerid");
      if (!sellerid) return;
      const res = await axios.get(
        `http://localhost:7000/getpropertiesbyseller/${sellerid}`
      );
      const data = Array.isArray(res.data) ? res.data : [];
      setProperties(data);
      setFilteredData(data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  // ✅ Search Function
  useEffect(() => {
    const lower = searchTerm.toLowerCase();
    setFilteredData(
      properties.filter(
        (p) =>
          p.propertyid?.toLowerCase().includes(lower) ||
          p.type?.toLowerCase().includes(lower) ||
          p.category?.toLowerCase().includes(lower) ||
          p.city?.toLowerCase().includes(lower) ||
          p.state?.toLowerCase().includes(lower) ||
          p.location?.toLowerCase().includes(lower)
      )
    );
  }, [searchTerm, properties]);

  // ✅ Edit Handler
  const handleEdit = (property) => {
    setEditMode(true);
    setEditId(property.propertyid);
    setFormData({
      propertyid: property.propertyid || "",
      sellerid: property.sellerid || "",
      type: property.type || "",
      category: property.category || "",
      state: property.state || "",
      city: property.city || "",
      location: property.location || "",
      nearby: property.nearby || "",
      description: property.description || "",
      status: property.status || "available",
      price: property.price || "",
    });
    setShowModal(true);
  };

  // ✅ View Photo Modal
  const viewPhoto = async (propertyid) => {
    try {
      const res = await axios.get(
        `http://localhost:7000/views-property/${propertyid}`
      );
      setPhotoGallery(res.data);
      setShowPhotoModal(true);
    } catch (err) {
      Swal.fire("Error", "Could not fetch property photos!", "error");
    }
  };

  // ✅ DataTable Columns
  const columns = [
    { name: "Property ID", selector: (row) => row.propertyid, sortable: true },
    { name: "Seller ID", selector: (row) => row.sellerid, sortable: true },
    { name: "Type", selector: (row) => row.type, sortable: true },
    { name: "Category", selector: (row) => row.category, sortable: true },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "Price (₹)", selector: (row) => row.price || "-", sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => viewPhoto(row.propertyid)}
            className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
          >
            View
          </button>
          <button
            onClick={() => handleEdit(row)}
            className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <SellerNavbar />
      <div className="flex">
        <SellerSidebar />

        <div
          className="p-5 flex-1 relative z-[20] min-h-screen"
          style={{ overflow: "visible", pointerEvents: "auto" }}
        >
          <h3 className="text-2xl font-semibold mb-5 text-blue-700">
            My Properties
          </h3>

          {/* Search + Add */}
          <div className="flex justify-between mb-3 items-center gap-3">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition relative z-[100]"
              onClick={() => {
                setEditMode(false);
                setFormData({
                  propertyid: "",
                  sellerid: "",
                  type: "",
                  category: "",
                  state: "",
                  city: "",
                  location: "",
                  nearby: "",
                  description: "",
                  status: "available",
                  price: "",
                });
                setShowModal(true);
              }}
            >
              <BiSolidBookAdd size={22} />
            </button>

            <input
              type="text"
              placeholder="🔍 Search property..."
              className="border border-gray-300 rounded-full px-5 py-2 w-96 shadow-sm 
              focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <p className="text-gray-600 mb-2">
            Total Properties: {filteredData.length}
          </p>

          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 20]}
            highlightOnHover
            striped
            responsive
          />

          {/* ✅ Add/Edit Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-[9999]">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] max-h-[80vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 text-blue-700">
                  {editMode ? "Edit Property" : "Add Property"}
                </h2>

                <Formik
                  enableReinitialize
                  initialValues={formData}
                  validationSchema={PropertySchema}
                  onSubmit={async (values) => {
                    try {
                      if (editMode) {
                        await axios.patch(
                          `http://localhost:7000/updateproperty/${editId}`,
                          values
                        );
                        Swal.fire(
                          "Updated!",
                          "Property updated successfully!",
                          "success"
                        );
                      } else {
                        await axios.post(
                          "http://localhost:7000/addnewproperty",
                          values
                        );
                        Swal.fire(
                          "Added!",
                          "Property added successfully!",
                          "success"
                        );
                      }
                      setShowModal(false);
                      getProperties();
                    } catch (err) {
                      console.error(err);
                      Swal.fire("Error", "Operation failed!", "error");
                    }
                  }}
                >
                  {() => (
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
                        "price",
                        "status",
                      ].map((field) => (
                        <div key={field}>
                          <Field
                            name={field}
                            placeholder={field}
                            className="w-full border rounded px-3 py-2"
                          />
                          <ErrorMessage
                            name={field}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                      ))}

                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className="bg-gray-400 text-white px-3 py-2 rounded hover:bg-gray-500"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                        >
                          {editMode ? "Update" : "Add"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          )}

          {/* ✅ Photo View Modal */}
          {showPhotoModal && (
            <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-[9999]">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] max-h-[80vh] overflow-y-auto text-center">
                <h2 className="text-xl font-semibold mb-4 text-blue-700">
                  Property Photos
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {photoGallery.map((p, i) => (
                    <div key={i} className="flex flex-col items-center w-56">
                      <img
                        src={`http://localhost:7000/uploads/${p.photo}`}
                        alt="Property"
                        className="rounded shadow-sm w-full"
                      />
                      <p className="text-sm text-gray-600 mt-1 italic">
                        {p.description || "No description"}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowPhotoModal(false)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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


