import styles from "./layout.module.css";
import Image from "next/image";
import { BsFillCartPlusFill } from "react-icons/bs";
import React, { useEffect } from "react";

export default function SearchBar() {
  // function myFunction() {
  //     useEffect(() => {
  //         var input, filter, ul, li, a, i, txtValue;
  //         input = document.getElementById("myInput");
  //         filter = input.value.toUpperCase();
  //         ul = document.getElementById("myUL");
  //         li = ul.getElementsByTagName("li");
  //         for (i = 0; i < li.length; i++) {
  //             a = li[i].getElementsByTagName("a")[0];
  //             txtValue = a.textContent || a.innerText;
  //             if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //                 li[i].style.display = "";
  //             } else {
  //                 li[i].style.display = "none";
  //             }
  //         }
  //     }, [])
  // }
  return (
    <>
      <div
        className={`row ${styles.searchbar}`}
        style={{ backgroundColor: " #ffffff" }}
      >
        <div className="col d-flex flex-direction-row">
          <Image src="/images/logo.png" height={35} width={180} />
          <input
            className="styled_input"
            type="text"
            id="myInput"
            placeholder="Search for cars..."
          />
          {/* <ul id="myUL">
                        <li><a href="#">Adele</a></li>
                        <li><a href="#">Agnes</a></li>
                    </ul> */}
          <button className={styles.search_button}>Search</button>
          <div className={styles.cart_bg}>
            <BsFillCartPlusFill color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
