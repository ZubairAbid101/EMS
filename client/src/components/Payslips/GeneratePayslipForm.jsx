import { Loader, Plus, X } from "lucide-react";
import { useState } from "react";

const GeneratePayslipForm = ({ employees, onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="btn-primary flex items-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Generate Payslip
      </button>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="card max-w-lg w-full p-6 animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">
            Generate Monthly Payslip
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-slate-600 p-1"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select Employee */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Employee
            </label>
            <select name="employee" required>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.firstName} {employee.lastName} ({employee.position})
                </option>
              ))}
            </select>
          </div>

          {/* Select Month and Year */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Month
              </label>
              <select name="month">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Year
              </label>
              <input
                type="number"
                name="year"
                defaultValue={new Date().getFullYear()}
              />
            </div>
          </div>

          {/* Basic Salary */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Basic Salary
            </label>
            <input
              type="number"
              name="basicSalary"
              placeholder="Enter basic salary"
              required
            />
          </div>

          {/* Allowances and Deductions */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Allowances
              </label>
              <input
                type="number"
                name="allowances"
                defaultValue={0}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Deductions
              </label>
              <input
                type="number"
                name="deductions"
                defaultValue={0}
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="btn-secondary"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center"
            >
              {loading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneratePayslipForm;
