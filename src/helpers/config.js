import home from "./pageConf/home";

const currentPage = window.location.pathname;
let exportFile = "";

if (currentPage === "/") {
  exportFile = home;
}

export default exportFile;
