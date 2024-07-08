import {useState,createContext,useContext} from "react";

const usercontext=createContext();

function Component1(){

  const[user,setuser]=userstate("deepu");

  return(

    <usercontext.provider value={user}>

      <h1>{'Hello ${user}!'}</h1>

      <Component2/>

      </usercontext.provider>

  );

}

function Component3(){

  return(

    <>

    <h1>component3</h1>

    <Component4/>

    </>

  );

}

function component4(){

  return(

    <>

    <h1>component4</h1>

    <Component5/>

    </>

  );

}

function Component5(){

  const user=useContext(usercontext);

  return(

    <>

    <h1>Component5</h1>

    <h2>{"Hello ${user}again !"}</h2>

    </>

  );

}

export default Component1;



















