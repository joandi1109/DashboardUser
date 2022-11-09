
// import * as React from 'react';
import { Route, Routes } from 'react-router-dom'
import { DashboardPengguna } from './Page/DashboardPengguna';
import { BuatPengguna } from './Page/BuatPengguna';
import { LihatPengguna } from './Page/LihatPengguna';
import { BuatPost } from './Page/BuatPost'

// import { withStyles } from "@material-ui/core/styles";



function App() {
  return <Routes>
    <Route path="/" element={<DashboardPengguna />} />
    <Route path="/buatPengguna" element={<BuatPengguna />} />
    <Route path="/lihatPengguna" element={<LihatPengguna/>}/>
    <Route path="/buatPost" element={<BuatPost/>}/>
  </Routes>
  
}

export default App;
