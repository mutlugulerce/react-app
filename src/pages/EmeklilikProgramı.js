import { useSelector, useDispatch } from "react-redux";
import { setCinsiyet, setEmeklilikDurumu, setGirisYili, setPrimGun, setYas } from "../store/emeklilikSlice";
import Form from "../components/Form";
import { useNavigate } from 'react-router-dom';




export default function EmeklilikProgramı() {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const { girisYili, primGun, yas,  cinsiyet,} = useSelector(
    (state) => state.emeklilik
  );

  const hesapla = () => {


    if (cinsiyet === "Erkek") {
      
       if (girisYili <= "1976-09-08") {
        if (primGun >= 5000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5000 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1976-09-09" && girisYili <= "1979-05-23") {
        if (primGun >= 5000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5000 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1979-05-24" && girisYili <= "1980-11-23") {
        if (primGun >= 5000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5000 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1980-11-24" && girisYili <= "1982-05-23") {
        if (primGun >= 5075) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5075 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1982-05-24" && girisYili <= "1983-11-23") {
        if (primGun >= 5150) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5150 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1983-11-24" && girisYili <= "1985-05-23") {
        if (primGun >= 5225) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5225 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1985-05-24" && girisYili <= "1986-11-23") {
        if (primGun >= 5300) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5300 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1986-11-24" && girisYili <= "1988-05-23") {
        if (primGun >= 5375) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5375 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1988-05-24" && girisYili <= "1989-11-23") {
        if (primGun >= 5450) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5450 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1989-11-24" && girisYili <= "1991-05-23") {
        if (primGun >= 5525) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5525 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1991-05-24" && girisYili <= "1992-11-23") {
        if (primGun >= 5600) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5600 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1992-11-24" && girisYili <= "1994-05-23") {
        if (primGun >= 5675) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5675 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1994-05-24" && girisYili <= "1995-11-23") {
        if (primGun >= 5750) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5750 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1995-11-24" && girisYili <= "1997-05-23") {
        if (primGun >= 5825) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5825 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1997-05-24" && girisYili <= "1998-11-23") {
        if (primGun >= 5900) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5900 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1998-11-24" && girisYili <= "1999-09-08") {
        if (primGun >= 5975) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5975 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1999-09-09" && girisYili <= "2008-04-30") {
        if (yas >= 60 && primGun >= 7000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 60 - yas;
          const eksikPrim = 7000 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2008-05-01" && girisYili <= "2035-12-31") {
        if (yas >= 60 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 60 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2036-01-01" && girisYili <= "2037-12-31") {
        if (yas >= 61 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 61 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2038-01-01" && girisYili <= "2039-12-31") {
        if (yas >= 62 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 62 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2040-01-01" && girisYili <= "2041-12-31") {
        if (yas >= 63 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 63 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2042-01-01" && girisYili <= "2043-12-31") {
        if (yas >= 64 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 64 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2044-01-01") {
        if (yas >= 65 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 65 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      }


    } else if (cinsiyet === "Kadın") {
       if (girisYili < "1981-04-01") {
        if (primGun >= 5000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5000 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1981-04-01" && girisYili <= "1981-09-08") {
        if (primGun >= 5000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5000 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1981-09-09" && girisYili <= "1984-05-23") {
        if (primGun >= 5000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5000 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1984-05-24" && girisYili <= "1985-05-23") {
        if (primGun >= 5000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5000 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1985-05-24" && girisYili <= "1986-05-23") {
        if (primGun >= 5075) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5075 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1986-05-24" && girisYili <= "1987-05-23") {
        if (primGun >= 5150) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5150 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1987-05-24" && girisYili <= "1988-05-23") {
        if (primGun >= 5225) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5225 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1988-05-24" && girisYili <= "1989-05-23") {
        if (primGun >= 5300) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5300 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1989-05-24" && girisYili <= "1990-05-23") {
        if (primGun >= 5375) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5375 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1990-05-24" && girisYili <= "1991-05-23") {
        if (primGun >= 5450) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5450 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1991-05-24" && girisYili <= "1992-05-23") {
        if (primGun >= 5525) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5525 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1992-05-24" && girisYili <= "1993-05-23") {
        if (primGun >= 5600) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5600 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1993-05-24" && girisYili <= "1994-05-23") {
        if (primGun >= 5675) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5675 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1994-05-24" && girisYili <= "1995-05-23") {
        if (primGun >= 5750) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5750 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1995-05-24" && girisYili <= "1996-05-23") {
        if (primGun >= 5825) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5825 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1996-05-24" && girisYili <= "1997-05-23") {
        if (primGun >= 5900) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5900 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1997-05-24" && girisYili <= "1998-05-23") {
        if (primGun >= 5975) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5975 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1998-05-24" && girisYili <= "1999-05-23") {
        if (primGun >= 5975) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5975 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1999-05-24" && girisYili <= "1999-09-08") {
        if (primGun >= 5975) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikPrim = 5975 - primGun;
          dispatch(
            setEmeklilikDurumu(`Prim günü eksik. Eksik prim günü: ${eksikPrim}`)
          );
        }
      } else if (girisYili >= "1999-09-09" && girisYili <= "2008-04-30") {
        if (yas >= 58 && primGun >= 7000) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 58 - yas;
          const eksikPrim = 7000 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2008-05-01" && girisYili <= "2035-12-31") {
        if (yas >= 58 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 58 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2036-01-01" && girisYili <= "2037-12-31") {
        if (yas >= 59 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 59 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2038-01-01" && girisYili <= "2039-12-31") {
        if (yas >= 60 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 60 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2040-01-01" && girisYili <= "2041-12-31") {
        if (yas >= 61 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 61 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2042-01-01" && girisYili <= "2043-12-31") {
        if (yas >= 61 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 61 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2044-01-01" && girisYili <= "2045-12-31") {
        if (yas >= 63 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 63 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2046-01-01" && girisYili <= "2047-12-31") {
        if (yas >= 64 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 64 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş ve prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      } else if (girisYili >= "2048-01-01") {
        if (yas >= 65 && primGun >= 7200) {
          dispatch(setEmeklilikDurumu("Emekli olabilir"));
        } else {
          const eksikYas = 65 - yas;
          const eksikPrim = 7200 - primGun;
          dispatch(
            setEmeklilikDurumu(
              `Emeklilik için yaş veya prim günü eksik. Eksik yaş: ${eksikYas}, eksik prim günü: ${eksikPrim}`
            )
          );
        }
      }

    } else {
      dispatch(setEmeklilikDurumu("Eksik-Hatalı Giriş Yapıldı.Lütfen Verileri Kontrol Ediniz... "));
    }
  

  navigate('/sonuc');
  
  setCinsiyet('');
  setGirisYili('');
  setYas('');
  setPrimGun('');
  
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-orange-500 to-purple-500 ">
      <div className="flex flex-col items-center justify-center  w-screen h-screen">
 <Form hesapla={hesapla} />   

      </div>
    </div>
  );
}
