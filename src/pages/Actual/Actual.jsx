import React, {useState} from 'react';
import ScrollToTop from "react-scroll-to-top";
import Post from '../../components/post/Post'
// import union from '../../assets/images/Union.png'

import PostImage from '../../assets/images/PostImage.png'
import news from "../../assets/images/news.png"
import projects from "../../assets/images/projects.png"
import announces from "../../assets/images/announces.png"

import calendar from "../../assets/images/calendar.png"
import relevant from "../../assets/images/relevant.png"

import { ReactComponent as MySVG } from "../../assets/images/UpSelection.svg";

import './actual.scss'

function Actual() {
    const title = 'Тамагочи в SDU'
    const content = 'Обожечки! Да это же настоящие тамагочи из детства! Вы можете играть, кормить, ухаживать за питомцем, которого выберете из 168 предоставленных персонажей! Тут есть даже Наруто и Патрик! И ты уже точно не забудешь его дома, ведь эти тамагочи еще и брелоки!———————————————————————Наличие и размер необходимого вам товара обязательно уточняйте через директ, сообщения группы или ватсапАктуальные цены вы можете посмотреть на '
    const img = PostImage
    const [query, setQuery] = useState("")
    const posttype= "Лента"
    const typenews = "Новости"
    const typeprojects = "Проекты"
    const typeannounces = "Анонсы"

    const sortby = "Сортировать по"
    const dateby = "Дате"
    const releventby = "Релевантности"


    return (
        
        <>
            <div className='main-content'>
                <div className='to-the-top'>

                    <button type='button' id='scrollToTopBtn' className='top-button' >
                        <ScrollToTop smooth className='scroll' component={<MySVG />}/>
                        {/* <img src={union} alt="union" />
                        <p>Наверх</p> */}
                    </button>
                </div>
                <div className='post-container'>
                    <div className='actualnoe'>
                        <p>Актуальное</p>
                    </div>
                    <div className='posts'>
                        <Post title = {title} content = {content} image = {img}/>
                        <Post title = {title} content = {content} image = {img}/>

                        
                    </div>
                </div>
                <div className='filter-post'>
                    <div className='search-field'>
                        <input placeholder="" className='icon' onChange={event => setQuery(event.target.value)} />
                    </div>
                    <div className='post-type'>
                        <div className='post-type-1'>
                            <p>{posttype}</p>
                        </div>
                        <div className='post-type-2'>
                            <img src={news} alt="" />
                            <p>{typenews}</p>

                        </div>
                        <div className='post-type-2'>
                            <img src={projects} alt="" />
                            <p>{typeprojects}</p>

                        </div>
                        <div className='post-type-2'>
                            <img src={announces} alt="" />
                            <p>{typeannounces}</p>

                        </div>
                    </div>

                    <div className='post-type'>
                        <div className='post-type-1'>
                            <p>{sortby}</p>
                        </div>
                        <div className='post-type-2'>
                            <img src={calendar} alt="" />
                            <p>{dateby}</p>

                        </div>
                        <div className='post-type-2'>
                            <img src={relevant} alt="" />
                            <p>{releventby}</p>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Actual;