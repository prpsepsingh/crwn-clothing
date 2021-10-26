import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// HOC that takes component as argument and gives back Spinner component which renders component passed in when loading = false.
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  }
  return Spinner;
};

export default WithSpinner;
