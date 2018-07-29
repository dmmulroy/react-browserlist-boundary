import { matchesUA } from "browserslist-useragent";

const noop = () => {};

const ReactBrowersListBoundary = ({
  browsersList = [],
  children = noop,
  env,
  ignorePatch = true,
  ignoreMinor = false,
  allowHigherVersions = false
}) => {
  const { userAgent = "" } = window.navigator;
  const opts = {
    browsers: browsersList,
    env,
    ignorePatch,
    ignoreMinor,
    allowHigherVersions
  };

  return children(matchesUA(userAgent, opts));
};

export default ReactBrowersListBoundary;
