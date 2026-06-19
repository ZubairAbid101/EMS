import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEPARTMENTS } from "../assets/assets";
import { Loader2Icon } from "lucide-react";

const EmployeeForm = ({ initialData, onSuccess, onCancel }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isEditData = !!initialData;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl animate-fade-in"
    >
      {/* Personal Information */}
      <div className="card p-5 sm:p-6">
        <h3 className="font-medium mb-6 pb-4 border-b border-slate-100">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          <div>
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              defaultValue={initialData?.firstName}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              defaultValue={initialData?.lastName}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              defaultValue={initialData?.phone}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Join Date</label>
            <input
              type="date"
              name="joinDate"
              defaultValue={
                initialData?.joinDate
                  ? new Date(initialData.joinDate).toISOString().split("T")[0]
                  : ""
              }
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2">Bio (Optional)</label>
            <textarea
              name="bio"
              defaultValue={initialData?.bio}
              rows={3}
              className="resize-none"
              placeholder="Brief Description..."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Employment Details */}
      <div className="card p-5 sm:p-6">
        <h3 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100">
          Employment Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          <div>
            <label className="block mb-2">Department</label>
            <select
              name="department"
              defaultValue={initialData?.department || ""}
            >
              <option value="">Select Department</option>
              {DEPARTMENTS.map((dept) => {
                return (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="block mb-2">Position</label>
            <input
              type="text"
              name="position"
              defaultValue={initialData?.position}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Basic Salary</label>
            <input
              type="number"
              name="basicSalary"
              defaultValue={initialData?.basicSalary || 0}
              min={0}
              step={0.01}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Allowances</label>
            <input
              type="number"
              name="allowances"
              defaultValue={initialData?.allowances || 0}
              min={0}
              step={0.01}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Deductions</label>
            <input
              type="number"
              name="deductions"
              defaultValue={initialData?.deductions || 0}
              min={0}
              step={0.01}
              required
            />
          </div>

          {isEditData && (
            <div>
              <label className="block mb-2">Status</label>
              <select
                name="employmentStatus"
                defaultValue={initialData?.employmentStatus || ""}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Account Setup */}
      <div className="card p-5 sm:p-6">
        <h3 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100">
          Account Setup
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          <div className="sm:col-span-2">
            <label className="block mb-2">Work Email</label>
            <input
              type="email"
              name="email"
              defaultValue={initialData?.email}
              required
            />
          </div>

          {!isEditData && (
            <div>
              <label className="block mb-2">Temporary Password</label>
              <input type="password" name="password" required />
            </div>
          )}

          {isEditData && (
            <div>
              <label className="block mb-2">Change Password (Optional)</label>
              <input
                type="password"
                name="password"
                placeholder="Enter new password"
              />
            </div>
          )}

          <div>
            <label className="block mb-2">System Role</label>
            <select name="role" defaultValue={initialData?.role || "EMPLOYEE"}>
              <option value="">Select Role</option>
              <option value="EMPLOYEE">Employee</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
        <button
          onClick={() => (onCancel ? onCancel() : navigate(-1))}
          type="button"
          className="btn-secondary"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary flex items-center justify-center"
        >
          {loading && <Loader2Icon className="animate-spin w-4 h-4 mr-2" />}
          {isEditData ? "Update Employee" : "Create Employee"}
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
