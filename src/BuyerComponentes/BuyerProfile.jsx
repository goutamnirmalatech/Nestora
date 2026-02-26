import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const BuyerProfile = () => {
  const handleSubmit = async (values) => {
    await axios.patch("/api/buyer/profile", values);
    alert("Profile updated successfully!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
      <Formik initialValues={{ name: "", phone: "", email: "" }} onSubmit={handleSubmit}>
        <Form className="space-y-3 max-w-md">
          <div>
            <label>Name</label>
            <Field name="name" className="border w-full p-2 rounded" />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" className="border w-full p-2 rounded" />
          </div>
          <div>
            <label>Phone</label>
            <Field name="phone" className="border w-full p-2 rounded" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BuyerProfile;
