import React from "react";
import { Notification } from "@progress/kendo-react-notification";

export const NotificationComponent = ({ type, message }) => {
  return (
    <Notification type={{ style: type, icon: true }} closable>
      {message}
    </Notification>
  );
};
