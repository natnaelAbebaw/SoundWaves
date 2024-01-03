import { Global, css } from "@emotion/react";

import GlobalStyles from "./styles/globalStyles";
import AppLayout from "./uis/AppLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Global
        styles={css`
          ${GlobalStyles}
        `}
      />
      <AppLayout />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-700)",
            color: "var(--color-grey-200)",
          },
        }}
      />
    </div>
  );
}

export default App;
