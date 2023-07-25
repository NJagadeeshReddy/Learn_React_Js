import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Accordion from './Accordion/Accordion'
import Api from './API-ex/Api'
import Apihw from './API-ex/Apihw'
import Cc from './Assigments/Cc'
import Cal from './Calculator/Cal'
import App2 from './App2'
import Form from './Form/Form'
import Lifecycle from './LifeCyeleMethod/Lifecycle'
import App from './propsDrillling/App'
import RecipeReviewCard from './Mui-ex/RecipeCard'
import Abc from './Redux/abc'
import IncDec from './States/Inc_Dec'
import ToggleText from './States/ToggleText'
import Todo from './Todo/Todo'
import TodoEdit from './Todo/TodoEdit'
import UseCallBack from './useCallBack/UseCallBack'
import Apptwo from './usecontext/Apptwo'
import Apicomp from './useeffect/Apicomp'
import Effect from './useeffect/Effect'
import UseMemo from './useMemo/useMemo'
import UseRedure from './useRedure/UseRedure'
import UseRef from "./useRef/UseRef"

const AppM = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="accordion" element={<Accordion />} />
        <Route path="api1" element={<Api />} />
        <Route path="apihw" element={<Apihw />} />
        <Route path="ass" element={<Cc />} />
        <Route path="cal" element={<Cal />} />
        <Route path="app2" element={<App2 />} />
        <Route path='form' element={<Form />} />
        <Route path="lifecycle" element={<Lifecycle />} />
        <Route path="mui" element={<RecipeReviewCard />} />
        <Route path="propsdrilling" element={<App />} />
        <Route path="redux" element={<Abc />} />
        <Route path="incdec" element={<IncDec />} />
        <Route path="toggle" element={<ToggleText />} />
        <Route path="todo" element={<Todo />} />
        <Route path="todoedit" element={<TodoEdit />} />
        <Route path="usecallback" element={<UseCallBack />} />
        <Route path="useCtxt" element={<Apptwo />} />
        <Route path="useeft" element={<Apicomp />} />
        <Route path="effect" element={<Effect />} />
        <Route path="usememo" element={<UseMemo />} />
        <Route path="useredure" element={<UseRedure />} />
        <Route path="useref" element={<UseRef />} />
      </Routes>
    </div>
  )
}

export default AppM
