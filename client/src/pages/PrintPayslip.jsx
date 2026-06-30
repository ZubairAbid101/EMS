import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyPayslipData } from "../assets/assets";
import Loading from "../components/Loading";
import { format } from "date-fns";

const PrintPayslip = () => {
  const { id } = useParams();
  const [payslipData, setPayslipData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPayslipData(dummyPayslipData.find((payslip) => payslip.id === id));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!payslipData) {
    return (
      <div className="text-center py-12 text-slate-400">Payslip not found</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white animate-fade-in">
      <div className="text-center border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          PAYSLIP
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          {format(
            new Date(payslipData.year, payslipData.month - 1),
            "MMMM yyyy",
          )}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Employee Name */}
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
            Employee Name
          </p>
          <p className="font-semibold text-slate-900">
            {payslipData.employee?.firstName} {payslipData.employee?.lastName}
          </p>
        </div>

        {/* Employee Position */}
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
            Employee Position
          </p>
          <p className="font-semibold text-slate-900">
            {payslipData.employee?.position}
          </p>
        </div>

        {/* Employee Email */}
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
            Employee Email
          </p>
          <p className="font-semibold text-slate-900">
            {payslipData.employee?.email}
          </p>
        </div>

        {/* Employee Period */}
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
            Employee Period
          </p>
          <p className="font-semibold text-slate-900">
            {format(
              new Date(payslipData.year, payslipData.month - 1),
              "MMMM yyyy",
            )}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">
                Description
              </th>
              <th className="text-right py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-slate-100">
              <td className="py-3 px-4 text-slate-700">Basic Salary</td>
              <td className="py-3 px-4 text-right font-semibold text-slate-900">
                ${payslipData.basicSalary?.toLocaleString()}
              </td>
            </tr>

            <tr className="border-t border-slate-100">
              <td className="py-3 px-4 text-slate-700">Allowances</td>
              <td className="py-3 px-4 text-right font-semibold text-slate-900">
                +${payslipData.allowances?.toLocaleString()}
              </td>
            </tr>

            <tr className="border-t border-slate-100">
              <td className="py-3 px-4 text-slate-700">Deductions</td>
              <td className="py-3 px-4 text-right font-semibold text-slate-900">
                ${payslipData.deductions?.toLocaleString()}
              </td>
            </tr>

            <tr className="border-t-2 border-slate-200 bg-slate-50">
              <td className="py-4 px-4 text-slate-900">Net Salary</td>
              <td className="py-4 px-4 text-right font-bold text-slate-900 text-lg">
                ${payslipData.netSalary?.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <button
          onClick={() => window.print()}
          className="btn-primary print:hidden"
        >
          Print Payslip
        </button>
      </div>
    </div>
  );
};

export default PrintPayslip;
