// import { useEffect, createContext, useState } from "react";

// const AuthContext = createContext();
// const petFinderKey = "";
// const petFinderSecret = "";
// function myApp({ Component, pageProps }) {
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const fetchAccessToken = async () => {
//       const params = new URLSearchParams();
//       params.append("grant_type", "client_credentials");
//       params.append("client_id", petFinderKey);
//       params.append("client_secret", petFinderSecret);
//       const petFinderRes = await fetch(
//         "https://api.petfinder.com/v2/oauth2/token",
//         {
//           method: "POST",
//           body: params,
//         }
//       );
//       console.log(await petFinderRes.json());
//     };
//     fetchAccessToken();
//   }, []);

//   return (
//     <AuthContext.Provider>
//       <Component {...pageProps} />
//     </AuthContext.Provider>
//   );
// }
// export default myApp;
