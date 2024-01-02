import reactLogo from "./assets/react.svg";
import logo from "./assets/logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="App">
      <div>
          <img id="logo" src={logo} />
          <p style={{fontSize:'20px', lineHeight:'2'}}>A Row Z Ventures Company</p>
         <p style={{fontSize:'20px', lineHeight:'2'}}>Coming Soon</p>
      </div>
    </div>
        </>
      ),
    },
    {
      path: "/contact_us",
      element: (
        <div className="App">
        <div>
            <img id="logo" src={logo} />
            <p style={{fontSize:'20px', lineHeight:'2'}}>Questions?</p>
           <p style={{fontSize:'20px', lineHeight:'2'}}>Email us at <a href="mailto:support@offtake.co">support@offtake.co</a></p>
        </div>
      </div>
      ),
    },
    // {
    //   path: "/privacy_policy",
    //   element: (
    //     <VStack
    //       backgroundColor="black"
    //       paddingX={{ base: "10", md: "12" }}
    //       paddingBottom="200px"
    //     >
    //       <Box padding="50px">
    //         <Logo height="30px" />
    //       </Box>
    //       <PrivacyPolicy />
    //     </VStack>
    //   ),
    // },
    // {
    //   path: "/terms",
    //   element: (
    //     <VStack
    //       backgroundColor="black"
    //       paddingX={{ base: "10", md: "12" }}
    //       paddingBottom="200px"
    //     >
    //       <Box padding="50px">
    //         <Logo height="30px" />
    //       </Box>
    //       <Terms />
    //     </VStack>
    //   ),
    // },
  ]);

  return (
    <RouterProvider router={router} />

    
  );
}

export default App;
