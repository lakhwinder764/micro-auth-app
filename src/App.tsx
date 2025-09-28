import { useState } from 'react'
import './App.css'
import Login from './exposes/Login'
import UserProfile from './exposes/UserProfile';
import { useSessionStore } from './shared/store';

function App() {
const user = useSessionStore((s) => s.user);
  return user ? (
    <UserProfile/>
  ) : (
    <Login/>
  )
}

export default App
