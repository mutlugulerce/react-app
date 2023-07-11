import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
     cinsiyet: '',
    girisYili: '',
    primGun: '',
    yas: '',
    emeklilikDurumu: '',
 
}



export const emeklilikSlice = createSlice({
    name: 'emeklilik',
    initialState,
    reducers:{
        setEmeklilikDurumu: (state, action) => {
            state.emeklilikDurumu = action.payload;
          },
          setGirisYili: (state, action) => {
            state.girisYili = action.payload;
          },
          setPrimGun: (state, action) => {
            state.primGun = action.payload;
          },
          setYas: (state, action) => {
            state.yas = action.payload;
          },
          setCinsiyet: (state,action) => {
            state.cinsiyet = action.payload
          },
        
    }
})


export const { setGirisYili, setPrimGun, setYas, setEmeklilikDurumu,setCinsiyet,setIsMessage} = emeklilikSlice.actions;
export default emeklilikSlice.reducer;