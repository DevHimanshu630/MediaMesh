// YourComponent.jsx
import React, { useState } from "react";

import "./Demo.css"; // Import your CSS file for styling

const Tabcontent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full  ">
      <div className="tabs flex gap-[20px] mt-[5rem] w-full  text-center justify-center">
        <button onClick={() => handleTabClick("tab1")} className="flex text-center gap-[5px] items-center text-gray-500 border rounded-[30px] hover:border-[#ec1313] hover:text-[#ec1313] text-[14px]  px-5 ">
          All
        </button>
        <button onClick={() => handleTabClick("tab2")} className="flex text-center gap-[5px] items-center text-gray-500 border rounded-[30px] hover:border-[#ec1313] hover:text-[#ec1313] text-[18px] p-2 px-4 ">
          <img width='18px' height='18px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMTUzODUgMTQuOTIzMVYyNy4zMDc3TTQuMTUzODUgMjcuMzA3N0gzQzIuNDQ3NzIgMjcuMzA3NyAyIDI3Ljc1NTQgMiAyOC4zMDc3VjI5QzIgMjkuNTUyMyAyLjQ0NzcyIDMwIDMgMzBIMjlDMjkuNTUyMyAzMCAzMCAyOS41NTIzIDMwIDI5VjI4LjMwNzdDMzAgMjcuNzU1NCAyOS41NTIzIDI3LjMwNzcgMjkgMjcuMzA3N0gyNy44NDYyTTQuMTUzODUgMjcuMzA3N0gxOS43NjkySDI1LjY5MjNIMjcuODQ2Mk0yNy44NDYyIDI3LjMwNzdWMTQuOTIzMU0yNy44NDYyIDQuMTUzODVWM0MyNy44NDYyIDIuNDQ3NzIgMjcuMzk4NCAyIDI2Ljg0NjIgMkg1LjE1Mzg1QzQuNjAxNTYgMiA0LjE1Mzg1IDIuNDQ3NzIgNC4xNTM4NSAzVjQuMTUzODVNMjcuODQ2MiA0LjE1Mzg1SDIyLjQ2MTVNMjcuODQ2MiA0LjE1Mzg1TDI5LjQzMTIgOS43MDE2MkMyOS43NjEgMTAuODU1OSAyOS4yMjE5IDEyLjA4MTMgMjguMTQ4MiAxMi42MTgyVjEyLjYxODJDMjcuMzAzMSAxMy4wNDA4IDI2LjI5MTcgMTIuOTQ5NiAyNS41MzU4IDEyLjM4MjZMMjQuNjE1NCAxMS42OTIzTTQuMTUzODUgNC4xNTM4NUwyLjU2ODc3IDkuNzAxNjJDMi4yMzg5OCAxMC44NTU5IDIuNzc4MDYgMTIuMDgxMyAzLjg1MTc4IDEyLjYxODJWMTIuNjE4MkM0LjY5NjkxIDEzLjA0MDggNS43MDgyNiAxMi45NDk2IDYuNDY0MTggMTIuMzgyNkw3LjM4NDYyIDExLjY5MjNNNC4xNTM4NSA0LjE1Mzg1SDkuNTM4NDZNOS41Mzg0NiA0LjE1Mzg1TDcuMzg0NjIgMTEuNjkyM005LjUzODQ2IDQuMTUzODVIMTMuODQ2Mk03LjM4NDYyIDExLjY5MjNWMTEuNjkyM0M4Ljg3MTU0IDEzLjE3OTIgMTEuMjgyMyAxMy4xNzkyIDEyLjc2OTIgMTEuNjkyM1YxMS42OTIzTTEzLjg0NjIgNC4xNTM4NUwxMi43NjkyIDExLjY5MjNNMTMuODQ2MiA0LjE1Mzg1SDE4LjE1MzhNMTIuNzY5MiAxMS42OTIzVjExLjY5MjNDMTQuNTUzNSAxMy40NzY2IDE3LjQ0NjUgMTMuNDc2NiAxOS4yMzA4IDExLjY5MjNWMTEuNjkyM00xOC4xNTM4IDQuMTUzODVMMTkuMjMwOCAxMS42OTIzTTE4LjE1MzggNC4xNTM4NUgyMi40NjE1TTE5LjIzMDggMTEuNjkyM1YxMS42OTIzQzIwLjQxMzMgMTMuMTcwNCAyMi41NzkxIDEzLjM4OTIgMjQuMDMzMyAxMi4xNzc0TDI0LjYxNTQgMTEuNjkyM00yMi40NjE1IDQuMTUzODVMMjQuNjE1NCAxMS42OTIzTTE4LjY5MjMgMjQuNjE1NFYxNy41Mzg1QzE4LjY5MjMgMTYuOTg2MiAxOS4xNCAxNi41Mzg1IDE5LjY5MjMgMTYuNTM4NUgyMy42MTU0QzI0LjE2NzcgMTYuNTM4NSAyNC42MTU0IDE2Ljk4NjIgMjQuNjE1NCAxNy41Mzg1VjI0LjYxNTRNMTUuNDYxNSAxNy41Mzg1VjIxLjQ2MTVDMTUuNDYxNSAyMi4wMTM4IDE1LjAxMzggMjIuNDYxNSAxNC40NjE1IDIyLjQ2MTVIOC4zODQ2MkM3LjgzMjMzIDIyLjQ2MTUgNy4zODQ2MiAyMi4wMTM4IDcuMzg0NjIgMjEuNDYxNVYxNy41Mzg1QzcuMzg0NjIgMTYuOTg2MiA3LjgzMjMzIDE2LjUzODUgOC4zODQ2MiAxNi41Mzg1SDE0LjQ2MTVDMTUuMDEzOCAxNi41Mzg1IDE1LjQ2MTUgMTYuOTg2MiAxNS40NjE1IDE3LjUzODVaIiBzdHJva2U9IiM0OTUwNTciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
          Retail</button>
        <button onClick={() => handleTabClick("tab3")} className="flex text-center gap-[5px] items-center text-gray-500 border rounded-[30px] hover:border-[#ec1313] hover:text-[#ec1313] text-[18px] p-2 px-4 ">
          <img width='18px' height='18px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMTUzODUgMTQuOTIzMVYyNy4zMDc3TTQuMTUzODUgMjcuMzA3N0gzQzIuNDQ3NzIgMjcuMzA3NyAyIDI3Ljc1NTQgMiAyOC4zMDc3VjI5QzIgMjkuNTUyMyAyLjQ0NzcyIDMwIDMgMzBIMjlDMjkuNTUyMyAzMCAzMCAyOS41NTIzIDMwIDI5VjI4LjMwNzdDMzAgMjcuNzU1NCAyOS41NTIzIDI3LjMwNzcgMjkgMjcuMzA3N0gyNy44NDYyTTQuMTUzODUgMjcuMzA3N0gxOS43NjkySDI1LjY5MjNIMjcuODQ2Mk0yNy44NDYyIDI3LjMwNzdWMTQuOTIzMU0yNy44NDYyIDQuMTUzODVWM0MyNy44NDYyIDIuNDQ3NzIgMjcuMzk4NCAyIDI2Ljg0NjIgMkg1LjE1Mzg1QzQuNjAxNTYgMiA0LjE1Mzg1IDIuNDQ3NzIgNC4xNTM4NSAzVjQuMTUzODVNMjcuODQ2MiA0LjE1Mzg1SDIyLjQ2MTVNMjcuODQ2MiA0LjE1Mzg1TDI5LjQzMTIgOS43MDE2MkMyOS43NjEgMTAuODU1OSAyOS4yMjE5IDEyLjA4MTMgMjguMTQ4MiAxMi42MTgyVjEyLjYxODJDMjcuMzAzMSAxMy4wNDA4IDI2LjI5MTcgMTIuOTQ5NiAyNS41MzU4IDEyLjM4MjZMMjQuNjE1NCAxMS42OTIzTTQuMTUzODUgNC4xNTM4NUwyLjU2ODc3IDkuNzAxNjJDMi4yMzg5OCAxMC44NTU5IDIuNzc4MDYgMTIuMDgxMyAzLjg1MTc4IDEyLjYxODJWMTIuNjE4MkM0LjY5NjkxIDEzLjA0MDggNS43MDgyNiAxMi45NDk2IDYuNDY0MTggMTIuMzgyNkw3LjM4NDYyIDExLjY5MjNNNC4xNTM4NSA0LjE1Mzg1SDkuNTM4NDZNOS41Mzg0NiA0LjE1Mzg1TDcuMzg0NjIgMTEuNjkyM005LjUzODQ2IDQuMTUzODVIMTMuODQ2Mk03LjM4NDYyIDExLjY5MjNWMTEuNjkyM0M4Ljg3MTU0IDEzLjE3OTIgMTEuMjgyMyAxMy4xNzkyIDEyLjc2OTIgMTEuNjkyM1YxMS42OTIzTTEzLjg0NjIgNC4xNTM4NUwxMi43NjkyIDExLjY5MjNNMTMuODQ2MiA0LjE1Mzg1SDE4LjE1MzhNMTIuNzY5MiAxMS42OTIzVjExLjY5MjNDMTQuNTUzNSAxMy40NzY2IDE3LjQ0NjUgMTMuNDc2NiAxOS4yMzA4IDExLjY5MjNWMTEuNjkyM00xOC4xNTM4IDQuMTUzODVMMTkuMjMwOCAxMS42OTIzTTE4LjE1MzggNC4xNTM4NUgyMi40NjE1TTE5LjIzMDggMTEuNjkyM1YxMS42OTIzQzIwLjQxMzMgMTMuMTcwNCAyMi41NzkxIDEzLjM4OTIgMjQuMDMzMyAxMi4xNzc0TDI0LjYxNTQgMTEuNjkyM00yMi40NjE1IDQuMTUzODVMMjQuNjE1NCAxMS42OTIzTTE4LjY5MjMgMjQuNjE1NFYxNy41Mzg1QzE4LjY5MjMgMTYuOTg2MiAxOS4xNCAxNi41Mzg1IDE5LjY5MjMgMTYuNTM4NUgyMy42MTU0QzI0LjE2NzcgMTYuNTM4NSAyNC42MTU0IDE2Ljk4NjIgMjQuNjE1NCAxNy41Mzg1VjI0LjYxNTRNMTUuNDYxNSAxNy41Mzg1VjIxLjQ2MTVDMTUuNDYxNSAyMi4wMTM4IDE1LjAxMzggMjIuNDYxNSAxNC40NjE1IDIyLjQ2MTVIOC4zODQ2MkM3LjgzMjMzIDIyLjQ2MTUgNy4zODQ2MiAyMi4wMTM4IDcuMzg0NjIgMjEuNDYxNVYxNy41Mzg1QzcuMzg0NjIgMTYuOTg2MiA3LjgzMjMzIDE2LjUzODUgOC4zODQ2MiAxNi41Mzg1SDE0LjQ2MTVDMTUuMDEzOCAxNi41Mzg1IDE1LjQ2MTUgMTYuOTg2MiAxNS40NjE1IDE3LjUzODVaIiBzdHJva2U9IiM0OTUwNTciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
          Retail</button>
        <button onClick={() => handleTabClick("tab4")} className="flex text-center gap-[5px] items-center text-gray-500 border rounded-[30px] hover:border-[#ec1313] hover:text-[#ec1313] text-[18px] p-2 px-4 ">
          <img width='18px' height='18px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMTUzODUgMTQuOTIzMVYyNy4zMDc3TTQuMTUzODUgMjcuMzA3N0gzQzIuNDQ3NzIgMjcuMzA3NyAyIDI3Ljc1NTQgMiAyOC4zMDc3VjI5QzIgMjkuNTUyMyAyLjQ0NzcyIDMwIDMgMzBIMjlDMjkuNTUyMyAzMCAzMCAyOS41NTIzIDMwIDI5VjI4LjMwNzdDMzAgMjcuNzU1NCAyOS41NTIzIDI3LjMwNzcgMjkgMjcuMzA3N0gyNy44NDYyTTQuMTUzODUgMjcuMzA3N0gxOS43NjkySDI1LjY5MjNIMjcuODQ2Mk0yNy44NDYyIDI3LjMwNzdWMTQuOTIzMU0yNy44NDYyIDQuMTUzODVWM0MyNy44NDYyIDIuNDQ3NzIgMjcuMzk4NCAyIDI2Ljg0NjIgMkg1LjE1Mzg1QzQuNjAxNTYgMiA0LjE1Mzg1IDIuNDQ3NzIgNC4xNTM4NSAzVjQuMTUzODVNMjcuODQ2MiA0LjE1Mzg1SDIyLjQ2MTVNMjcuODQ2MiA0LjE1Mzg1TDI5LjQzMTIgOS43MDE2MkMyOS43NjEgMTAuODU1OSAyOS4yMjE5IDEyLjA4MTMgMjguMTQ4MiAxMi42MTgyVjEyLjYxODJDMjcuMzAzMSAxMy4wNDA4IDI2LjI5MTcgMTIuOTQ5NiAyNS41MzU4IDEyLjM4MjZMMjQuNjE1NCAxMS42OTIzTTQuMTUzODUgNC4xNTM4NUwyLjU2ODc3IDkuNzAxNjJDMi4yMzg5OCAxMC44NTU5IDIuNzc4MDYgMTIuMDgxMyAzLjg1MTc4IDEyLjYxODJWMTIuNjE4MkM0LjY5NjkxIDEzLjA0MDggNS43MDgyNiAxMi45NDk2IDYuNDY0MTggMTIuMzgyNkw3LjM4NDYyIDExLjY5MjNNNC4xNTM4NSA0LjE1Mzg1SDkuNTM4NDZNOS41Mzg0NiA0LjE1Mzg1TDcuMzg0NjIgMTEuNjkyM005LjUzODQ2IDQuMTUzODVIMTMuODQ2Mk03LjM4NDYyIDExLjY5MjNWMTEuNjkyM0M4Ljg3MTU0IDEzLjE3OTIgMTEuMjgyMyAxMy4xNzkyIDEyLjc2OTIgMTEuNjkyM1YxMS42OTIzTTEzLjg0NjIgNC4xNTM4NUwxMi43NjkyIDExLjY5MjNNMTMuODQ2MiA0LjE1Mzg1SDE4LjE1MzhNMTIuNzY5MiAxMS42OTIzVjExLjY5MjNDMTQuNTUzNSAxMy40NzY2IDE3LjQ0NjUgMTMuNDc2NiAxOS4yMzA4IDExLjY5MjNWMTEuNjkyM00xOC4xNTM4IDQuMTUzODVMMTkuMjMwOCAxMS42OTIzTTE4LjE1MzggNC4xNTM4NUgyMi40NjE1TTE5LjIzMDggMTEuNjkyM1YxMS42OTIzQzIwLjQxMzMgMTMuMTcwNCAyMi41NzkxIDEzLjM4OTIgMjQuMDMzMyAxMi4xNzc0TDI0LjYxNTQgMTEuNjkyM00yMi40NjE1IDQuMTUzODVMMjQuNjE1NCAxMS42OTIzTTE4LjY5MjMgMjQuNjE1NFYxNy41Mzg1QzE4LjY5MjMgMTYuOTg2MiAxOS4xNCAxNi41Mzg1IDE5LjY5MjMgMTYuNTM4NUgyMy42MTU0QzI0LjE2NzcgMTYuNTM4NSAyNC42MTU0IDE2Ljk4NjIgMjQuNjE1NCAxNy41Mzg1VjI0LjYxNTRNMTUuNDYxNSAxNy41Mzg1VjIxLjQ2MTVDMTUuNDYxNSAyMi4wMTM4IDE1LjAxMzggMjIuNDYxNSAxNC40NjE1IDIyLjQ2MTVIOC4zODQ2MkM3LjgzMjMzIDIyLjQ2MTUgNy4zODQ2MiAyMi4wMTM4IDcuMzg0NjIgMjEuNDYxNVYxNy41Mzg1QzcuMzg0NjIgMTYuOTg2MiA3LjgzMjMzIDE2LjUzODUgOC4zODQ2MiAxNi41Mzg1SDE0LjQ2MTVDMTUuMDEzOCAxNi41Mzg1IDE1LjQ2MTUgMTYuOTg2MiAxNS40NjE1IDE3LjUzODVaIiBzdHJva2U9IiM0OTUwNTciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
          Retail</button>
        <button onClick={() => handleTabClick("tab5")} className="flex text-center gap-[5px] items-center text-gray-500 border rounded-[30px] hover:border-[#ec1313] hover:text-[#ec1313] text-[18px] p-2 px-4 ">
          <img width='18px' height='18px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMTUzODUgMTQuOTIzMVYyNy4zMDc3TTQuMTUzODUgMjcuMzA3N0gzQzIuNDQ3NzIgMjcuMzA3NyAyIDI3Ljc1NTQgMiAyOC4zMDc3VjI5QzIgMjkuNTUyMyAyLjQ0NzcyIDMwIDMgMzBIMjlDMjkuNTUyMyAzMCAzMCAyOS41NTIzIDMwIDI5VjI4LjMwNzdDMzAgMjcuNzU1NCAyOS41NTIzIDI3LjMwNzcgMjkgMjcuMzA3N0gyNy44NDYyTTQuMTUzODUgMjcuMzA3N0gxOS43NjkySDI1LjY5MjNIMjcuODQ2Mk0yNy44NDYyIDI3LjMwNzdWMTQuOTIzMU0yNy44NDYyIDQuMTUzODVWM0MyNy44NDYyIDIuNDQ3NzIgMjcuMzk4NCAyIDI2Ljg0NjIgMkg1LjE1Mzg1QzQuNjAxNTYgMiA0LjE1Mzg1IDIuNDQ3NzIgNC4xNTM4NSAzVjQuMTUzODVNMjcuODQ2MiA0LjE1Mzg1SDIyLjQ2MTVNMjcuODQ2MiA0LjE1Mzg1TDI5LjQzMTIgOS43MDE2MkMyOS43NjEgMTAuODU1OSAyOS4yMjE5IDEyLjA4MTMgMjguMTQ4MiAxMi42MTgyVjEyLjYxODJDMjcuMzAzMSAxMy4wNDA4IDI2LjI5MTcgMTIuOTQ5NiAyNS41MzU4IDEyLjM4MjZMMjQuNjE1NCAxMS42OTIzTTQuMTUzODUgNC4xNTM4NUwyLjU2ODc3IDkuNzAxNjJDMi4yMzg5OCAxMC44NTU5IDIuNzc4MDYgMTIuMDgxMyAzLjg1MTc4IDEyLjYxODJWMTIuNjE4MkM0LjY5NjkxIDEzLjA0MDggNS43MDgyNiAxMi45NDk2IDYuNDY0MTggMTIuMzgyNkw3LjM4NDYyIDExLjY5MjNNNC4xNTM4NSA0LjE1Mzg1SDkuNTM4NDZNOS41Mzg0NiA0LjE1Mzg1TDcuMzg0NjIgMTEuNjkyM005LjUzODQ2IDQuMTUzODVIMTMuODQ2Mk03LjM4NDYyIDExLjY5MjNWMTEuNjkyM0M4Ljg3MTU0IDEzLjE3OTIgMTEuMjgyMyAxMy4xNzkyIDEyLjc2OTIgMTEuNjkyM1YxMS42OTIzTTEzLjg0NjIgNC4xNTM4NUwxMi43NjkyIDExLjY5MjNNMTMuODQ2MiA0LjE1Mzg1SDE4LjE1MzhNMTIuNzY5MiAxMS42OTIzVjExLjY5MjNDMTQuNTUzNSAxMy40NzY2IDE3LjQ0NjUgMTMuNDc2NiAxOS4yMzA4IDExLjY5MjNWMTEuNjkyM00xOC4xNTM4IDQuMTUzODVMMTkuMjMwOCAxMS42OTIzTTE4LjE1MzggNC4xNTM4NUgyMi40NjE1TTE5LjIzMDggMTEuNjkyM1YxMS42OTIzQzIwLjQxMzMgMTMuMTcwNCAyMi41NzkxIDEzLjM4OTIgMjQuMDMzMyAxMi4xNzc0TDI0LjYxNTQgMTEuNjkyM00yMi40NjE1IDQuMTUzODVMMjQuNjE1NCAxMS42OTIzTTE4LjY5MjMgMjQuNjE1NFYxNy41Mzg1QzE4LjY5MjMgMTYuOTg2MiAxOS4xNCAxNi41Mzg1IDE5LjY5MjMgMTYuNTM4NUgyMy42MTU0QzI0LjE2NzcgMTYuNTM4NSAyNC42MTU0IDE2Ljk4NjIgMjQuNjE1NCAxNy41Mzg1VjI0LjYxNTRNMTUuNDYxNSAxNy41Mzg1VjIxLjQ2MTVDMTUuNDYxNSAyMi4wMTM4IDE1LjAxMzggMjIuNDYxNSAxNC40NjE1IDIyLjQ2MTVIOC4zODQ2MkM3LjgzMjMzIDIyLjQ2MTUgNy4zODQ2MiAyMi4wMTM4IDcuMzg0NjIgMjEuNDYxNVYxNy41Mzg1QzcuMzg0NjIgMTYuOTg2MiA3LjgzMjMzIDE2LjUzODUgOC4zODQ2MiAxNi41Mzg1SDE0LjQ2MTVDMTUuMDEzOCAxNi41Mzg1IDE1LjQ2MTUgMTYuOTg2MiAxNS40NjE1IDE3LjUzODVaIiBzdHJva2U9IiM0OTUwNTciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
          Retail</button>
        <button onClick={() => handleTabClick("tab6")} className="flex text-center gap-[5px] items-center text-gray-500 border rounded-[30px] hover:border-[#ec1313] hover:text-[#ec1313] text-[18px] p-2 px-4 ">
          <img width='18px' height='18px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMTUzODUgMTQuOTIzMVYyNy4zMDc3TTQuMTUzODUgMjcuMzA3N0gzQzIuNDQ3NzIgMjcuMzA3NyAyIDI3Ljc1NTQgMiAyOC4zMDc3VjI5QzIgMjkuNTUyMyAyLjQ0NzcyIDMwIDMgMzBIMjlDMjkuNTUyMyAzMCAzMCAyOS41NTIzIDMwIDI5VjI4LjMwNzdDMzAgMjcuNzU1NCAyOS41NTIzIDI3LjMwNzcgMjkgMjcuMzA3N0gyNy44NDYyTTQuMTUzODUgMjcuMzA3N0gxOS43NjkySDI1LjY5MjNIMjcuODQ2Mk0yNy44NDYyIDI3LjMwNzdWMTQuOTIzMU0yNy44NDYyIDQuMTUzODVWM0MyNy44NDYyIDIuNDQ3NzIgMjcuMzk4NCAyIDI2Ljg0NjIgMkg1LjE1Mzg1QzQuNjAxNTYgMiA0LjE1Mzg1IDIuNDQ3NzIgNC4xNTM4NSAzVjQuMTUzODVNMjcuODQ2MiA0LjE1Mzg1SDIyLjQ2MTVNMjcuODQ2MiA0LjE1Mzg1TDI5LjQzMTIgOS43MDE2MkMyOS43NjEgMTAuODU1OSAyOS4yMjE5IDEyLjA4MTMgMjguMTQ4MiAxMi42MTgyVjEyLjYxODJDMjcuMzAzMSAxMy4wNDA4IDI2LjI5MTcgMTIuOTQ5NiAyNS41MzU4IDEyLjM4MjZMMjQuNjE1NCAxMS42OTIzTTQuMTUzODUgNC4xNTM4NUwyLjU2ODc3IDkuNzAxNjJDMi4yMzg5OCAxMC44NTU5IDIuNzc4MDYgMTIuMDgxMyAzLjg1MTc4IDEyLjYxODJWMTIuNjE4MkM0LjY5NjkxIDEzLjA0MDggNS43MDgyNiAxMi45NDk2IDYuNDY0MTggMTIuMzgyNkw3LjM4NDYyIDExLjY5MjNNNC4xNTM4NSA0LjE1Mzg1SDkuNTM4NDZNOS41Mzg0NiA0LjE1Mzg1TDcuMzg0NjIgMTEuNjkyM005LjUzODQ2IDQuMTUzODVIMTMuODQ2Mk03LjM4NDYyIDExLjY5MjNWMTEuNjkyM0M4Ljg3MTU0IDEzLjE3OTIgMTEuMjgyMyAxMy4xNzkyIDEyLjc2OTIgMTEuNjkyM1YxMS42OTIzTTEzLjg0NjIgNC4xNTM4NUwxMi43NjkyIDExLjY5MjNNMTMuODQ2MiA0LjE1Mzg1SDE4LjE1MzhNMTIuNzY5MiAxMS42OTIzVjExLjY5MjNDMTQuNTUzNSAxMy40NzY2IDE3LjQ0NjUgMTMuNDc2NiAxOS4yMzA4IDExLjY5MjNWMTEuNjkyM00xOC4xNTM4IDQuMTUzODVMMTkuMjMwOCAxMS42OTIzTTE4LjE1MzggNC4xNTM4NUgyMi40NjE1TTE5LjIzMDggMTEuNjkyM1YxMS42OTIzQzIwLjQxMzMgMTMuMTcwNCAyMi41NzkxIDEzLjM4OTIgMjQuMDMzMyAxMi4xNzc0TDI0LjYxNTQgMTEuNjkyM00yMi40NjE1IDQuMTUzODVMMjQuNjE1NCAxMS42OTIzTTE4LjY5MjMgMjQuNjE1NFYxNy41Mzg1QzE4LjY5MjMgMTYuOTg2MiAxOS4xNCAxNi41Mzg1IDE5LjY5MjMgMTYuNTM4NUgyMy42MTU0QzI0LjE2NzcgMTYuNTM4NSAyNC42MTU0IDE2Ljk4NjIgMjQuNjE1NCAxNy41Mzg1VjI0LjYxNTRNMTUuNDYxNSAxNy41Mzg1VjIxLjQ2MTVDMTUuNDYxNSAyMi4wMTM4IDE1LjAxMzggMjIuNDYxNSAxNC40NjE1IDIyLjQ2MTVIOC4zODQ2MkM3LjgzMjMzIDIyLjQ2MTUgNy4zODQ2MiAyMi4wMTM4IDcuMzg0NjIgMjEuNDYxNVYxNy41Mzg1QzcuMzg0NjIgMTYuOTg2MiA3LjgzMjMzIDE2LjUzODUgOC4zODQ2MiAxNi41Mzg1SDE0LjQ2MTVDMTUuMDEzOCAxNi41Mzg1IDE1LjQ2MTUgMTYuOTg2MiAxNS40NjE1IDE3LjUzODVaIiBzdHJva2U9IiM0OTUwNTciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
          Retail</button>
      </div>

      <div className="image-container flex flex-col w-full  mt-[5rem]">
        {activeTab === "tab1" && (
          <div className="flex flex-wrap  justify-center  w-[80%] mx-auto  gap-[20px]">
            <div className="w-[300px] h-[140px]">
              <img
                src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                alt="Shell"
                className="animated-image fade-in"
              />
            </div>
            <div className="w-[300px] h-[140px]">
              <img
                src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                alt="Shell"
                className="animated-image fade-in"
              />
            </div>
            <div className="w-[300px] h-[140px]">
              <img
                src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                alt="Shell"
                className="animated-image fade-in"
              />
            </div>

            <div className="w-[300px] h-[140px] ">
              <img
                src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                alt="Shell"
                className="animated-image fade-in"
              />
            </div>

            <div className="flex mt-[3rem] w-[80%] justify-center gap-[20px]">
              <div className="w-[300px] h-[140px]">
                <img
                  src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                  alt="Shell"
                  className="animated-image fade-in"
                />
              </div>
              <div className="w-[300px] h-[140px]">
                <img
                  src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-2.webp"
                  alt="Shell"
                  className="animated-image fade-in"
                />
              </div>
            </div>

          </div>
        )}
        {activeTab === "tab2" && (
          <div className="flex flex-wrap justify-center  w-[80%] mx-auto  gap-[20px]">
            <div className="w-[300px] h-[140px]">
              <img
                src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                alt="Shell"
                className="animated-image fade-in"
              />
            </div>

            <div className="w-[300px] h-[140px]">
              <img
                src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                alt="Shell"
                className="animated-image fade-in"
              />
            </div>
            <div className="w-[300px] h-[140px]">
              <img
                src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                alt="Shell"
                className="animated-image fade-in"
              />
            </div>
            <div className="w-[300px] h-[140px]">
              <img
                src="https://www.pickcel.com/assets/img/templates/restaurant/restaurant-landscape-1.webp"
                alt="Shell"
                className="animated-image fade-in"
              />
            </div>

          </div>
        )}


      </div>
    </div>
  );
};

export default Tabcontent;
