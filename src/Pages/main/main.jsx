import React from 'react'
import photo from './../../Images/photo.png'
import photo1 from './../../Images/photo1.png'
import photo2 from './../../Images/photo2.png'
import note from './../../Images/note.png'
import rocket from './../../Images/rocket.png'
import gift from '../../Images/gift.png'
import tree from './../../Images/tree.png'
import screen from './../../Images/screen.png'
import Css from './main.module.css'
import MainHeader from './../Mainheader/MainHeader'
import {Link} from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
            <MainHeader />
            <div className={Css.content}>
                <div className={Css.textContent}>
                    <h1>Gift me</h1>
                    <br/>
                    <p>Gift.me – это сайт, где пользователи могут размещать свои желаемые подарки, даже указать ссылку на этот подарок.
Возможность делиться вещами.</p>
                   <Link to = '/wishlist'><button className={Css.content_button}>Создать WishList</button></Link>
                </div>
                <div className={Css.photoContent}>
                    <img src={photo} alt="" />
                </div>
            </div>
            <div className={Css.content2}>
                <div>
                    <img src={photo1} alt="photo1" />
                </div>
                <div className={Css.content2_text}>
                    <p>Vestibulum augue tortor, condimentum et neque quis, bibendum dignissim neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.</p>
                </div>
            </div>
            <div className={Css.content3}>
                <div className={Css.content3_text}>
                    <p>Vestibulum augue tortor, condimentum et neque quis, bibendum dignissim neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.</p>
                </div>
                <div className={Css.content3_photo}>
                    <img src={photo2} alt="photo2" />
                </div>
            </div>
            <div id='Mission' className={Css.product}>
                <div className={Css.row}>
                    <div className={Css.blog}>
                        <img src={note} alt="note" />
                        <h1>Создавай</h1>
                    </div>
                    <div className={Css.blog}>
                        <img src={rocket} alt="rocket" />
                        <h1>Делись</h1>
                    </div>
                    <div className={Css.blog}>
                        <img src={gift} alt="gift" />
                        <h1>Получай</h1>
                    </div>
                </div>
            </div>
            <div className={Css.content4}>
                <div className={Css.content4_text}>
                    <p>Хочешь в команду супер героев?! Дари крутые вещи из своего арсенала которыми ты уже не пользуешься  своим друзьям, тем самым уменьшив экологический след стань частью защитников природы :) </p>
                </div>
                <div>
                    <img src={tree} alt="tree" />
                </div>

            </div>

            <div className={Css.screen_img}>
                <img src={screen} alt="screen" />
            </div>

        </div>
    )
}

export default MainPage;