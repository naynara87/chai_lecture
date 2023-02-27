import React from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";
import { Template01 } from "chai-ui-v2";

const Layout = () => {
  // TODO kjw page data 받아서 main page 띄우기 BBC-998
  // const layoutMain = useMemo(() => {
  //   if (page.type === "SinglePage") {
  //     <LayoutSinglePage />
  //   } else {
  //     <LayoutMultiPage />
  //   }
  // }, [])

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        {/* {layoutMain} */}
        <Template01 />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
