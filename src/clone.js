// import './App.css';
// import Header from "./myComponents/Header";
// import Todos from "./myComponents/Todos";
// import Footer from "./myComponents/Footer";
// import AddTodo from "./myComponents/AddTodo";
// import React, { useState, useEffect } from 'react'
// import About from "./myComponents/About";
// import {
//     BrowserRouter,
//     Routes,
//     Route
// } from "react-router-dom";

// function App() {

//     let initialTodo;
//     if (localStorage.getItem(('todos') === null)) {
//         initialTodo = [];
//     } else {
//         initialTodo = JSON.parse(localStorage.getItem('todos'));
//     }

//     const [todos, setTodos] = useState(initialTodo);
//     // [
//     //     {  
//     //         sno: 1,
//     //         title: 'Go to Market',
//     //         desc: 'You need to go to Market to get this Job done!'
//     //     },
//     //     {
//     //         sno: 2,
//     //         title: 'Go to University',
//     //         desc: 'You need to go to University to get this Job done!'
//     //     },
//     //     {
//     //         sno: 3,
//     //         title: 'Go to Gym',
//     //         desc: 'You need to go to Gym to get this Job done!'
//     //     },
//     // ]);

//     const onDelete = (todo) => {

//         setTodos(todos.filter((e) => {
//             return e !== todo;
//         }))

//         localStorage.setItem('todos', JSON.stringify(todos));
//     }

//     /*AddTodo*/

//     const addTodo = (title, desc) => {
//         // console.log('I am adding this todo', title, desc);
//         let sno;
//         if (todos.length === 0) {
//             sno = 1
//         } else {
//             sno = todos[todos.length - 1].sno + 1;
//         }
//         const newTodo = {
//             title: title,
//             desc: desc,
//             sno: sno
//         }
//         // console.log(newTodo);
//         setTodos([...todos, newTodo]);


//     }

//     useEffect(() => {
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }, [todos]);


//     return (
//         <BrowserRouter>
//             <>
//                 <Header title='MyTodosList' searchBar={true} />
//                 <Routes>
//                     <Route path="/" render={() => {
//                         return (
//                             <>
//                                 <AddTodo addTodo={addTodo} />
//                                 <Todos todos={todos} onDelete={onDelete} />
//                             </>
//                         )
//                     }}></Route>
//                     <Route path="/about" element={<About />}></Route>
//                 </Routes>

//                 <Footer />
//             </>
//         </BrowserRouter>);
// }

// export default App;
