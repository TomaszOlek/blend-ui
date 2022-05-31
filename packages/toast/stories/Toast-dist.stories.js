import React from "react";
import { ToastContextProvider, useToast } from "@blend-ui/toast";

export default { title: "Toast-dist PROVIDER" };

export function ComponentDist() {
  //const toast = React.useContext(ToastContext);
  const toast = useToast();
  console.log("Toast context inside Component", typeof toast, toast);
  //console.log("ALERTS", toast.alerts.length > 0 ? toast.alerts[0] : null);

  return (
    <React.Fragment>
      <div>Toasts</div>
      <div>
        <button
          onClick={() => {
            toast.show("Toast message", { title: "Test title", duration: 0 });
            toast.check();
          }}
        >
          New Error Toast
        </button>
        <button
          onClick={() => {
            toast.warning("Toast message", {});
          }}
        >
          New Warning Toast
        </button>
        <button
          onClick={() => {
            toast.info("Toast message", {});
          }}
        >
          New Info Toast
        </button>
        <button
          onClick={() => {
            toast.success("Toast message", {});
          }}
        >
          New Success Toast
        </button>
      </div>
    </React.Fragment>
  );
}
/*
Component.story = {
  name: "Component",
  decorators: [ADecorator],
};
*/
ComponentDist.story = {
  name: "useToast-dist",
  decorators: [
    Story => {
      return (
        <ToastContextProvider>
          <Story />
        </ToastContextProvider>
      );
    },
  ],
};
