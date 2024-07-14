import React from 'react'
import Header from './../Header/Header';
import imgSearch from '../../Assets/ProductSearchNotFound.jpg'
import styles from './SearchNotFound.module.css'
function SearchNotFound() {
    return (
        <div>
            <div className={styles.imgProduct}>
                <img src={imgSearch} alt="ProductSearchNotFound" className={styles.searchImage} />
            </div>
            <footer/>
        </div>
    )
}

export default SearchNotFound
