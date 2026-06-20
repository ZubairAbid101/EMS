import { useCallback, useEffect, useState } from "react";
import { dummyAttendanceData } from "../assets/assets";
import Loading from "../components/Loading";
import CheckInButton from "../components/Attendance/CheckInButton";
import AttendanceStats from "../components/Attendance/AttendanceStats";
import AttendanceHistory from "../components/Attendance/AttendanceHistory";

const Attendance = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  const fetchAttendanceHistory = useCallback(async () => {
    setHistory(dummyAttendanceData);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetchAttendanceHistory();
  }, [fetchAttendanceHistory]);

  if (loading) {
    return <Loading />;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

  const todayRecord = history.find(
    (record) => new Date(record.date).toDateString() === today.toDateString(),
  );
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Attendance</h1>
        <p className="page-subtitle">
          Track your work hours and attendance records
        </p>
      </div>

      {isDeleted ? (
        <div className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded rounded-2xl text-center">
          <p className="text-rose-600">
            You can no longer clock in or out because your account has been
            deactivated.
          </p>
        </div>
      ) : (
        <div className="mb-8">
          <CheckInButton
            todayRecord={todayRecord}
            onAction={fetchAttendanceHistory}
          />
        </div>
      )}

      <AttendanceStats history={history} />
      <AttendanceHistory history={history} />
    </div>
  );
};

export default Attendance;
