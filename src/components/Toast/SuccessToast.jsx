import { IconCircleCheck } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export default function SuccessToast({ message, toastState }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      toastState(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [toastState]);

  return (
    <>
      <div
        className="absolute max-w-xs rounded-md border bg-white shadow-lg"
        role="alert"
      >
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <IconCircleCheck className="h-5 w-5 text-green-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-700">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
