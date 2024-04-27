import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";
import { useState } from "react";

export const AddProductForm = ({ toggleForm }) => {
  const [ titleProd, setTitleProd ] = useState('');
  const [ priceProd, setPriceProd ] = useState('');
  const [ descrProd, setDescrProd ] = useState('');
  const [ imgProd, setImgProd ] = useState('');
  const [ isClose, setIsClose ] = useState(false);

  const isButtonDisabled = !titleProd || !priceProd || !descrProd;

  const dispatch = useDispatch();

  const clickHandler = () => {
    const newProduct = {
      id: Date.now(),
      price: priceProd,
      title: titleProd,
      descr: descrProd,
      // img: imgProd ? process.env.PUBLIC_URL + imgProd : process.env.PUBLIC_URL + '/img/not.png',
      img: imgProd ? imgProd : '/img/not.png',
      publish: true,
    }

    console.log("New Product:", newProduct);

    dispatch(addProduct({ product: newProduct }));

    setTitleProd('');
    setPriceProd('');
    setDescrProd('');
    setImgProd('');

    setIsClose(true);
    toggleForm();
  }

  return (
    <>
      {
        !isClose && (
          <div className="form">
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
              <label className="form__label">

                <input onChange={(e) => setTitleProd(e.target.value)} type="text" placeholder="title" value={titleProd} />
                
                <input onChange={(e) => setPriceProd(e.target.value)} type="text" placeholder="price" value={priceProd} />
                
                <input onChange={(e) => setDescrProd(e.target.value)} type="text" placeholder="descr" value={descrProd} />
                
                <input onChange={(e) => setImgProd(e.target.value)} type="text" placeholder="img/img1.jpg" value={imgProd} />
              
              </label>

              <button onClick={ clickHandler } disabled={ isButtonDisabled } className="form__btn-add" >Add</button>
            </div>
          </div>
        )
      }

      { isClose && null } {/* Додаємо умову для приховування форми, коли isClose дорівнює true */}
    </>
  );
};