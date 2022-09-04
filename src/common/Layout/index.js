import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import { Feed } from "components/YoutubeComponents";

const Layout = (props) => {
  return (
    <Fragment>
      <Feed></Feed>
    </Fragment>
  );
};

// Layout.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.element,
//     PropTypes.array,
//     PropTypes.object,
//   ]),
// };

export default Layout;
