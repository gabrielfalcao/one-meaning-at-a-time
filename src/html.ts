import React from "react";
import { createRoot } from "react-dom/client";

export const render = (
  id: string,
  Component: React.FunctionComponent,
  props: object,
) => {
  const root = createRoot(document.getElementById(id));
  root.render(
    <React.StrictMode>
      <Component {...props} />
    </React.StrictMode>,
  );
};

export default { render };
