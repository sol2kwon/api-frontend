import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './Pages/Home'
import Bmi from './conponents/Bmi'
import Calc from './conponents/Calc'
import Grade from './conponents/Grade'
import Login from './conponents/Login'
import Counter from './conponents/Counter'

export default function App () {
  return useRoutes([
{path: "/",element:<Home />},
{path: "bmi",element:<Bmi/>},
{path: "calc",element:<Calc />},
{path: "grade",element:<Grade />},
{path: "login",element:<Login />},
{path: "counter",element:<Counter />},
  ]);
}
  
