import React, { useEffect, useMemo, useState } from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";
import useInitialData from "../../hooks/useInitialData";
import LayoutSinglePage from "../molecules/LayoutSinglePage";

const Layout = () => {
  // TODO kjw page data 받아서 main page 띄우기 BBC-998
  const { initialPage } = useInitialData();
  const [isPageCompleted, setIsPageCompleted] = useState(false);

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  useEffect(() => {
    console.log("initialPage", initialPage);
  }, [initialPage]);

  const layoutMain = useMemo(() => {
    if (initialPage?.type === "SinglePage") {
      return (
        <LayoutSinglePage
          page={initialPage}
          setPageCompleted={setPageCompleted}
        />
      );
    }
    // else {
    //   return (
    //     <LayoutMultiPage
    //       page={initialPage}
    //       setPageCompleted={setPageCompleted}
    //     />
    //   );
    // }
  }, [initialPage]);

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        {layoutMain}
        {/* <TemplateDialogue /> */}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
